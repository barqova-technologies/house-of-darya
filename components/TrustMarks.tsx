import { trustMarks } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function TrustMarks({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {trustMarks.map((mark) => (
          <span key={mark.title} className="label text-[0.62rem] text-mist">
            {mark.title}
          </span>
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-5">
      {trustMarks.map((mark, i) => (
        <Reveal key={mark.title} delay={i * 0.06} className="bg-canvas">
          <div className="flex h-full flex-col items-center gap-2 px-4 py-8 text-center">
            <span className="text-gold">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2 4 8l8 14L20 8l-8-6z" />
                <path d="M4 8h16M12 2 8.5 8 12 22l3.5-14" />
              </svg>
            </span>
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink">
              {mark.title}
            </span>
            <span className="text-xs leading-5 text-mist">{mark.note}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
