import { SITE } from "@/constants/site";

export function AvailabilityFooter() {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-px bg-[linear-gradient(90deg,#E8232F,#1B44D8,transparent)]" />
      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] tracking-[0.12em] text-faint uppercase">
          Disponible / Available
        </span>
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="animate-blink h-1.75 w-1.75 rounded-full bg-blue" />
          <span className="text-[13px] text-muted">{SITE.location}</span>
        </div>
      </div>
      <a
        href={`mailto:${SITE.email}`}
        className="border-b border-border pb-1.5 text-[11px] text-ink transition-colors hover:text-red"
      >
        {SITE.email}
      </a>
    </div>
  );
}
