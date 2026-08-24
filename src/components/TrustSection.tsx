interface ValueProp {
  number: string;
  title: string;
  description: string;
  accent: string;
}

const valueProps: ValueProp[] = [
  {
    number: "01",
    title: "Diseñadores expertos",
    description:
      "Un equipo creativo dedicado a hacer que tu marca destaque.",
    accent: "#D5BFF0",
  },
  {
    number: "02",
    title: "Desarrollo front-end",
    description: "Sitios rápidos, responsivos y construidos sobre Odoo.",
    accent: "#72F5E3",
  },
  {
    number: "03",
    title: "Especialistas en SEO",
    description: "Optimizamos cada página para que te encuentren.",
    accent: "#E7FE56",
  },
];

export function TrustSection() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <h2 className="font-display max-w-3xl text-[clamp(40px,6vw,64px)] font-bold leading-[1.05] tracking-tight text-white">
          Tu sitio web está en buenas manos
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {valueProps.map((prop) => (
            <div
              key={prop.number}
              className="rounded-3xl border border-white/10 bg-[#151515] p-8"
            >
              <span
                className="font-display block text-5xl font-bold leading-none"
                style={{ color: prop.accent }}
              >
                {prop.number}
              </span>
              <h3
                className="font-display mt-6 text-[22px] font-bold leading-tight"
                style={{ color: prop.accent }}
              >
                {prop.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/60">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
