import { TECH_MARQUEE_ITEMS } from "@/constants/site";

function MarqueeGroup() {
  return (
    <div className="flex gap-10 pr-10 text-xs tracking-[0.16em] whitespace-nowrap text-white uppercase">
      {TECH_MARQUEE_ITEMS.map((item, index) => (
        <span key={item} className="flex items-center gap-10">
          {item}
          <span className={index % 2 === 0 ? "text-red" : "text-blue"} aria-hidden="true">
            ◆
          </span>
        </span>
      ))}
    </div>
  );
}

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-ink py-4">
      <div className="animate-marquee flex w-max">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}
