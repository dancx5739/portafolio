import { Reveal } from "@/components/ui/Reveal";
import type { TechCategory } from "../types";
import { TechCard } from "./TechCard";

interface TechCategoryRowProps {
  category: TechCategory;
  delay?: number;
}

const ACCENT_CLASS = {
  red: { bar: "bg-red", text: "text-red" },
  blue: { bar: "bg-blue", text: "text-blue" },
} as const;

export function TechCategoryRow({ category, delay = 0 }: TechCategoryRowProps) {
  const accent = ACCENT_CLASS[category.accent];

  return (
    <Reveal delay={delay}>
      <div className="grid grid-cols-1 items-start gap-6 border-t border-border py-8.5 md:grid-cols-[210px_1fr] md:gap-9">
        <div className="flex flex-col gap-2.5 md:sticky md:top-10">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className={`h-0.5 w-5.5 rounded-sm ${accent.bar}`} />
            <span className={`text-[10px] tracking-[0.18em] uppercase ${accent.text}`}>
              {category.index}
            </span>
          </div>
          <span className="text-xl font-semibold tracking-[-0.02em]">{category.title}</span>
          <span className="text-[10px] tracking-[0.14em] text-faint uppercase">
            {category.subtitle}
          </span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3 sm:grid-cols-[repeat(auto-fill,minmax(118px,1fr))]">
          {category.items.map((item) => (
            <TechCard key={item.name} item={item} accent={category.accent} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
