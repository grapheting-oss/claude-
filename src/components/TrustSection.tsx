type ManifestoLine = {
  label: string;
  statement: string;
  accent: string;
};

const manifestoLines: ManifestoLine[] = [
  {
    label: "Somos",
    statement: "UNA AGENCIA CREATIVA",
    accent: "#3fd0e8",
  },
  {
    label: "Combinamos",
    statement: "ESTRATEGIA · DISEÑO · TECNOLOGÍA",
    accent: "#8b6ff0",
  },
  {
    label: "Logramos",
    statement: "HACER CRECER TU MARCA",
    accent: "#3379e7",
  },
];

export function TrustSection() {
  return (
    <section className="bg-transparent py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="flex flex-col gap-6">
          {manifestoLines.map((line) => (
            <div key={line.statement}>
              <span
                className="block text-[15px] font-medium uppercase tracking-[0.2em]"
                style={{ color: line.accent }}
              >
                {line.label}
              </span>
              <span className="font-display mt-2 block text-[clamp(32px,6vw,64px)] font-bold leading-[1.05] tracking-tight text-white">
                {line.statement}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-[18px] leading-relaxed text-white/70">
          Las grandes marcas no solo venden productos o servicios; construyen
          relaciones, generan confianza y crean experiencias que permanecen en la
          memoria de las personas.
        </p>
      </div>
    </section>
  );
}
