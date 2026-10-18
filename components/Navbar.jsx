"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "@/data/profile";

const LINKS = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "log", label: "Experience" },
  { id: "stack", label: "Skills" },
  { id: "work", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (next === "light") document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled || open ? "glass border-x-0 border-t-0" : ""
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between"
      >
        <a href="#top" className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-brand grid place-items-center font-display font-bold text-white">
            {profile.initials}
          </span>
          <span className="leading-tight hidden sm:block">
            <span className="block font-display font-semibold text-paper">{profile.name}</span>
            <span className="block text-xs text-muted">{profile.role}</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`transition-colors hover:text-paper ${
                  active === l.id ? "text-paper" : "text-muted"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="w-10 h-10 grid place-items-center rounded-full text-muted hover:text-paper hover:bg-panel transition-colors"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition"
          >
            Hire me <ArrowRight size={16} />
          </a>
          <button
            type="button"
            className="lg:hidden p-2 text-paper"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="lg:hidden px-6 pb-5 space-y-1">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block py-2.5 ${active === l.id ? "text-paper" : "text-muted"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white"
            >
              Hire me <ArrowRight size={16} />
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
