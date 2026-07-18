import { NextResponse } from "next/server";
import { Resend } from "resend";
import { followupEmailHtml, notificationEmailHtml } from "./emails";
import { clientIp, rateLimit, validateContact } from "./guard";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_TO = "hello@teaksoftware.studio";
const FOLLOWUP_FROM = "Ifaz from Teak Software <ifaz@teaksoftware.studio>";
const NOTIFY_FROM = "Teak Website <hello@teaksoftware.studio>";
const FOLLOWUP_DELAY_MINUTES = Number(process.env.FOLLOWUP_DELAY_MINUTES) || 90;

export async function POST(request: Request) {
  // Throttle by IP before doing any work, so a flood can't burn our email quota.
  if (!rateLimit(clientIp(request)).allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const result = validateContact(raw);
  if ("error" in result) {
    // A tripped honeypot means a bot: pretend it worked so we don't teach the
    // bot how to get past us, but send nothing.
    if (result.error === "spam") {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const { intent, answers, message, name, email } = result.data;

  const summaryLines = Object.entries(answers)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  // The notification to us is the email that matters — if it fails, the
  // submission has effectively been lost, so surface that as an error.
  try {
    await resend.emails.send({
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      replyTo: email,
      subject: `New ${intent === "project" ? "project" : "general"} inquiry — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Intent: ${intent}`,
        summaryLines,
        "",
        "Message:",
        message || "(none)",
      ].join("\n"),
      html: notificationEmailHtml({ name, email, intent, answers, message }),
    });
  } catch (err) {
    console.error("Failed to send notification email:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }

  // The follow-up is a nicety. If it fails, we've still captured the lead, so
  // don't fail the whole request — just log it.
  try {
    const scheduledAt = new Date(Date.now() + FOLLOWUP_DELAY_MINUTES * 60 * 1000).toISOString();

    await resend.emails.send({
      from: FOLLOWUP_FROM,
      to: email,
      subject: "Following up on your message",
      scheduledAt,
      text: followupText(name),
      html: followupEmailHtml({ name }),
    });
  } catch (err) {
    console.error("Failed to schedule follow-up email:", err);
  }

  return NextResponse.json({ ok: true });
}

function followupText(name: string) {
  const firstName = name.trim().split(/\s+/)[0];
  return `Hi ${firstName},

Thanks for reaching out to Teak Software — I just read through what you sent over.

I'd like to set up a quick 15-20 minute call to understand what you're looking to build and see if we're a good fit. Would you have some time this week?

Feel free to reply here with a few times that work for you, or a good number to reach you at.

Talk soon,
Ifaz
Teak Software`;
}
