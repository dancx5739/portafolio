import type { AccentColor, TechItem } from "../types";

interface TechCardProps {
  item: TechItem;
  accent: AccentColor;
}

const HOVER_BORDER_CLASS: Record<AccentColor, string> = {
  red: "hover:border-red",
  blue: "hover:border-blue",
};

const BADGE_TEXT_CLASS: Record<AccentColor, string> = {
  red: "text-red",
  blue: "text-blue",
};

export function TechCard({ item, accent }: TechCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-3 rounded-2xl border border-border bg-white px-2.5 pt-5.5 pb-4.5 transition-[transform,border-color,box-shadow] duration-[260ms] hover:-translate-y-1.5 hover:shadow-[0_16px_32px_-20px_rgba(11,15,26,0.4)] ${HOVER_BORDER_CLASS[accent]}`}
    >
      {item.logo ? (
        <img src={item.logo} alt={item.name} className="h-10 w-10 object-contain" loading="lazy" />
      ) : (
        <span
          className={`grid h-10 w-10 place-items-center rounded-[10px] border border-border bg-bg text-[13px] font-bold ${BADGE_TEXT_CLASS[accent]}`}
        >
          {item.badge}
        </span>
      )}
      <span className="text-center text-[10.5px] tracking-[0.04em] text-muted">
        {item.name}
      </span>
    </div>
  );
}
