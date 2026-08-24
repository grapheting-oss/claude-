type Service = {
  number: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Diseño web",
    description:
      "Sitios web a medida, rápidos y centrados en el usuario, construidos con Odoo.",
  },
  {
    number: "02",
    title: "Diseño de logo",
    description:
      "Identidades visuales memorables que capturan la esencia de tu marca.",
  },
  {
    number: "03",
    title: "Fotografía",
    description:
      "Imágenes profesionales de producto y marca para destacar tu historia.",
  },
  {
    number: "04",
    title: "SEO",
    description:
      "Optimización técnica y de contenido para posicionar tu sitio en buscadores.",
  },
  {
    number: "05",
    title: "Marketing",
    description:
      "Estrategias digitales que convierten visitantes en clientes.",
  },
];

export function ServicesList() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <ul className="border-b border-white/15">
          {services.map((service) => (
            <li
              key={service.number}
              className="group grid grid-cols-1 items-baseline gap-4 border-t border-white/15 py-8 md:grid-cols-[auto_1fr_minmax(0,22rem)] md:gap-10"
            >
              <span
                className="font-display text-[24px] leading-none text-[#72F5E3]"
                aria-hidden="true"
              >
                {service.number}
              </span>

              <h3 className="font-display flex items-center gap-4 text-[clamp(40px,6vw,72px)] font-bold leading-[0.95] tracking-tight text-white transition-colors duration-300 group-hover:text-[#E7FE56]">
                {service.title}
                <svg
                  className="h-[0.5em] w-[0.5em] shrink-0 -translate-x-2 text-[#E7FE56] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </h3>

              <p className="text-[16px] leading-relaxed text-white/60 md:text-right">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
