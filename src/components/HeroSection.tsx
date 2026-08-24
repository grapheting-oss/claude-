import { ArrowUpRightIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      {/* Lime/green radial glow, right side */}
      <div className="pointer-events-none absolute -right-20 top-1/3 h-[520px] w-[520px] rounded-full bg-[#c8ff2e]/25 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[380px] w-[380px] rounded-full bg-[#D5BFF0]/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 md:px-10">
        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] text-white md:text-7xl lg:text-8xl">
          Creamos tu sitio web con{" "}
          <span className="relative inline-block">
            Odoo
            {/* Hand-drawn lime squiggle underline */}
            <svg
              className="absolute -bottom-4 left-0 w-full"
              viewBox="0 0 300 20"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path
                d="M2 12 C 30 2, 45 18, 75 10 S 120 2, 150 12 S 210 18, 240 8 S 285 4, 298 12"
                stroke="#E7FE56"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="mt-10 max-w-xl text-lg text-white/70 md:text-xl">
          Creamos sitios web estéticos, funcionales y centrados en el usuario que
          ayudan a las empresas a prosperar en el mundo digital.
        </p>

        <a
          href="#cta"
          className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#D5BFF0] px-7 py-4 text-base font-medium text-black transition-transform hover:scale-105"
        >
          Presupuesto
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>
      </div>
    </section>
  );
}
