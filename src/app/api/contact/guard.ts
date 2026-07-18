// Spam / abuse protection for the public contact endpoint.
//
// This is a static marketing site with a single write endpoint, so the guard
// only needs to cover the two realistic abuse vectors: bots hammering the form
// (inbox flooding / burning our email quota) and using the follow-up email as a
// relay to send mail to arbitrary third parties.

/** Max accepted lengths, so a single request can't dump megabytes into our inbox. */
const LIMITS = {
  name: 100,
  email: 254, // RFC 5321 max
  message: 5000,
  answerKey: 60,
  answerValue: 500,
  answerCount: 30,
};

// Deliberately simple: one address, no display name, no comments. We only need
// enough to reject obvious garbage and non-addresses before handing it to Resend.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type CleanContact = {
  intent: "project" | "general";
  answers: Record<string, string>;
  message: string;
  name: string;
  email: string;
};

/**
 * Validate and normalise an incoming contact payload. Returns the cleaned data
 * on success, or an error string describing why it was rejected. Never throws.
 */
export function validateContact(body: unknown): { data: CleanContact } | { error: string } {
  if (typeof body !== "object" || body === null) {
    return { error: "Invalid request body" };
  }

  const b = body as Record<string, unknown>;

  // Honeypot: a hidden field real users never see. If it's filled in, it's a bot.
  // We report it as an error here; the caller chooses to respond with a fake 200.
  if (typeof b.company === "string" && b.company.trim() !== "") {
    return { error: "spam" };
  }

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";

  if (!name || !email) return { error: "Missing name or email" };
  if (name.length > LIMITS.name) return { error: "Name is too long" };
  if (email.length > LIMITS.email || !EMAIL_RE.test(email)) {
    return { error: "Please enter a valid email address" };
  }

  const intent = b.intent === "project" ? "project" : "general";

  const message = typeof b.message === "string" ? b.message : "";
  if (message.length > LIMITS.message) return { error: "Message is too long" };

  const answers: Record<string, string> = {};
  if (typeof b.answers === "object" && b.answers !== null) {
    const entries = Object.entries(b.answers as Record<string, unknown>).slice(0, LIMITS.answerCount);
    for (const [key, value] of entries) {
      if (typeof value !== "string") continue;
      answers[key.slice(0, LIMITS.answerKey)] = value.slice(0, LIMITS.answerValue);
    }
  }

  return { data: { intent, answers, message, name, email } };
}

/** Best-effort client IP from the proxy chain. Falls back to a shared bucket. */
export function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

// --- Rate limiting -------------------------------------------------------
//
// In-memory fixed-window limiter. This is intentionally simple and has one known
// limitation: on serverless (e.g. Vercel) each instance keeps its own counter,
// so a determined attacker hitting many cold instances gets more than the limit.
// Combined with the honeypot that still stops the overwhelming majority of abuse.
// To make this bulletproof across instances, swap this map for a shared store
// (Upstash Redis + @upstash/ratelimit) — the call site below stays the same.

const WINDOW_MS = 60_000; // 1 minute
const MAX_PER_WINDOW = 5; // submissions per IP per window

const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(ip: string): { allowed: boolean } {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    sweep(now);
    return { allowed: true };
  }

  if (entry.count >= MAX_PER_WINDOW) return { allowed: false };

  entry.count += 1;
  return { allowed: true };
}

// Drop expired entries occasionally so the map doesn't grow unbounded.
let lastSweep = 0;
function sweep(now: number) {
  if (now - lastSweep < WINDOW_MS) return;
  lastSweep = now;
  for (const [key, entry] of hits) {
    if (now > entry.resetAt) hits.delete(key);
  }
}
