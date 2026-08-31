import { useEffect, useRef, useState } from "react";
import { AvailabilityFooter } from "./AvailabilityFooter";
import { BrandMark } from "./BrandMark";
import { NavList } from "./NavList";
import { SITE } from "@/constants/site";
import { NAV_ITEMS } from "@/constants/navigation";

interface MobileHeaderProps {
  activeId: string;
}

export function MobileHeader({ activeId }: MobileHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-30 flex h-16 items-center justify-between border-b border-border bg-white px-5 lg:hidden">
        <div className="flex items-center gap-3">
          <BrandMark />
          <span className="text-sm font-semibold tracking-[-0.2px]">{SITE.shortName}</span>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
          className="grid h-10 w-10 place-items-center rounded-lg border border-border text-ink transition-colors hover:border-red hover:text-red"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M1 4h16M1 9h16M1 14h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed top-0 left-0 z-50 flex h-full w-[84%] max-w-[300px] flex-col justify-between border-r border-border bg-white px-7 py-8 transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BrandMark />
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold tracking-[-0.2px]">{SITE.shortName}</span>
                <span className="text-[10px] tracking-[0.14em] text-red uppercase">
                  Portafolio {SITE.year}
                </span>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar menú"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border text-ink transition-colors hover:border-red hover:text-red"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <NavList items={NAV_ITEMS} activeId={activeId} onNavigate={() => setIsOpen(false)} />
        </div>

        <AvailabilityFooter />
      </div>
    </>
  );
}
