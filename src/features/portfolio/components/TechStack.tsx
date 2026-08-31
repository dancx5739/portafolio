import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECH_CATEGORIES } from "../data/techStack";
import { TechCategoryRow } from "./TechCategoryRow";

export function TechStack() {
  return (
    <section
      id="tecnologias"
      className="border-t border-border bg-white px-[clamp(20px,5vw,72px)] py-24 lg:py-30"
    >
      <Reveal>
        <SectionHeading index="03" title="Tecnologías" tag="/ Stack" accent="blue" className="mb-5" />
      </Reveal>
      <Reveal delay={60}>
        <p className="m-0 mb-8 max-w-[560px] text-base leading-[1.6] text-muted">
          Herramientas con las que trabajo a diario, del frontend al despliegue.
        </p>
      </Reveal>

      {TECH_CATEGORIES.map((category, index) => (
        <TechCategoryRow key={category.id} category={category} delay={index * 80} />
      ))}
    </section>
  );
}
