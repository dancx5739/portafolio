import type { NavItem } from "@/types";

interface NavListProps {
  items: NavItem[];
  activeId: string;
  onNavigate?: () => void;
}

const BAR_ACCENT_CLASS = {
  red: "bg-red",
  blue: "bg-blue",
} as const;

export function NavList({ items, activeId, onNavigate }: NavListProps) {
  return (
    <nav className="flex flex-col gap-1">
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={onNavigate}
            aria-current={isActive ? "true" : undefined}
            className={`flex items-center gap-3.5 rounded-[10px] px-3 py-2.75 transition-colors duration-[240ms] ${
              isActive ? "bg-panel text-ink" : "text-muted hover:bg-panel hover:text-ink"
            }`}
          >
            <span
              aria-hidden="true"
              className={`w-[3px] rounded-sm transition-[height,opacity] duration-[280ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                isActive ? `h-6.5 opacity-100 ${BAR_ACCENT_CLASS[item.accent]}` : "h-4 bg-red opacity-0"
              }`}
            />
            <span className="text-[10px] text-faint">{item.index}</span>
            <span className="flex flex-col">
              <span className="text-sm font-medium">{item.label}</span>
              <span className="text-[9px] tracking-[0.12em] text-faint uppercase">
                {item.subLabel}
              </span>
            </span>
          </a>
        );
      })}
    </nav>
  );
}
