import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { publicAsset } from "@/utils/publicAsset";

export function About() {
  return (
    <section id="sobre" className="bg-bg px-[clamp(20px,5vw,72px)] py-24 lg:py-30">
      <Reveal>
        <SectionHeading index="02" title="Sobre mí" tag="/ About" accent="red" className="mb-10 lg:mb-14" />
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <Reveal delay={80} className="flex flex-col gap-8">
          <p className="m-0 text-2xl leading-[1.5] tracking-[-0.015em] text-pretty text-ink sm:text-[26px]">
            Soy un profesional comprometido con todos mis proyectos tanto persnales como
            profesionales, las nuevas tecnologias me inspiran a seguir aprendiendo cada día mas.
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="group h-full">
              <div className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-white p-6 transition-[transform,border-color] duration-[260ms] group-hover:-translate-y-1 group-hover:border-red">
                <span className="text-[10px] tracking-[0.14em] text-red uppercase">
                  Enfoque
                </span>
                <span className="text-base font-medium">Producto de punta a punta</span>
                <span className="text-sm leading-[1.55] text-muted">
                  Desde la base de datos hasta la interfaz y el despliegue.
                </span>
              </div>
            </div>
            <div className="group h-full">
              <div className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-white p-6 transition-[transform,border-color] duration-[260ms] group-hover:-translate-y-1 group-hover:border-blue">
                <span className="text-[10px] tracking-[0.14em] text-blue uppercase">
                  Analítica
                </span>
                <span className="text-base font-medium">Datos que se usan</span>
                <span className="text-sm leading-[1.55] text-muted">
                  Reportes y análisis integrados al flujo del negocio.
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160} className="flex flex-col gap-3.5">
          <div className="relative h-[280px] overflow-hidden rounded-2xl border border-border bg-white sm:h-[380px]">
            <ImagePlaceholder
              label="Arrastra aquí tu foto"
              src={publicAsset("/images/daniel.png")}
              alt="Daniel Fernando Cueva Reyes"
            />
          </div>
          <span className="text-[10px] tracking-[0.12em] text-faint uppercase">
            Retrato / Portrait
          </span>
        </Reveal>
      </div>
    </section>
  );
}
