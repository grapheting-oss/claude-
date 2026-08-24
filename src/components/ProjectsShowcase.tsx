type WorkArea = {
  title: string;
  label: string;
  gradient: string;
};

const workAreas: WorkArea[] = [
  {
    title: "Coberturas de eventos",
    label: "Sociales · Corporativos · Deportivos",
    gradient: "bg-gradient-to-br from-[#3379e7] to-[#8b6ff0]",
  },
  {
    title: "Foto Studio",
    label: "Fotografía comercial y corporativa",
    gradient: "bg-gradient-to-br from-[#8b6ff0] to-[#3fd0e8]",
  },
  {
    title: "Branding",
    label: "Identidad corporativa",
    gradient: "bg-gradient-to-br from-[#4a3b94] to-[#3379e7]",
  },
  {
    title: "Diseño web",
    label: "Sitios y plataformas digitales",
    gradient: "bg-gradient-to-br from-[#3fd0e8] to-[#3379e7]",
  },
  {
    title: "Producción audiovisual",
    label: "Video y edición",
    gradient: "bg-gradient-to-br from-[#8b6ff0] to-[#4a3b94]",
  },
  {
    title: "Redes sociales",
    label: "Gestión y contenido",
    gradient: "bg-gradient-to-br from-[#3379e7] to-[#3fd0e8]",
  },
];

export function ProjectsShowcase() {
  return (
    <section className="bg-transparent py-20 text-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <h2 className="font-display text-[40px] leading-none tracking-tight">
          Nuestro trabajo
        </h2>
        <p className="mt-4 text-[18px] text-white/60">
          Áreas en las que damos vida a tu marca.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workAreas.map((area) => (
            <article
              key={area.title}
              className="group block rounded-2xl transition-transform duration-300 ease-out hover:-translate-y-2"
            >
              <div
                className={`relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden rounded-2xl border border-white/10 p-6 ${area.gradient}`}
              >
                <span className="text-[12px] font-medium uppercase tracking-wider text-white/80">
                  {area.label}
                </span>
                <h3 className="font-display mt-1 text-[24px] leading-tight text-white">
                  {area.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
