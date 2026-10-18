"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Zap } from "lucide-react";
import { profile } from "@/data/profile";

const ROLES = ["Backend Engineer", "IoT Systems Builder", "Applied ML Engineer"];
const PILLS = [
  { label: "Python", cls: "from-blue-500 to-cyan-400" },
  { label: "Rust", cls: "from-orange-500 to-yellow-400" },
  { label: "FastAPI", cls: "from-emerald-500 to-green-400" },
  { label: "Kafka", cls: "from-fuchsia-500 to-purple-500" },
  { label: "PostgreSQL", cls: "from-sky-500 to-indigo-500" },
  { label: "Docker", cls: "from-blue-600 to-violet-500" },
];
const SOCIALS = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

function useRotatingRole(reduce) {
  const [text, setText] = useState(ROLES[0]);
  useEffect(() => {
    if (reduce) return;
    let r = 0;
    let i = ROLES[0].length;
    let deleting = false;
    let t;
    const tick = () => {
      const word = ROLES[r];
      i += deleting ? -1 : 1;
      setText(word.slice(0, i));
      let delay = deleting ? 40 : 80;
      if (!deleting && i === word.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && i === 0) {
        deleting = false;
        r = (r + 1) % ROLES.length;
        delay = 300;
      }
      t = setTimeout(tick, delay);
    };
    t = setTimeout(tick, 1600);
    return () => clearTimeout(t);
  }, [reduce]);
  return text;
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  const reduce = useReducedMotion();
  const role = useRotatingRole(reduce);
  const [years, data] = profile.stats;

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* background: gradient blobs + stars */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="blobs absolute inset-0"><div className="absolute -top-20 left-[18%] w-[460px] h-[460px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute top-10 right-[8%] w-[520px] h-[520px] rounded-full bg-fuchsia-500/20 blur-[130px]" />
        <div className="absolute bottom-[-120px] left-[42%] w-[520px] h-[420px] rounded-full bg-cyan-500/15 blur-[130px]" />
        </div>
        <div className="absolute inset-0 bg-stars" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
        <div>
          <motion.div {...fade()} className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 text-sm">
            <span className="relative flex w-2.5 h-2.5">
              <span className="absolute inset-0 rounded-full bg-ok opacity-60 animate-ping" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-ok" />
            </span>
            Open to Backend, Python &amp; DevOps roles
          </motion.div>

          <motion.p {...fade(0.05)} className="mt-8 text-2xl sm:text-3xl text-muted font-display">
            Hey there! I&apos;m
          </motion.p>
          <motion.h1
            {...fade(0.1)}
            className="font-display font-bold text-6xl sm:text-7xl leading-[1.02] text-paper mt-1"
          >
            Giridhari
            <br />
            Pal
          </motion.h1>

          <motion.p {...fade(0.2)} className="mt-5 font-display font-semibold text-2xl sm:text-3xl text-paper">
            I&apos;m a{" "}
            <span className="text-gradient" aria-label={ROLES.join(", ")}>
              {role}
            </span>
            <span className="inline-block w-[3px] h-7 bg-cyan align-middle ml-1 animate-blink" aria-hidden="true" />
          </motion.p>

          <motion.p {...fade(0.3)} className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
            {profile.tagline} Currently {profile.currentFocus.charAt(0).toLowerCase()}
            {profile.currentFocus.slice(1)}.
          </motion.p>

          <motion.ul {...fade(0.4)} className="mt-7 flex flex-wrap gap-2.5">
            {PILLS.map((p) => (
              <li
                key={p.label}
                className={`bg-gradient-to-r ${p.cls} text-white text-xs font-semibold rounded-full px-4 py-1.5`}
              >
                {p.label}
              </li>
            ))}
          </motion.ul>

          <motion.div {...fade(0.5)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(168,85,247,0.7)] hover:brightness-110 transition"
            >
              View my work <ArrowRight size={18} />
            </a>
            <a
              href="/Giridhari_pal_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 font-semibold text-paper hover:border-white/25 transition"
            >
              Resume <Download size={17} />
            </a>
          </motion.div>

          <motion.div {...fade(0.6)} className="mt-8 flex items-center gap-3">
            <span className="text-sm text-muted">Find me:</span>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 grid place-items-center rounded-full glass text-muted hover:text-paper hover:border-white/25 transition"
              >
                <s.icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[440px] aspect-square"
        >
          <div className="absolute inset-[8%] rounded-full p-[5px] bg-[conic-gradient(from_200deg,#60a5fa,#c084fc,#f472b6,#60a5fa)] shadow-[0_0_80px_-10px_rgba(192,132,252,0.45)]">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-panel2">
              <Image
                src="/images/avatar.jpg"
                alt="Giridhari Pal"
                fill
                priority
                sizes="(min-width: 1024px) 400px, 80vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="absolute -top-4 left-0 sm:-left-8 rounded-2xl p-4 font-mono text-[12px] leading-6 animate-float w-[210px] bg-[#0F1630]/90 backdrop-blur border border-white/10 text-slate-100 shadow-xl">
            <div className="flex gap-1.5 mb-2" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <p><span className="text-purple-400">const</span> engineer = {"{"}</p>
            <p className="pl-3"><span className="text-blue-400">stack</span>: <span className="text-green-300">[&quot;Python&quot;, &quot;Rust&quot;]</span>,</p>
            <p className="pl-3"><span className="text-blue-400">focus</span>: <span className="text-green-300">&quot;IoT + data&quot;</span>,</p>
            <p className="pl-3"><span className="text-blue-400">shipping</span>: <span className="text-pink-400">true</span></p>
            <p>{"}"}</p>
          </div>

          <div className="absolute bottom-[6%] -left-2 sm:-left-8 glass rounded-2xl px-5 py-4 animate-float-slow">
            <p className="font-display font-bold text-3xl text-gradient">{data.value}</p>
            <p className="text-sm text-paper mt-0.5">Data points / day</p>
            <p className="text-[11px] text-muted">{data.source}</p>
          </div>

          <div className="absolute bottom-[14%] right-0 sm:-right-4 glass rounded-2xl px-5 py-4 animate-float">
            <p className="font-display font-bold text-3xl text-gradient">{years.value}</p>
            <p className="text-sm text-paper mt-0.5">Years shipping</p>
            <p className="text-[11px] text-muted">{years.source}</p>
          </div>

          <span className="absolute top-[30%] right-0 w-11 h-11 rounded-full bg-green-500 grid place-items-center text-white animate-float-slow" aria-hidden="true">
            <Zap size={20} />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
