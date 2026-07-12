const COLORS = {
  cream: "#FAF8F5",
  ink: "#151311",
  inkMuted: "rgba(21,19,17,0.6)",
  teak: "#8B6F47",
  teakPale: "#EFE5D6",
  hairline: "rgba(21,19,17,0.09)",
  white: "#FFFFFF",
};

function shell(bodyHtml: string) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:${COLORS.cream};font-family:'DM Sans',Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.cream};padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:${COLORS.white};border-radius:16px;overflow:hidden;border:1px solid ${COLORS.hairline};">
            <tr>
              <td style="padding:32px 40px 24px;border-bottom:1px solid ${COLORS.hairline};">
                <span style="font-size:13px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${COLORS.teak};">Teak Software</span>
              </td>
            </tr>
            <tr>
              <td style="padding:36px 40px;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px;border-top:1px solid ${COLORS.hairline};">
                <p style="margin:0;font-size:12px;line-height:1.6;color:${COLORS.inkMuted};">
                  Teak Software Studio &middot; teaksoftware.studio<br />
                  This email was sent to you following an inquiry on our website.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function notificationEmailHtml(params: {
  name: string;
  email: string;
  intent: string;
  answers: Record<string, string>;
  message: string;
}) {
  const { name, email, intent, answers, message } = params;

  const rows = Object.entries(answers)
    .map(
      ([key, value]) => `
      <tr>
        <td style="padding:6px 0;font-size:13px;color:${COLORS.inkMuted};width:120px;vertical-align:top;">${escapeHtml(key)}</td>
        <td style="padding:6px 0;font-size:13px;color:${COLORS.ink};">${escapeHtml(value)}</td>
      </tr>`
    )
    .join("");

  const body = `
    <h1 style="margin:0 0 6px;font-size:22px;font-weight:600;color:${COLORS.ink};">New ${intent === "project" ? "project" : "general"} inquiry</h1>
    <p style="margin:0 0 24px;font-size:14px;color:${COLORS.inkMuted};">Submitted via the contact form on teaksoftware.studio</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.teakPale};border-radius:10px;padding:16px 20px;margin-bottom:20px;">
      <tr>
        <td style="padding:6px 0;font-size:13px;color:${COLORS.inkMuted};width:120px;">Name</td>
        <td style="padding:6px 0;font-size:13px;color:${COLORS.ink};font-weight:600;">${escapeHtml(name)}</td>
      </tr>
      <tr>
        <td style="padding:6px 0;font-size:13px;color:${COLORS.inkMuted};">Email</td>
        <td style="padding:6px 0;font-size:13px;color:${COLORS.ink};font-weight:600;">${escapeHtml(email)}</td>
      </tr>
      ${rows}
    </table>

    ${
      message
        ? `<p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${COLORS.teak};">Message</p>
           <p style="margin:0;font-size:14px;line-height:1.7;color:${COLORS.ink};white-space:pre-wrap;">${escapeHtml(message)}</p>`
        : ""
    }
  `;

  return shell(body);
}

export function followupEmailHtml(params: { name: string }) {
  const firstName = params.name.trim().split(/\s+/)[0];

  const body = `
    <h1 style="margin:0 0 18px;font-size:22px;font-weight:600;color:${COLORS.ink};">Hi ${escapeHtml(firstName)},</h1>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:${COLORS.ink};">
      Thanks for reaching out to Teak Software — I just read through what you sent over.
    </p>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:${COLORS.ink};">
      I'd like to set up a quick 15&ndash;20 minute call to understand what you're looking to build and see if we're a good fit. Would you have some time this week?
    </p>
    <p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:${COLORS.ink};">
      Feel free to reply here with a few times that work for you, or a good number to reach you at.
    </p>
    <p style="margin:0;font-size:15px;line-height:1.7;color:${COLORS.ink};">
      Talk soon,<br />
      <strong>Ifaz</strong><br />
      <span style="color:${COLORS.inkMuted};font-size:13px;">Teak Software</span>
    </p>
  `;

  return shell(body);
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
