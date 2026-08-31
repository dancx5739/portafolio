import type { AccentColor } from "@/types";

interface SectionHeadingProps {
  index: string;
  title: string;
  tag: string;
  accent: AccentColor;
  /** "dark" renders on a dark section background (e.g. Contacto). */
  variant?: "light" | "dark";
  className?: string;
}

const ACCENT_CLASS: Record<AccentColor, string> = {
  red: "text-red",
  blue: "text-blue",
};

export function SectionHeading({
  index,
  title,
  tag,
  accent,
  variant = "light",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex items-baseline gap-4.5 ${className}`}>
      <span className={`text-[11px] tracking-[0.2em] ${ACCENT_CLASS[accent]}`}>
        {index}
      </span>
      <h2
        className={`m-0 text-3xl font-bold tracking-[-0.035em] sm:text-4xl lg:text-[44px] ${
          variant === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <span
        className={`text-[11px] tracking-[0.18em] uppercase ${
          variant === "dark" ? "text-white/50" : "text-faint"
        }`}
      >
        {tag}
      </span>
    </div>
  );
}
