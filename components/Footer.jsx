import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[11px] text-muted">
          © {new Date().getFullYear()} {profile.name} ·{" "}
          <a
            href={profile.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-paper transition-colors"
          >
            Source
          </a>
        </p>
        <p className="font-mono text-[11px] text-muted flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-ok animate-pulse" />
          all systems operational
        </p>
      </div>
    </footer>
  );
}
