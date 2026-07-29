"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "log", label: "Log" },
  { id: "stack", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "edu", label: "Edu" },
  { id: "contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden fixed top-[3px] left-0 right-0 z-40 border-b border-line bg-ink/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <a href="#top" className="font-mono text-xs tracking-widest text-amber">
          GP // BACKEND
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-paper p-1"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <ul className="flex flex-col border-t border-line font-mono text-sm">
          {LINKS.map((l) => (
            <li key={l.id} className="border-b border-line last:border-b-0">
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-muted hover:text-amber hover:bg-panel transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
