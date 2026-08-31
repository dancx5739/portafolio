import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/constants/site";
import { CONTACT_CHANNELS } from "../data/contact";
import type { AccentColor } from "../types";

const HOVER_CLASS: Record<AccentColor, string> = {
  red: "hover:border-red hover:bg-[rgba(232,35,47,0.12)]",
  blue: "hover:border-blue-light hover:bg-[rgba(27,68,216,0.18)]",
};

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-ink px-[clamp(20px,5vw,72px)] py-24 text-white lg:py-32"
    >
      <div
        aria-hidden="true"
        className="animate-grid-pan absolute -inset-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden="true"
        className="animate-float-a absolute -top-30 left-[30%] h-[480px] w-[480px] rounded-full blur-[14px]"
        style={{ background: "radial-gradient(circle, rgba(232,35,47,0.32), transparent 66%)" }}
      />
      <div
        aria-hidden="true"
        className="animate-float-b absolute -bottom-50 right-[6%] h-[460px] w-[460px] rounded-full blur-[14px]"
        style={{ background: "radial-gradient(circle, rgba(27,68,216,0.40), transparent 66%)" }}
      />

      <div className="relative flex max-w-225 flex-col gap-10 lg:gap-12">
        <Reveal>
          <SectionHeading
            index="05"
            title="Contacto"
            tag="/ Get in touch"
            accent="red"
            variant="dark"
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="m-0 text-[clamp(28px,4vw,50px)] leading-[1.15] font-semibold tracking-[-0.035em] text-pretty">
            ¿Tienes un proyecto en mente? <span className="text-red-light">Conversemos.</span>
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT_CHANNELS.map((channel) => {
              const content = (
                <>
                  <span className="text-[10px] tracking-[0.16em] text-white/55 uppercase">
                    {channel.label}
                  </span>
                  <span className="text-[17px] font-medium">{channel.value}</span>
                </>
              );

              const baseClass =
                "flex flex-col gap-2.5 rounded-2xl border border-white/16 bg-white/4 p-6.5 transition-[transform,border-color,background] duration-[260ms]";

              if (channel.href) {
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className={`${baseClass} text-white hover:-translate-y-1.25 ${HOVER_CLASS[channel.hoverAccent ?? "red"]}`}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={channel.label} className={baseClass}>
                  {content}
                </div>
              );
            })}
          </div>
        </Reveal>

        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/12 pt-10">
          <span className="text-[11px] tracking-[0.14em] text-white/45 uppercase">
            {SITE.fullName}
          </span>
          <span className="text-[11px] tracking-[0.14em] text-white/45 uppercase">
            {SITE.role}
          </span>
        </div>
      </div>
    </section>
  );
}
