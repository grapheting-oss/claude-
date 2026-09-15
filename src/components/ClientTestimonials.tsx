type Testimonial = {
  quote: string;
  name: string;
  initials: string;
  photo: string;
  role: string;
  company: string;
};

/** Invented testimonials — replace with real client quotes when available. */
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Llegamos con una idea difusa de lo que queríamos y salimos con una marca que por fin se parece a nosotros. Lo que más valoro es que preguntaron mucho antes de proponer nada.",
    name: "Mariana Escobar",
    initials: "ME",
    photo: "/images/testimonials/t1.jpg",
    role: "Gerente de Marca",
    company: "Grupo Andes",
  },
  {
    quote:
      "Pasamos de publicar por publicar a tener una estrategia con cabeza. En seis meses las consultas por redes se volvieron nuestra principal fuente de clientes nuevos.",
    name: "Diego Salazar",
    initials: "DS",
    photo: "/images/testimonials/t2.jpg",
    role: "Director Comercial",
    company: "Vértice Logística",
  },
  {
    quote:
      "Trabajar con NIUCOM fue fácil en el mejor sentido: plazos claros, entregas a tiempo y gente que responde. Para un equipo pequeño como el nuestro, eso vale oro.",
    name: "Carolina Vallejo",
    initials: "CV",
    photo: "/images/testimonials/t3.jpg",
    role: "Coordinadora de Comunicación",
    company: "Fundación Raíces",
  },
  {
    quote:
      "No tenía presupuesto de agencia grande y aun así me trataron como si lo tuviera. El material del lanzamiento nos dejó la tienda llena la primera semana.",
    name: "Andrés Paredes",
    initials: "AP",
    photo: "/images/testimonials/t4.jpg",
    role: "Fundador",
    company: "Cafetería Origen",
  },
  {
    quote:
      "El video institucional superó lo que teníamos en la cabeza. Entendieron el tono exacto que necesitábamos: serio pero cercano, sin caer en lo frío.",
    name: "Paulina Ríos",
    initials: "PR",
    photo: "/images/testimonials/t5.jpg",
    role: "Jefa de Marketing",
    company: "Clínica Vitalis",
  },
  {
    quote:
      "Nos rediseñaron toda la línea gráfica sin perder lo que la gente ya reconocía de nosotros. Ese equilibrio era justo lo difícil y lo resolvieron bien.",
    name: "Sebastián Nájera",
    initials: "SN",
    photo: "/images/testimonials/t6.jpg",
    role: "Gerente General",
    company: "Distribuidora Litoral",
  },
  {
    quote:
      "Lo que más me sorprendió fue el seguimiento después de entregar. Siguen pendientes de cómo nos va, y eso no lo había visto en otras agencias.",
    name: "Gabriela Mena",
    initials: "GM",
    photo: "/images/testimonials/t7.jpg",
    role: "Directora de Proyectos",
    company: "Constructora Sur",
  },
  {
    quote:
      "Les pedí algo urgente para una feria y lo resolvieron en tres días sin bajar la calidad. Desde ahí son nuestro equipo de cabecera.",
    name: "Iván Cordero",
    initials: "IC",
    photo: "/images/testimonials/t8.jpg",
    role: "Jefe de Ventas",
    company: "Textiles Nuvo",
  },
];

const ROW_A = TESTIMONIALS.slice(0, 4);
const ROW_B = TESTIMONIALS.slice(4);

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="mr-6 flex min-h-[300px] w-[86vw] shrink-0 flex-col justify-between rounded-3xl border border-white/15 bg-white/[0.08] p-8 backdrop-blur-sm sm:w-[430px]">
      <blockquote className="text-[16px] leading-relaxed text-white/90">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-8 flex items-end justify-between gap-5">
        <div className="leading-snug">
          <div className="font-display text-[18px] font-bold text-white">
            {t.name}
          </div>
          <div className="mt-1 text-[13px] text-white/65">
            {t.role} <span className="text-white/35">|</span> {t.company}
          </div>
        </div>

        <img
          src={t.photo}
          alt=""
          draggable={false}
          loading="lazy"
          className="h-14 w-14 shrink-0 rounded-full border border-white/25 object-cover"
        />
      </figcaption>
    </figure>
  );
}

function Row({
  items,
  direction,
}: {
  items: Testimonial[];
  direction: "left" | "right";
}) {
  // Duplicated so the -50% loop is seamless.
  const track = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={direction === "left" ? "niu-row-left" : "niu-row-right"}>
        {track.map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export function ClientTestimonials() {
  return (
    <section className="bg-[#256ba0] pb-24 pt-8 text-white md:pb-28 md:pt-10">
      <h2 className="font-display mx-auto max-w-[1320px] px-5 text-center text-[clamp(32px,4.4vw,56px)] font-bold leading-tight tracking-tight md:px-10">
        La voz de nuestros clientes
      </h2>

      <div
        className="niu-rows mt-14 flex flex-col gap-6"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
        }}
      >
        <Row items={ROW_A} direction="left" />
        <Row items={ROW_B} direction="right" />
      </div>
    </section>
  );
}
