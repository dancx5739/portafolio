export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden bg-white px-[clamp(20px,5vw,72px)] pt-8 pb-16 lg:min-h-screen lg:pt-24 lg:pb-20"
    >
      <div
        aria-hidden="true"
        className="animate-grid-pan absolute -inset-20 opacity-90"
        style={{
          backgroundImage:
            "linear-gradient(#E9ECF1 1px, transparent 1px), linear-gradient(90deg, #E9ECF1 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden="true"
        className="animate-float-a absolute -top-35 -right-20 h-[520px] w-[520px] rounded-full blur-[12px]"
        style={{ background: "radial-gradient(circle, rgba(232,35,47,0.20), transparent 66%)" }}
      />
      <div
        aria-hidden="true"
        className="animate-float-b absolute -bottom-45 left-30 h-[460px] w-[460px] rounded-full blur-[12px]"
        style={{ background: "radial-gradient(circle, rgba(27,68,216,0.20), transparent 66%)" }}
      />
      <div
        aria-hidden="true"
        className="animate-spin-slow absolute top-24 right-[5vw] hidden h-33 w-33 rounded-full border border-dashed border-border-strong sm:block"
      />

      <div className="relative flex max-w-[1080px] flex-col gap-7">
        <div className="animate-rise-in flex flex-wrap items-center gap-3">
          <span className="text-[11px] tracking-[0.2em] text-red uppercase">
            Software Engineer
          </span>
          <span aria-hidden="true" className="h-px w-8.5 bg-border-strong" />
          <span className="text-[11px] tracking-[0.2em] text-blue uppercase">
            Technology Analyst
          </span>
        </div>

        <h1
          className="animate-rise-in m-0 text-[clamp(44px,8vw,112px)] leading-[0.92] font-bold tracking-[-0.045em]"
          style={{ animationDelay: "80ms" }}
        >
          <span className="block">Daniel Fernando</span>
          <span className="block text-red">
            Cueva <span className="text-ink">Reyes</span>
          </span>
        </h1>

        <p
          className="animate-rise-in m-0 max-w-[620px] text-lg leading-[1.6] text-pretty text-muted"
          style={{ animationDelay: "180ms" }}
        >
          Construyo sistemas web y móviles de extremo a extremo: producto, datos y analítica. / I
          build end-to-end web and mobile systems — product, data and analytics.
        </p>

        <div className="animate-rise-in flex flex-wrap gap-3.5" style={{ animationDelay: "280ms" }}>
          <span className="group inline-block">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2.5 rounded-xl bg-ink px-6.5 py-3.75 text-sm font-medium text-white transition-[transform,background] duration-[220ms] group-hover:-translate-y-1 group-hover:bg-red"
            >
              Ver proyectos
              <span className="text-[13px]">→</span>
            </a>
          </span>
          <span className="group inline-block">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2.5 rounded-xl border border-border-strong bg-white px-6.5 py-3.75 text-sm font-medium text-ink transition-[transform,border-color,color] duration-[220ms] group-hover:-translate-y-1 group-hover:border-blue group-hover:text-blue"
            >
              Contactar
            </a>
          </span>
        </div>

        <div
          className="animate-rise-in mt-2 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-7"
          style={{ animationDelay: "380ms" }}
        >
          <div className="flex flex-col gap-1.5 border-l-2 border-red pl-3.5">
            <span className="text-[28px] font-bold tracking-[-0.03em] sm:text-[30px]">Full Stack</span>
            <span className="text-[10px] tracking-[0.12em] text-faint uppercase">
              Web + Mobile
            </span>
          </div>
          <div className="flex flex-col gap-1.5 border-l-2 border-blue pl-3.5">
            <span className="text-[28px] font-bold tracking-[-0.03em] sm:text-[30px]">4+</span>
            <span className="text-[10px] tracking-[0.12em] text-faint uppercase">
              Años de experiencia
            </span>
          </div>
          <div className="flex flex-col gap-1.5 border-l-2 border-ink pl-3.5">
            <span className="text-[28px] font-bold tracking-[-0.03em] sm:text-[30px]">14+</span>
            <span className="text-[10px] tracking-[0.12em] text-faint uppercase">
              Tecnologías
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
