import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Github, Linkedin, Phone, Globe, Mail } from "lucide-react";

const LINKS = [
  { label: "LinkedIn", value: "giridharipal", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: "Giri84", href: profile.github, icon: Github },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Site", value: profile.site, href: `https://${profile.site}`, icon: Globe },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading code="SYS.07 // CONTACT" title="Contact" />

        <Reveal className="rounded-xl glass overflow-hidden max-w-3xl">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line bg-panel2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            <span className="ml-3 font-mono text-[11px] text-muted">contact.sh</span>
          </div>
          <div className="p-6 font-mono text-sm">
            <p className="text-muted mb-4">
              <span className="text-cyan">$</span> ./reach --to=giridhari
            </p>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <l.icon size={16} className="text-muted group-hover:text-amber transition-colors" />
                    <span className="text-muted w-20 shrink-0">{l.label}</span>
                    <span className="text-paper group-hover:text-amber transition-colors underline decoration-line underline-offset-4 group-hover:decoration-amber">
                      {l.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-sans font-semibold text-white hover:brightness-110 transition"
            >
              <Mail size={16} /> Email me
            </a>
            <p className="text-ok mt-6">
              <span className="text-cyan">$</span> status --check
              <br />
              <span className="text-muted">→ open to {profile.openTo}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
