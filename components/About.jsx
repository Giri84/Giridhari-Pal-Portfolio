import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading code="SYS.01 // ABOUT" title="Profile" />
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12">
          <p className="text-xl leading-relaxed text-paper/90">
            {profile.summary}
          </p>
          <div className="border border-line rounded-lg bg-panel p-6">
            <div className="font-mono text-[11px] tracking-widest text-muted mb-4">
              CURRENT_STATUS
            </div>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex justify-between">
                <span className="text-muted">role</span>
                <span className="text-paper">JR. Research Fellow</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted">focus</span>
                <span className="text-paper">IoT + Real-time data</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted">location</span>
                <span className="text-paper">{profile.location}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted">availability</span>
                <span className="text-ok">open to opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
