export const profile = {
  name: "Giridhari Pal",
  initials: "GP",
  role: "Backend & Systems Engineer",
  tagline: "IoT telemetry, real-time data pipelines, and applied ML — shipped to production.",
  location: "Gujarat, India",
  phone: "+91-9811938053",
  email: "giri.pauldhari84@gmail.com",
  site: "giridharipal.com",
  linkedin: "https://www.linkedin.com/in/giridhari-pal-a7a413132/",
  github: "https://github.com/Giri84",
  summary:
    "I build backend systems that stay up: microservices, event-driven pipelines, and APIs that move telemetry from physical hardware into something a team can actually act on. Three-plus years across IoT platforms, ERP systems, and applied ML — usually the person wiring the sensor, the stream, and the database together.",
  stats: [
    { label: "YEARS SHIPPING", value: "3+" },
    { label: "DATA POINTS / DAY", value: "1M+" },
    { label: "P99 LATENCY", value: "<100ms" },
    { label: "PRODUCTION SERVICES", value: "12+" },
  ],
  skillGroups: [
    {
      code: "SYS.LANG",
      title: "Languages",
      items: ["Python", "Rust", "C", "C++"],
    },
    {
      code: "SYS.API",
      title: "Backend & API",
      items: ["FastAPI", "Django", "Flask", "Actix-Web", "Node.js", "REST", "gRPC"],
    },
    {
      code: "SYS.ARCH",
      title: "Architecture",
      items: ["Microservices", "Event-Driven Design", "Distributed Systems", "Async Processing"],
    },
    {
      code: "SYS.DATA",
      title: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis", "InfluxDB", "DuckDB", "SQLite"],
    },
    {
      code: "SYS.STREAM",
      title: "Messaging & Streaming",
      items: ["Apache Kafka", "MQTT", "Node-RED", "ESP32", "OTA"],
    },
    {
      code: "SYS.AI",
      title: "Applied ML",
      items: ["TensorFlow", "OpenCV", "MediaPipe", "OCR", "Computer Vision"],
    },
    {
      code: "SYS.OPS",
      title: "Cloud & DevOps",
      items: ["AWS (EC2, S3)", "DigitalOcean", "Docker", "Linux", "Git", "CI/CD"],
    },
    {
      code: "SYS.UI",
      title: "Frontend & Tools",
      items: ["React", "TypeScript", "Tauri", "PyQt5", "Grafana", "Metabase"],
    },
  ],
  experience: [
    {
      id: "log-04",
      role: "Junior Research Fellow — Backend & Data Systems",
      org: "Dhirubhai Ambani University",
      location: "Gujarat, India",
      start: "2025-08",
      end: "PRESENT",
      status: "active",
      points: [
        "Own end-to-end backend architecture for an Energy Management System integrating ESP32 IoT devices with backend services for reliable, continuous telemetry ingestion.",
        "Deploy containerized microservices — Docker, FastAPI, gRPC, Actix-Web — across PostgreSQL, InfluxDB, and Redis for scalable, fault-tolerant processing.",
        "Architect real-time MQTT/Kafka pipelines for high-throughput telemetry with minimal latency.",
        "Built a secure Actix-Web OTA service for firmware versioning and controlled device rollout.",
      ],
      stack: ["FastAPI", "Actix-Web", "Kafka", "MQTT", "PostgreSQL", "Docker"],
    },
    {
      id: "log-03",
      role: "Freelance Backend Engineer / Technical Consultant",
      org: "Independent Consulting",
      location: "Remote",
      start: "2024-10",
      end: "2025-08",
      status: "done",
      points: [
        "Architected custom ERP and Leave Management systems using FastAPI, PostgreSQL, and React, deployed via Docker on cloud infrastructure.",
        "Integrated ZWCAD with FastAPI backends via VBA and Tauri to automate design-to-inventory workflows for manufacturing clients.",
        "Programmed ESP32 controllers for solar tracking — sensor fusion and stable motor control.",
        "Built an OCR engine with OpenCV for banking document automation, cutting manual data entry errors.",
      ],
      stack: ["FastAPI", "React", "Tauri", "OpenCV", "PostgreSQL"],
    },
    {
      id: "log-02",
      role: "SDE & DevOps Consultant / Intern",
      org: "RC Labs — Battery Management System",
      location: "Bangalore, India",
      start: "2021-11",
      end: "2024-10",
      status: "done",
      points: [
        "Owned the backend and data-visualization platform integrating IoT telemetry across desktop, web, and cloud.",
        "Architected MQTT/Kafka pipelines processing millions of data points daily at sub-100ms latency, backed by gRPC, PostgreSQL, and Grafana.",
        "Built custom encryption, multithreading, and multiprocessing into the service layer for throughput and fault tolerance.",
        "Standardized deployments with Docker and centralized dashboards for remote monitoring.",
      ],
      stack: ["Kafka", "MQTT", "gRPC", "PostgreSQL", "Grafana", "Docker"],
    },
  ],
  projects: [
    {
      title: "ERP & Leave Management Systems",
      status: "shipped",
      stack: ["FastAPI", "PostgreSQL", "React", "Docker"],
      description:
        "Production ERP platforms for manufacturing clients plus a role-based Leave Management System with automated email workflows.",
    },
    {
      title: "Inventory Management Desktop App",
      status: "shipped",
      stack: ["Tauri", "FastAPI", "React", "TailwindCSS"],
      description:
        "Cross-platform inventory app that pulls CAD drawing data via VBA automation for seamless design-to-inventory mapping.",
    },
    {
      title: "OCR Document Engine — HDFC Bank",
      status: "shipped",
      stack: ["TensorFlow", "OpenCV", "Python"],
      description:
        "Customized OCR pipeline for banking document automation — reduced manual entry errors and processing time.",
    },
    {
      title: "Energy Management System",
      status: "active",
      stack: ["ESP32", "MQTT", "Kafka", "Actix-Web"],
      description:
        "IoT telemetry platform with a secure OTA firmware pipeline, built for continuous, distributed hardware ingestion.",
    },
    {
      title: "Computer Assistant",
      status: "shipped",
      stack: ["Python", "speech_recognition", "pyttsx3"],
      description:
        "Voice-driven assistant executing tasks through speech-to-text and text-to-speech pipelines.",
    },
    {
      title: "Writing in Air",
      status: "shipped",
      stack: ["OpenCV", "MediaPipe", "NumPy"],
      description:
        "Computer-vision app tracking hand and body movement in real time for gesture-based, hands-free screen writing.",
    },
  ],
  education: {
    school: "Sri Krishna Institute of Technology (VTU)",
    degree: "B.E., Information Science and Engineering",
    detail: "CGPA: 7.5",
    location: "Bangalore, India",
    start: "2019",
    end: "2023",
  },
};
