import { NextResponse } from "next/server";
import { Resend } from "resend";
import { followupEmailHtml, notificationEmailHtml } from "./emails";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_TO = "hello@teaksoftware.studio";
const FOLLOWUP_FROM = "Ifaz from Teak Software <ifaz@teaksoftware.studio>";
const NOTIFY_FROM = "Teak Website <hello@teaksoftware.studio>";
const FOLLOWUP_DELAY_MINUTES = Number(process.env.FOLLOWUP_DELAY_MINUTES) || 90;

type ContactPayload = {
  intent: "project" | "general";
  answers: Record<string, string>;
  message: string;
  name: string;
  email: string;
};

export async function POST(request: Request) {
  const body: ContactPayload = await request.json();
  const { intent, answers, message, name, email } = body;

  if (!name || !email) {
    return NextResponse.json({ error: "Missing name or email" }, { status: 400 });
  }

  const summaryLines = Object.entries(answers)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

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

  const scheduledAt = new Date(Date.now() + FOLLOWUP_DELAY_MINUTES * 60 * 1000).toISOString();

  await resend.emails.send({
    from: FOLLOWUP_FROM,
    to: email,
    subject: "Following up on your message",
    scheduledAt,
    text: followupText(name),
    html: followupEmailHtml({ name }),
  });

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
