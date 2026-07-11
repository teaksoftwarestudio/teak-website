import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Teak Software Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand palette (mirrors globals.css)
const CREAM = "#FAF8F5";
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
          alignItems: "center",
          justifyContent: "center",
          background: CREAM,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoDataUri} alt="" width={320} height={320} />
      </div>
    ),
    { ...size },
  );
}
