import { ArrowUpRightIcon } from "@/components/icons";

type Service = {
  title: string;
  description: string;
  gradient: string;
  /** Optional real image; when empty a branded placeholder is shown. */
  image?: string;
};

const services: Service[] = [
  {
    title: "Marketing estratégico",
    description: "Estrategias que impulsan el crecimiento de tu marca.",
    gradient: "from-[#3379e7] to-[#8b6ff0]",
    image: "/images/services/s1.jpg",
  },
  {
    title: "Gestión de redes sociales",
    description: "Contenido y comunidad que conectan con tu audiencia.",
    gradient: "from-[#8b6ff0] to-[#2f85c2]",
    image: "/images/services/s2.jpg",
  },
  {
    title: "Pauta y campañas digitales",
    description: "Google Ads, Meta y TikTok con seguimiento de KPIs y ROI.",
    gradient: "from-[#2f85c2] to-[#3379e7]",
    image: "/images/services/s3.jpg",
  },
  {
    title: "Diseño y desarrollo web",
    description: "Sitios y plataformas a la medida de tu marca.",
    gradient: "from-[#4a3b94] to-[#3379e7]",
    image: "/images/services/s4.jpg",
  },
  {
    title: "Producción audiovisual",
    description: "Fotografía, video y edición profesional.",
    gradient: "from-[#8b6ff0] to-[#4a3b94]",
    image: "/images/services/s5.jpg",
  },
  {
    title: "Diseño gráfico y branding",
    description: "Identidad corporativa y piezas que hablan por tu marca.",
    gradient: "from-[#3379e7] to-[#2f85c2]",
    image: "/images/services/s6.jpg",
  },
  {
    title: "Comunicación corporativa",
    description: "Mensajes claros que construyen confianza y reputación.",
    gradient: "from-[#2f85c2] to-[#8b6ff0]",
    image: "/images/services/s7.jpg",
  },
  {
    title: "Consultoría en marketing",
    description: "Acompañamiento estratégico para mejores decisiones.",
    gradient: "from-[#4a3b94] to-[#8b6ff0]",
    image: "/images/services/s8.jpg",
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-transparent py-20 text-white md:py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="font-display text-[13px] font-semibold uppercase tracking-[0.28em] text-[#7fb2e6]">
            Qué hacemos
          </span>
          <h2 className="font-display mt-3 text-[clamp(32px,5vw,52px)] font-bold leading-[1.02] tracking-tight">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/60">
            Soluciones creativas desde lo que tu marca realmente necesita.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="group">
              {/* Image / placeholder */}
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${service.gradient}`}
              >
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center">
                    <PhotoIcon className="h-9 w-9 text-white/35" />
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRightIcon className="h-4 w-4" />
                </span>
              </div>

              <h3 className="font-display mt-4 text-[19px] font-bold leading-snug tracking-tight text-white">
                {service.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-white/55">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M21 16l-5-5L5 21" />
    </svg>
  );
}
