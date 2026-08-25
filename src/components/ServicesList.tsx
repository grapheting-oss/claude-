import { ArrowRightIcon } from "@/components/icons";

type Service = {
  number: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Marketing estratégico",
    description: "Estrategias que impulsan el crecimiento de tu marca.",
  },
  {
    number: "02",
    title: "Gestión de redes sociales",
    description: "Contenido y comunidad que conectan con tu audiencia.",
  },
  {
    number: "03",
    title: "Pauta y campañas digitales",
    description: "Google Ads, Meta y TikTok con seguimiento de KPIs y ROI.",
  },
  {
    number: "04",
    title: "Diseño y desarrollo web",
    description: "Sitios y plataformas digitales a la medida de tu marca.",
  },
  {
    number: "05",
    title: "Producción audiovisual",
    description: "Fotografía, video y edición profesional.",
  },
  {
    number: "06",
    title: "Diseño gráfico y branding",
    description: "Identidad corporativa y piezas que hablan por tu marca.",
  },
  {
    number: "07",
    title: "Comunicación corporativa",
    description: "Mensajes claros que construyen confianza y reputación.",
  },
  {
    number: "08",
    title: "Consultoría en comunicación y marketing",
    description: "Acompañamiento estratégico para tomar mejores decisiones.",
  },
];

export function ServicesList() {
  return (
    <section className="bg-transparent pb-24 pt-4 text-white">
      {/* Full-width rows: dividers + hover band bleed edge-to-edge,
          content stays inside the centered container. */}
      <ul className="w-full border-b border-white/12">
        {services.map((service) => (
          <li key={service.number} className="border-t border-white/12">
            <a
              href="#cta"
              className="group block transition-colors duration-300 hover:bg-white/[0.04]"
            >
              <div className="mx-auto flex max-w-[1320px] items-center gap-5 px-5 py-7 md:gap-10 md:px-10">
                <span
                  className="font-display w-8 shrink-0 text-[20px] leading-none text-[#2f85c2]"
                  aria-hidden="true"
                >
                  {service.number}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(28px,4.2vw,52px)] font-bold leading-[0.98] tracking-tight text-white transition-transform duration-300 group-hover:translate-x-1">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/55">
                    {service.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20 text-white/50 transition-all duration-300 group-hover:scale-110 group-hover:border-transparent group-hover:bg-[#2f85c2] group-hover:text-white md:h-14 md:w-14"
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
