import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { AccentColor, Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ACCENT_TEXT_CLASS: Record<AccentColor, string> = {
  red: "text-red",
  blue: "text-blue",
};

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-1 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-lg border border-border bg-bg px-3 py-1.75 text-[11px]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardClass =
    "overflow-hidden rounded-[18px] border border-border bg-white transition-[transform,box-shadow] duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_26px_60px_-30px_rgba(11,15,26,0.4)]";

  if (project.size === "large") {
    return (
      <div className="group">
        <article className={`grid grid-cols-1 md:grid-cols-2 ${cardClass}`}>
          <div className="relative h-57.5 bg-surface md:order-2 md:h-auto md:min-h-90">
            <ImagePlaceholder
              label={project.imageLabel}
              src={project.image}
              alt={`Captura de ${project.title}`}
              className={project.imagePosition ?? "object-top"}
            />
          </div>
          <div className="flex flex-col justify-between gap-3.5 p-8 md:order-1 md:gap-5 md:p-7 lg:p-11">
            <div className="flex flex-col gap-3.5 md:gap-4">
              <span
                className={`text-[10px] tracking-[0.16em] uppercase ${ACCENT_TEXT_CLASS[project.accent]}`}
              >
                {project.index} — {project.category}
              </span>
              <h3 className="m-0 text-2xl leading-[1.15] font-bold tracking-[-0.025em] md:text-[28px] md:tracking-[-0.03em] lg:text-[30px]">
                {project.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-pretty text-muted md:text-base">
                {project.description}
              </p>
            </div>
            <ProjectTags tags={project.tags} />
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="group">
      <article className={`flex flex-col ${cardClass}`}>
        <div className="relative h-57.5 bg-surface">
          <ImagePlaceholder
            label={project.imageLabel}
            src={project.image}
            alt={`Captura de ${project.title}`}
            className={project.imagePosition ?? "object-top"}
          />
        </div>
        <div className="flex flex-col gap-3.5 p-8">
          <span
            className={`text-[10px] tracking-[0.16em] uppercase ${ACCENT_TEXT_CLASS[project.accent]}`}
          >
            {project.index} — {project.category}
          </span>
          <h3 className="m-0 text-2xl font-bold tracking-[-0.025em]">{project.title}</h3>
          <p className="m-0 text-[15px] leading-[1.6] text-muted">{project.description}</p>
          <ProjectTags tags={project.tags} />
        </div>
      </article>
    </div>
  );
}
