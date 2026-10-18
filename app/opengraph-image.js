import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Giridhari Pal — Backend & Systems Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const face = await readFile(join(process.cwd(), "public/images/og-face.jpg"));
  const src = `data:image/jpeg;base64,${face.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0B1020",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(236,72,153,0.35), transparent 45%), radial-gradient(circle at 10% 90%, rgba(59,130,246,0.35), transparent 45%)",
          color: "#EEF0F8",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 30, color: "#A6AEC8" }}>Hey there! I&apos;m</div>
        <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1.05 }}>Giridhari Pal</div>
        <div
          style={{
            marginTop: 20,
            fontSize: 44,
            fontWeight: 700,
            background: "linear-gradient(90deg,#60a5fa,#c084fc,#f472b6)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Backend & Systems Engineer
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#A6AEC8" }}>
          IoT telemetry · Real-time data pipelines · Applied ML
        </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          width={380}
          height={380}
          style={{ borderRadius: 190, border: "6px solid #C084FC" }}
        />
      </div>
    ),
    size
  );
}
