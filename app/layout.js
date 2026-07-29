import "./globals.css";

export const metadata = {
  title: "Giridhari Pal — Backend & Systems Engineer",
  description:
    "Backend & Systems Engineer specializing in IoT telemetry, real-time data pipelines, and applied ML. Python, Rust, FastAPI, Kafka, PostgreSQL.",
  keywords: [
    "Giridhari Pal",
    "Backend Engineer",
    "Systems Engineer",
    "IoT",
    "Python",
    "Rust",
    "FastAPI",
    "Kafka",
  ],
  authors: [{ name: "Giridhari Pal" }],
  openGraph: {
    title: "Giridhari Pal — Backend & Systems Engineer",
    description:
      "IoT telemetry, real-time data pipelines, and applied ML — shipped to production.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-ink text-paper antialiased">{children}</body>
    </html>
  );
}
