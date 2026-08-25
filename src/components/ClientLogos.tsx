const pillars: string[] = [
  "Gestión de redes sociales",
  "Pauta y campañas",
  "Diseño web",
  "Plataformas y automatización",
  "Diseño gráfico y audiovisual",
];

export function ClientLogos() {
  return (
    <section className="bg-transparent py-14">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <p className="text-center font-mono text-[12px] uppercase tracking-[0.2em] text-white/40">
          Marketing digital y redes sociales
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {pillars.map((pillar) => (
            <span
              key={pillar}
              className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-[15px] text-white"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f85c2]" />
              {pillar}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
