import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const e = profile.education;
  return (
    <section id="edu" className="py-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading code="SYS.05 // EDUCATION" title="Base image" />

        <div className="flex items-start gap-5 rounded-lg border border-line bg-panel p-6 max-w-2xl">
          <div className="shrink-0 w-11 h-11 rounded-md border border-line flex items-center justify-center text-amber">
            <GraduationCap size={22} />
          </div>
          <div>
            <p className="font-mono text-xs text-cyan tracking-widest mb-1">
              {e.start} → {e.end}
            </p>
            <h3 className="font-display font-semibold text-xl text-paper">
              {e.school}
            </h3>
            <p className="text-muted mt-1">{e.degree}</p>
            <p className="font-mono text-sm text-muted/80 mt-2">
              {e.detail} · {e.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
