type TeamMember = {
  name: string;
  initials: string;
  role: string;
  bio: string;
  quote: string;
};

const team: TeamMember[] = [
  {
    name: "Valeria Armijos",
    initials: "VA",
    role: "CEO · Fundadora",
    bio: "Apasionada de la comunicación estratégica, el marketing y la creación de experiencias que conectan marcas con personas. Lidera NIUCOM desarrollando estrategias que impulsan el crecimiento de empresas, emprendimientos e instituciones.",
    quote: "Creamos estrategias para marcas que quieren destacar.",
  },
  {
    name: "Alyson Sánchez",
    initials: "AS",
    role: "Diseñadora Gráfica Multimedia",
    bio: "Apasionada por la comunicación visual y el desarrollo de marcas con propósito. Transforma ideas en soluciones visuales estratégicas: identidades, piezas gráficas y contenido que fortalecen la conexión entre las marcas y su audiencia.",
    quote: "Creamos diseños que hablan por tu marca.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-transparent py-24 text-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <h2 className="font-display text-[40px] font-bold leading-tight tracking-tight text-white">
          Nuestro equipo
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-white/60">
          Detrás de cada estrategia hay un equipo que escucha, analiza y crea
          con propósito.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3379e7] to-[#8b6ff0] text-[18px] font-bold text-white">
                  {member.initials}
                </div>
                <div className="leading-tight">
                  <div className="font-display text-[24px] font-bold text-white">
                    {member.name}
                  </div>
                  <div className="text-[13px] font-medium text-[#2f85c2]">
                    {member.role}
                  </div>
                </div>
              </div>

              <p className="mt-6 text-[15px] leading-relaxed text-white/70">
                {member.bio}
              </p>

              <blockquote className="mt-6 border-l-2 border-[#2f85c2] pl-4 text-[15px] italic leading-relaxed text-white">
                {member.quote}
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
