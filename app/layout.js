import "./globals.css";
import { profile } from "@/data/profile";
import { jsonLd } from "@/lib/jsonld";

const SITE = "https://giridhari-pal-portfolio.vercel.app";
const TITLE = "Giridhari Pal — Backend Engineer (Python, Rust) | IoT, Kafka, FastAPI";
const DESC =
  "Giridhari Pal is a Python & Rust backend engineer in Gandhinagar, India with 3+ years building scalable APIs, microservices, Kafka/MQTT real-time pipelines and IoT energy systems. Open to Backend, Python and DevOps roles.";

export const metadata = {
  metadataBase: new URL(SITE),
  title: { default: TITLE, template: "%s | Giridhari Pal" },
  description: DESC,
  applicationName: "Giridhari Pal Portfolio",
  alternates: { canonical: "/" },
  keywords: [
    "Giridhari Pal",
    "Backend Engineer",
    "Python Developer",
    "Rust Developer",
    "Software Engineer",
    "DevOps Engineer",
    "Backend Developer India",
    "Python Backend Developer",
    "IoT Engineer",
    "IoT Platform Engineer",
    "FastAPI",
    "Django",
    "Actix-Web",
    "Kafka",
    "MQTT",
    "gRPC",
    "Microservices",
    "PostgreSQL",
    "InfluxDB",
    "Redis",
    "Docker",
    "AWS",
    "Real-time data pipelines",
    "Event-driven architecture",
    "Time-series data",
    "Energy Management System",
    "Battery Management System",
    "Embedded ESP32",
    "Tauri",
    "React",
    "Applied ML",
    "OCR",
    "Gandhinagar",
    "Ahmedabad",
    "Gujarat",
    "Delhi",
    "Noida",
    "Gurugram",
    "Kolkata",
    "Hire backend engineer",
    "Remote backend developer",
  ],
  authors: [{ name: "Giridhari Pal", url: SITE }],
  creator: "Giridhari Pal",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "profile",
    url: "/",
    siteName: "Giridhari Pal",
    locale: "en_IN",
    firstName: "Giridhari",
    lastName: "Pal",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(profile)) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light")document.documentElement.setAttribute("data-theme","light")}catch(e){}`,
          }}
        />
      </head>
      <body className="text-paper antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-amber focus:text-ink focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <div className="ambient" aria-hidden="true">
          <span className="animate-float top-[-8%] left-[-6%] h-[520px] w-[520px] bg-blue-500/25" />
          <span className="animate-float-slow top-[22%] right-[-10%] h-[560px] w-[560px] bg-fuchsia-500/25" />
          <span className="animate-float bottom-[-12%] left-[28%] h-[520px] w-[520px] bg-cyan-500/20" />
          <span className="animate-float-slow top-[58%] left-[-12%] h-[440px] w-[440px] bg-violet-500/20" />
        </div>
        {children}
      </body>
    </html>
  );
}
