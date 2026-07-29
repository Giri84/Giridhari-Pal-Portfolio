"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const SECTIONS = [
  { id: "top", code: "SYS.00", label: "Boot" },
  { id: "about", code: "SYS.01", label: "About" },
  { id: "log", code: "SYS.02", label: "Log" },
  { id: "stack", code: "SYS.03", label: "Stack" },
  { id: "work", code: "SYS.04", label: "Work" },
  { id: "edu", code: "SYS.05", label: "Edu" },
  { id: "contact", code: "SYS.06", label: "Contact" },
];

// Build a smooth, flowing signal-wave path across a given height.
function buildTracePath(height, width, segments) {
  const step = height / segments;
  const midX = width / 2;
  const amp = width / 2 - 3;

  const points = [];
  for (let i = 0; i <= segments; i++) {
    const y = step * i;
    const wave = Math.sin(i * 0.35) * 0.7 + Math.sin(i * 0.09) * 0.3;
    const x = midX + wave * amp;
    points.push([x, y]);
  }

  // Smooth the polyline into a continuous curve by drawing quadratic
  // segments through the midpoints between each pair of samples.
  let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;
  for (let i = 1; i < points.length - 1; i++) {
    const [cx, cy] = points[i];
    const [nx, ny] = points[i + 1];
    const mx = (cx + nx) / 2;
    const my = (cy + ny) / 2;
    d += ` Q ${cx.toFixed(2)} ${cy.toFixed(2)} ${mx.toFixed(2)} ${my.toFixed(2)}`;
  }
  const last = points[points.length - 1];
  d += ` L ${last[0].toFixed(2)} ${last[1].toFixed(2)}`;
  return d;
}

export default function SignalRail() {
  const [active, setActive] = useState("top");
  const [traceHeight, setTraceHeight] = useState(1200);
  const railRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    mass: 0.3,
  });

  useEffect(() => {
    function measure() {
      if (railRef.current) setTraceHeight(railRef.current.offsetHeight);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const pathD = useMemo(() => buildTracePath(traceHeight, 28, 90), [traceHeight]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop vertical rail */}
      <nav
        aria-label="Section navigation"
        className="hidden lg:flex fixed left-0 top-0 h-screen w-16 flex-col items-center py-8 z-40 border-r border-line bg-ink/80 backdrop-blur-sm"
      >
        <a
          href="#top"
          className="font-mono text-[11px] tracking-widest text-amber mb-6"
          aria-label="Back to top"
        >
          GP
        </a>

        <div ref={railRef} className="relative flex-1 w-full flex justify-center">
          <svg
            width="28"
            height={traceHeight}
            viewBox={`0 0 28 ${traceHeight}`}
            className="absolute inset-0 m-auto overflow-visible"
            preserveAspectRatio="none"
          >
            <path
              d={pathD}
              fill="none"
              stroke="#212B34"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <motion.div
            style={{ scaleY: smoothProgress }}
            className="absolute inset-0 origin-top overflow-hidden"
          >
            <svg
              width="28"
              height={traceHeight}
              viewBox={`0 0 28 ${traceHeight}`}
              className="overflow-visible"
              preserveAspectRatio="none"
            >
              <path
                d={pathD}
                fill="none"
                stroke="#FFB454"
                strokeWidth="1.75"
                vectorEffect="non-scaling-stroke"
                style={{ filter: "drop-shadow(0 0 4px rgba(255,180,84,0.65))" }}
              />
            </svg>
          </motion.div>

          {/* section ticks */}
          <ul className="absolute inset-0">
            {SECTIONS.map((s, i) => {
              const topPct = (i / (SECTIONS.length - 1)) * 100;
              const isActive = active === s.id;
              return (
                <li
                  key={s.id}
                  style={{ top: `${topPct}%` }}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 group"
                >
                  <a
                    href={`#${s.id}`}
                    className="flex items-center justify-center w-4 h-4 -m-1"
                    aria-label={s.label}
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-2.5 h-2.5 bg-amber shadow-[0_0_10px_rgba(255,180,84,0.9)]"
                          : "w-1.5 h-1.5 bg-line2 group-hover:bg-cyan"
                      }`}
                    />
                  </a>
                  <span
                    className={`pointer-events-none absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] tracking-wider px-2 py-1 rounded border transition-opacity duration-200 ${
                      isActive
                        ? "opacity-100 border-amber/40 text-amber bg-panel"
                        : "opacity-0 group-hover:opacity-100 border-line text-muted bg-panel"
                    }`}
                  >
                    {s.code} {s.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <span className="font-mono text-[9px] text-muted rotate-180 [writing-mode:vertical-lr] tracking-widest mt-4">
          LIVE
        </span>
      </nav>

      {/* Mobile top progress trace */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-[3px] z-40 bg-line">
        <motion.div
          style={{ scaleX: smoothProgress }}
          className="h-full w-full origin-left bg-amber shadow-[0_0_8px_rgba(255,180,84,0.8)]"
        />
      </div>
    </>
  );
}
