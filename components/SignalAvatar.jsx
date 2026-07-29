"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Flip to false to fall back to the generated "GP" monogram instead of the photo.
const HAS_PHOTO = true;

const BARS = [6, 14, 9, 20, 12, 26, 15, 22, 10, 18, 8, 24, 13, 19, 7];

export default function SignalAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full max-w-[360px] sm:max-w-[420px] mx-auto lg:mx-0"
    >
      {/* ambient glow behind the card */}
      <div className="absolute -inset-6 -z-10">
        <div className="absolute top-0 right-0 w-52 h-52 bg-amber/25 rounded-full blur-[70px]" />
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-cyan/20 rounded-full blur-[70px]" />
      </div>

      <div className="relative aspect-[930/1280] rounded-2xl border border-line bg-panel2 overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
        {/* top accent scan-line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber to-transparent z-20" />

        {/* corner ticks */}
        <span className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-amber/70 z-20" />
        <span className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-amber/70 z-20" />
        <span className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-amber/70 z-20" />
        <span className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-amber/70 z-20" />

        {HAS_PHOTO ? (
          <>
            <Image
              src="/images/avatar.jpg"
              alt="Giridhari Pal"
              fill
              sizes="(min-width: 1024px) 420px, 360px"
              priority
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ink/25" />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-dot-grid">
            <span className="font-display font-bold text-6xl tracking-tight text-paper select-none">
              GP
            </span>
            <div className="flex items-end gap-[3px] h-10">
              {BARS.map((h, i) => (
                <motion.span
                  key={i}
                  className="w-[3px] bg-cyan rounded-full"
                  initial={{ height: h }}
                  animate={{ height: [h, h * 1.6, h * 0.5, h] }}
                  transition={{
                    duration: 1.6 + (i % 4) * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.06,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-ok bg-ink/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-line">
          <span className="w-1.5 h-1.5 rounded-full bg-ok animate-pulse" />
          ONLINE
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 py-3 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-widest text-paper/90">
            GP // BACKEND_ENG
          </span>
          <span className="font-mono text-[10px] tracking-widest text-cyan">
            IND
          </span>
        </div>
      </div>
    </motion.div>
  );
}