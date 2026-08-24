export function CtaSection() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#151515] to-[#0a0a0a] px-6 py-20 md:px-16 md:py-24">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#72F5E3]">
            1 minuto
          </span>
          <h2 className="font-display mt-4 max-w-4xl text-[clamp(40px,7vw,72px)] font-bold leading-[1.02] tracking-tight text-white">
            Obtenga un presupuesto instantáneo
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            ¿Tiene curiosidad por el costo de su proyecto web? Nuestro calculador
            en línea le ofrece un presupuesto rápido y sin compromiso.
          </p>
          <a
            href="#"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#E7FE56] px-8 py-4 font-medium text-black transition-transform duration-200 hover:scale-105"
          >
            Solicitar mi presupuesto
          </a>
        </div>
      </div>
    </section>
  );
}
