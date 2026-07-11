import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Teak Software Studio — Web, Mobile & AI Products";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand palette (mirrors globals.css)
const CREAM = "#FAF8F5";
const INK = "#151311";
const TEAK = "#8B6F47";

export default async function Image() {
  // Load the real logo mark and recolor it to teak for the cream card.
  const logoSvg = (
    await readFile(join(process.cwd(), "public", "teak-logo-primary.svg"), "utf-8")
  ).replace('fill="#111111"', `fill="${TEAK}"`);
  const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: CREAM,
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoDataUri} alt="" width={52} height={52} />
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: INK,
            }}
          >
            Teak Software Studio
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: INK,
              maxWidth: 900,
            }}
          >
            <span>Thoughtful software,&nbsp;</span>
            <span style={{ color: TEAK }}>beautifully delivered.</span>
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(21,19,17,0.6)",
              maxWidth: 820,
            }}
          >
            Web applications, mobile apps, and AI systems for teams who care
            about quality.
          </div>
        </div>

        {/* Bottom: url bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 24,
            fontWeight: 600,
            color: TEAK,
            letterSpacing: "0.02em",
          }}
        >
          teaksoftware.studio
        </div>
      </div>
    ),
    { ...size },
  );
}
