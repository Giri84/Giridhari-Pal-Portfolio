import { profile } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const STATUS_STYLES = {
  shipped: { dot: "bg-ok", label: "SHIPPED", text: "text-ok" },
  active: { dot: "bg-amber", label: "ACTIVE", text: "text-amber" },
};

function Status({ status }) {
  const s = STATUS_STYLES[status];
  return (
    <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest">
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse`} />
      <span className={s.text}>{s.label}</span>
    </div>
  );
}

export default function ProjectGrid() {
  const featured = profile.projects.filter((p) => p.featured);
  const rest = profile.projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          code="SYS.04 // PROJECTS"
          title="Projects"
          note={`${profile.projects.length} logged`}
        />

        <Reveal className="grid lg:grid-cols-3 gap-5">
          {featured.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-xl glass p-7 hover:-translate-y-1 hover:border-amber/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <Status status={p.status} />
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} source`}
                    className="text-muted hover:text-amber transition-colors"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>

              <h3 className="font-display font-semibold text-xl text-paper mb-3 group-hover:text-amber transition-colors">
                {p.title}
              </h3>
              <p className="text-[15px] text-paper/90 leading-relaxed mb-2">
                {p.outcome}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-6">
                {p.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-1.5">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-cyan/90 border border-cyan/20 rounded px-1.5 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </Reveal>

        <h3 className="font-mono text-xs tracking-[0.2em] text-muted mt-14 mb-4">
          MORE BUILDS
        </h3>
        <ul className="divide-y divide-line border-y border-line">
          {rest.map((p) => (
            <li
              key={p.title}
              className="grid sm:grid-cols-[1fr_1.4fr_auto] gap-x-8 gap-y-2 py-5 items-start hover:bg-panel/60 transition-colors px-2"
            >
              <div className="flex items-center gap-3">
                <span className="font-display font-semibold text-paper">{p.title}</span>
                <Status status={p.status} />
              </div>
              <p className="text-sm text-muted leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 sm:justify-end">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-cyan/90 border border-cyan/20 rounded px-1.5 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
