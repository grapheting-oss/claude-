import { ArrowUpRightIcon } from "@/components/icons";

export function FounderSection() {
  return (
    <section id="founder" className="bg-transparent py-20 md:py-28">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-10">
        {/* Photo */}
        <div className="relative order-2 flex justify-center md:order-1">
          {/* soft brand glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(60% 55% at 50% 60%, rgba(63,208,232,0.16), transparent 72%)",
            }}
          />
          {/* framed card — Valeria pops out from the top */}
          <div className="relative w-full max-w-xl">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 top-24 rounded-[2rem] bg-gradient-to-br from-[#5b46b8] via-[#46329e] to-[#2f2080] shadow-[0_35px_90px_-25px_rgba(47,32,128,0.85)]"
            />
            <img
              src="/images/valeria.png"
              alt="Valeria Armijos, CEO y fundadora de NIUCOM"
              className="relative z-10 mx-auto max-h-[720px] w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Info */}
        <div className="order-1 md:order-2">
          <h2 className="font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-white md:text-7xl">
            Valeria
            <br />
            Armijos
          </h2>
          <p className="mt-4 text-lg font-medium text-white/90">
            CEO · Fundadora de NIUCOM
          </p>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/70">
            Soy una apasionada de la comunicación estratégica, el marketing y la
            creación de experiencias que conectan marcas con personas. Como
            fundadora y CEO de NIUCOM, lidero una agencia especializada en
            desarrollar estrategias de marketing y comunicación que impulsan el
            crecimiento de empresas, emprendimientos e instituciones a través de
            soluciones creativas e innovadoras.
          </p>

          <a
            href="#cta"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#3fd0e8] py-3 pl-7 pr-3 text-base font-semibold text-[#0e0730] transition-colors hover:bg-[#5cdcf0]"
          >
            Trabaja con nosotros
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/25 transition-transform group-hover:rotate-45">
              <ArrowUpRightIcon className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
