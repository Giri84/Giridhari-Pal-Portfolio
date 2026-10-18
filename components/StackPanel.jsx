import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function StackPanel() {
  return (
    <section id="stack" className="py-24 border-t border-line bg-panel2/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading code="SYS.03 // STACK" title="Skills" />

        <Reveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profile.skillGroups.map((group) => (
            <div
              key={group.code}
              className="rounded-xl glass p-5 hover:border-cyan/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] tracking-widest text-cyan">
                  {group.code}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-ok" />
              </div>
              <h3 className="font-display font-semibold text-base text-paper mb-3">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-[11px] text-muted/90 border border-line rounded px-1.5 py-0.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
