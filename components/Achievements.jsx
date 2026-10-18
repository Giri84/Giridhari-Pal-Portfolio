import { ArrowUpRight, Award, ChevronDown, FileText, Mic } from "lucide-react";
import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function Label({ icon: Icon, children }) {
  return (
    <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted mb-4">
      <Icon size={14} className="text-amber" />
      {children}
    </h3>
  );
}

function CertCard({ c }) {
  return (
    <li>
      <a
        href={c.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-3 rounded-lg glass px-4 py-3 hover:border-amber/40 transition-colors"
      >
        <span>
          <span className="block text-sm text-paper group-hover:text-amber transition-colors">
            {c.name}
          </span>
          <span className="block font-mono text-[11px] text-muted mt-0.5">
            {c.issuer} · {c.date}
          </span>
        </span>
        <ArrowUpRight size={16} className="shrink-0 text-muted group-hover:text-amber transition-colors" />
      </a>
    </li>
  );
}

export default function Achievements() {
  const { patents, publication, highlights, certifications } = profile;
  const core = certifications.filter((c) => c.core);
  const other = certifications.filter((c) => !c.core);

  return (
    <section id="awards" className="py-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          code="SYS.05 // ACHIEVEMENTS"
          title="Achievements"
        />

        <Reveal className="grid lg:grid-cols-2 gap-10">
          <div>
            <Label icon={FileText}>PATENTS &amp; PUBLICATION</Label>
            <div className="space-y-4">
              {patents.map((p) => (
                <article key={p.number} className="rounded-xl glass p-5">
                  <p className="font-mono text-[11px] tracking-widest text-cyan mb-1">
                    APPLICATION {p.number} · {p.date}
                  </p>
                  <h4 className="font-display font-semibold text-paper">{p.title}</h4>
                  <p className="text-sm text-muted mt-1.5 leading-relaxed">{p.note}</p>
                </article>
              ))}
              <a
                href={publication.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl glass p-5 hover:border-amber/40 transition-colors"
              >
                <p className="font-mono text-[11px] tracking-widest text-cyan mb-1">
                  RESEARCH PAPER · {publication.date}
                </p>
                <h4 className="font-display font-semibold text-paper group-hover:text-amber transition-colors flex items-start justify-between gap-3">
                  {publication.title}
                  <ArrowUpRight size={18} className="shrink-0 mt-0.5" />
                </h4>
                <p className="text-sm text-muted mt-1.5">{publication.venue}</p>
              </a>
            </div>
          </div>

          <div>
            <Label icon={Mic}>TALKS &amp; EVENTS</Label>
            <ol className="relative border-l border-line ml-1.5 space-y-6">
              {highlights.map((h) => (
                <li key={h.title} className="pl-6 relative">
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand" />
                  <p className="font-mono text-[11px] tracking-widest text-cyan">{h.date}</p>
                  <h4 className="font-display font-semibold text-paper mt-0.5">{h.title}</h4>
                  <p className="text-sm text-muted mt-1 leading-relaxed">{h.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <Label icon={Award}>CERTIFICATIONS</Label>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {core.map((c) => (
              <CertCard key={c.name} c={c} />
            ))}
          </ul>
          {other.length > 0 && (
            <details className="group mt-4">
              <summary className="cursor-pointer list-none inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-amber transition-colors">
                <span className="group-open:hidden">Show {other.length} more</span>
                <span className="hidden group-open:inline">Show less</span>
                <ChevronDown size={14} className="transition-transform group-open:rotate-180" />
              </summary>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                {other.map((c) => (
                  <CertCard key={c.name} c={c} />
                ))}
              </ul>
            </details>
          )}
        </Reveal>
      </div>
    </section>
  );
}
