import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-line bg-panel2/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading code="SYS.01 // ABOUT" title="About" />
        <Reveal className="grid md:grid-cols-[1.3fr_1fr] gap-12">
          <p className="text-xl leading-relaxed text-paper/90">
            {profile.summary}
          </p>
          <div className="rounded-xl glass p-6">
            <div className="font-mono text-[11px] tracking-widest text-muted mb-4">
              CURRENT_STATUS
            </div>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex justify-between">
                <span className="text-muted">role</span>
                <span className="text-paper">{profile.status.role}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted">focus</span>
                <span className="text-paper">{profile.status.focus}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted">location</span>
                <span className="text-paper">{profile.location}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-muted">languages</span>
                <span className="text-paper text-right">{profile.languages.join(" · ")}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted">hometown</span>
                <span className="text-paper">{profile.hometown}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted">availability</span>
                <span className="text-ok">{profile.status.availability}</span>
              </li>
              <li className="text-xs text-muted leading-relaxed pt-1 border-t border-line">
                {profile.openLocations}
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
