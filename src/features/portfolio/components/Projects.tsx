import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section
      id="proyectos"
      className="border-t border-border bg-bg px-[clamp(20px,5vw,72px)] py-24 lg:py-30"
    >
      <Reveal>
        <SectionHeading
          index="04"
          title="Proyectos"
          tag="/ Selected work"
          accent="red"
          className="mb-10 lg:mb-14"
        />
      </Reveal>

      <div className="flex flex-col gap-6">
        <Reveal>
          <ProjectCard project={featured} />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {rest.map((project, index) => (
            <Reveal key={project.id} delay={90 + index * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
