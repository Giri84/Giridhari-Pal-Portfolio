export default function SectionHeading({ code, title, note }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-4 flex-wrap">
      <div>
        <div className="font-mono text-xs tracking-[0.2em] text-amber mb-2">
          {code}
        </div>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-paper">
          {title}
        </h2>
      </div>
      {note && (
        <div className="font-mono text-[11px] text-muted border border-line rounded px-2 py-1">
          {note}
        </div>
      )}
    </div>
  );
}
