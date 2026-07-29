import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";

function formatRange(start, end) {
  return `${start} → ${end}`;
}

export default function ExperienceLog() {
  return (
    <section id="log" className="py-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          code="SYS.02 // EXPERIENCE"
          title="Deployment log"
          note="reverse chronological"
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line hidden sm:block" />

          <div className="space-y-10">
            {profile.experience.map((job) => (
              <article key={job.id} className="relative sm:pl-10">
                <span
                  className={`hidden sm:block absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-4 border-ink ${
                    job.status === "active" ? "bg-amber" : "bg-line2"
                  }`}
                />

                <div className="rounded-lg border border-line bg-panel p-6 hover:border-line2 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-xs tracking-widest text-cyan">
                      {formatRange(job.start, job.end)}
                    </span>
                    {job.status === "active" && (
                      <span className="font-mono text-[10px] tracking-widest text-ok border border-ok/30 rounded px-2 py-0.5">
                        ● RUNNING
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-semibold text-xl text-paper">
                    {job.role}
                  </h3>
                  <p className="font-mono text-sm text-muted mb-4">
                    {job.org} · {job.location}
                  </p>

                  <ul className="space-y-2">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex gap-2 text-[15px] text-paper/85 leading-relaxed">
                        <span className="text-amber shrink-0 select-none">›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

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
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
