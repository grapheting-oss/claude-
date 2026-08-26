import { ArrowUpRightIcon } from "@/components/icons";

export function CtaSection() {
  const outline =
    "text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)]";

  return (
    <section className="bg-transparent py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 md:p-14 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div>
              <span className="font-display text-[13px] font-semibold uppercase tracking-[0.28em] text-[#7fb2e6]">
                Contáctanos
              </span>
              <h2 className="font-display mt-5 text-[clamp(38px,6vw,72px)] font-bold leading-[1.0] tracking-tight text-white">
                ¿Listos para que
                <br />
                tu marca <span className={outline}>destaque</span>?
              </h2>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="https://wa.me/593987245860"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 rounded-full border-2 border-[#2f85c2] py-2 pl-8 pr-2 text-[16px] font-semibold text-white transition-colors hover:bg-[#2f85c2]/10"
                >
                  Cotiza tu proyecto
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#2f85c2] text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </span>
                </a>

                <span className="inline-flex items-center gap-2 text-[15px] text-white/60">
                  <ClockIcon className="h-5 w-5 text-white/50" />
                  Respuesta rápida
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="lg:pt-2">
              <p className="text-[17px] leading-relaxed text-white/75">
                ¿Tienes una idea en mente? Cuéntanos qué necesita tu marca y
                creamos juntos una{" "}
                <strong className="font-semibold text-white">
                  solución a la medida
                </strong>
                . Combinamos{" "}
                <strong className="font-semibold text-white">
                  estrategia, diseño y contenido con propósito
                </strong>{" "}
                para conectar con tu audiencia y hacer crecer tu marca.
                Escríbenos y empecemos a construir algo memorable hoy mismo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
