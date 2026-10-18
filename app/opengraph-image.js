import { ImageResponse } from "next/og";

export const alt = "Giridhari Pal — Backend & Systems Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          backgroundColor: "#0B1020",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(236,72,153,0.35), transparent 45%), radial-gradient(circle at 10% 90%, rgba(59,130,246,0.35), transparent 45%)",
          color: "#EEF0F8",
        }}
      >
        <div style={{ fontSize: 30, color: "#A6AEC8" }}>Hey there! I&apos;m</div>
        <div style={{ fontSize: 108, fontWeight: 800, lineHeight: 1.05 }}>Giridhari Pal</div>
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
    ),
    size
  );
}
