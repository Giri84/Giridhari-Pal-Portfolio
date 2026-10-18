"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const VISIBLE = 2;

function formatRange(start, end) {
  return `${start} → ${end}`;
}

// Renders **bold** segments as emphasised text.
function RichText({ text }) {
  return text.split("**").map((part, i) =>
    i % 2 ? (
      <strong key={i} className="font-medium text-paper">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function Job({ job }) {
  const [open, setOpen] = useState(job.status === "active");
  const hidden = job.points.length - VISIBLE;
  const shown = open ? job.points : job.points.slice(0, VISIBLE);

  return (
    <Reveal className="relative sm:pl-10">
      <span
        className={`hidden sm:block absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-4 border-ink ${
          job.status === "active" ? "bg-amber" : "bg-line2"
        }`}
      />

      <div className="rounded-xl glass p-6 hover:border-line2 transition-colors">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <span className="font-mono text-xs tracking-widest text-cyan">
            {formatRange(job.start, job.end)}
          </span>
          {job.status === "active" && (
            <span className="font-mono text-[11px] tracking-widest text-ok border border-ok/30 rounded px-2 py-0.5">
              ● RUNNING
            </span>
          )}
        </div>

        <h3 className="font-display font-semibold text-xl text-paper">{job.role}</h3>
        <p className="font-mono text-sm text-muted mb-3">
          {job.org} · {job.location}
        </p>
        <p className="text-[15px] text-paper/90 mb-4">{job.summary}</p>

        <ul className="space-y-2">
          {shown.map((point, i) => (
            <li key={i} className="flex gap-2 text-[15px] text-paper/80 leading-relaxed">
              <span className="text-amber shrink-0 select-none">›</span>
              <span>
                <RichText text={point} />
              </span>
            </li>
          ))}
        </ul>

        {hidden > 0 && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-amber transition-colors"
          >
            {open ? "Show less" : `Show ${hidden} more`}
            <ChevronDown
              size={14}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {job.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] text-muted border border-line rounded px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function ExperienceLog() {
  return (
    <section id="log" className="py-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          code="SYS.02 // EXPERIENCE"
          title="Experience"
          note="reverse chronological"
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line hidden sm:block" />
          <div className="space-y-10">
            {profile.experience.map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
