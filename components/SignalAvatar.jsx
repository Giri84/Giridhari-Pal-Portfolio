"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Flip to false to fall back to the generated "GP" monogram instead of the photo.
const HAS_PHOTO = true;

const BARS = [6, 14, 9, 20, 12, 26, 15, 22, 10, 18, 8, 24, 13, 19, 7];

export default function SignalAvatar() {
  return (
    <div className="relative w-full max-w-[280px] mx-auto lg:mx-0">
      <div className="relative aspect-square rounded-2xl border border-line bg-panel overflow-hidden bg-dot-grid">
        {/* corner ticks, like a scope readout frame — sits above everything */}
        <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-amber/60 z-20" />
        <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-amber/60 z-20" />
        <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-amber/60 z-20" />
        <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-amber/60 z-20" />

        {HAS_PHOTO ? (
          <div className="absolute inset-3 rounded-xl overflow-hidden bg-ink">
            {/* photo, desaturated so any lighting/background/clothing color
                doesn't fight the palette */}
            <Image
              src="/images/avatar.jpg"
              alt="Giridhari Pal"
              fill
              sizes="280px"
              priority
              className="object-cover object-top grayscale contrast-[1.1] brightness-[0.95]"
            />
            {/* duotone wash tying the photo into the amber/cyan palette —
                mix-blend "color" keeps the photo's own light/shadow detail
                and just re-tints its hue */}
            <div
              className="absolute inset-0 mix-blend-color bg-gradient-to-br from-amber via-amber/60 to-cyan"
              aria-hidden="true"
            />
            {/* soft fade so the photo settles into the panel instead of a hard edge */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/90 to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
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

        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-ok bg-ink/70 backdrop-blur-sm px-2 py-1 rounded-full border border-line">
          <span className="w-1.5 h-1.5 rounded-full bg-ok animate-pulse" />
          ONLINE
        </div>
      </div>

      {!HAS_PHOTO && (
        <p className="mt-3 text-center lg:text-left font-mono text-[11px] text-muted">
          photo slot open — drop /public/images/avatar.jpg to replace
        </p>
      )}
    </div>
  );
}