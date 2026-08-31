import { MobileHeader } from "@/components/layout/MobileHeader";
import { Sidebar } from "@/components/layout/Sidebar";
import { NAV_IDS } from "@/constants/navigation";
import { About, Contact, Hero, Projects, TechMarquee, TechStack } from "@/features/portfolio";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export function HomePage() {
  const activeId = useScrollSpy(NAV_IDS);

  return (
    <div className="flex min-h-screen bg-bg">
      <Sidebar activeId={activeId} />
      <MobileHeader activeId={activeId} />

      <main className="min-w-0 flex-1 pt-16 lg:ml-[268px] lg:pt-0">
        <Hero />
        <TechMarquee />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
