import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Faq() {
  return (
    <section id="faq" className="py-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading code="SYS.08 // FAQ" title="Quick answers" />
        <Reveal className="grid md:grid-cols-2 gap-5">
          {profile.faq.map((f) => (
            <article key={f.q} className="rounded-xl glass p-6">
              <h3 className="font-display font-semibold text-paper">{f.q}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{f.a}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
