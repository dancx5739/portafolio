import { AvailabilityFooter } from "./AvailabilityFooter";
import { BrandMark } from "./BrandMark";
import { NavList } from "./NavList";
import { SITE } from "@/constants/site";
import { NAV_ITEMS } from "@/constants/navigation";

interface SidebarProps {
  activeId: string;
}

export function Sidebar({ activeId }: SidebarProps) {
  return (
    <aside className="fixed top-0 left-0 z-20 hidden h-screen w-[268px] flex-col justify-between border-r border-border bg-white px-7 py-8.5 lg:flex">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-3">
          <BrandMark />
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold tracking-[-0.2px]">{SITE.shortName}</span>
            <span className="text-[10px] tracking-[0.14em] text-red uppercase">
              Portafolio {SITE.year}
            </span>
          </div>
        </div>

        <NavList items={NAV_ITEMS} activeId={activeId} />
      </div>

      <AvailabilityFooter />
    </aside>
  );
}
