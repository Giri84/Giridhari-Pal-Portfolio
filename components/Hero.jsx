"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { profile } from "@/data/profile";
import SignalAvatar from "./SignalAvatar";

const BOOT_LINE = "whoami --role=backend --domain=iot,ml";

function useTypewriter(text, speed = 32) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

export default function Hero() {
  const typed = useTypewriter(BOOT_LINE);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-24 pb-16 lg:pt-0 lg:pb-0"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-40 mask-fade-b pointer-events-none" />

      <div className="relative mx-auto w-full max-w-6xl px-6 grid lg:grid-cols-[1fr_480px] gap-14 items-center">
        <div>
          <div className="font-mono text-sm text-cyan mb-6 h-5">
            <span className="text-muted">$</span> {typed}
            <span className="inline-block w-2 h-4 bg-cyan align-middle ml-1 animate-blink" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-paper text-glow"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-4 font-mono text-sm sm:text-base text-amber tracking-wide"
          >
            {profile.role} — {profile.location}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-amber text-ink font-medium px-5 py-3 hover:bg-amber-glow transition-colors"
            >
              View the work
              <ArrowDownRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-paper hover:border-cyan hover:text-cyan transition-colors"
            >
              Get in touch
            </a>

            <a
            href="/Giridhari_pal_Resume.pdf" download className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-paper hover:border-cyan hover:text-cyan transition-colors"
            >
              Download resume
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl border-t border-line pt-6"
          >
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-[10px] tracking-widest text-muted">
                  {s.label}
                </dt>
                <dd className="font-display font-semibold text-2xl text-paper mt-1">
                  {s.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="animate-drift"
        >
          <SignalAvatar />
        </motion.div>
      </div>
    </section>
  );
}
