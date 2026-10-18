import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://giridhari-pal-portfolio.vercel.app"),
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
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giridhari Pal — Backend & Systems Engineer",
    description:
      "IoT telemetry, real-time data pipelines, and applied ML — shipped to production.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light")document.documentElement.setAttribute("data-theme","light")}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-ink text-paper antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-amber focus:text-ink focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
