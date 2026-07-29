import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";

const STATUS_STYLES = {
  shipped: { dot: "bg-ok", label: "SHIPPED", text: "text-ok" },
  active: { dot: "bg-amber", label: "ACTIVE", text: "text-amber" },
};

export default function ProjectGrid() {
  return (
    <section id="work" className="py-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          code="SYS.04 // PROJECTS"
          title="Devices in the field"
          note={`${profile.projects.length} logged`}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {profile.projects.map((p) => {
            const s = STATUS_STYLES[p.status];
            return (
              <div
                key={p.title}
                className="group rounded-lg border border-line bg-panel p-6 hover:-translate-y-1 hover:border-amber/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4 font-mono text-[10px] tracking-widest">
                  <span className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse`} />
                  <span className={s.text}>{s.label}</span>
                </div>

                <h3 className="font-display font-semibold text-lg text-paper mb-2 group-hover:text-amber transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] text-cyan/90 border border-cyan/20 rounded px-1.5 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
