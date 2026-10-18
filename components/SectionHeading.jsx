import Reveal from "./Reveal";

export default function SectionHeading({ code, title, note }) {
  return (
    <Reveal className="mb-12 flex items-end justify-between gap-4 flex-wrap">
      <div>
        <div className="font-mono text-xs tracking-[0.2em] text-cyan mb-3">{code}</div>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-paper">{title}</h2>
        <div className="mt-4 h-1 w-16 rounded-full bg-brand" />
      </div>
      {note && (
        <div className="font-mono text-[11px] text-muted glass rounded-full px-3 py-1">
          {note}
        </div>
      )}
    </Reveal>
  );
}
