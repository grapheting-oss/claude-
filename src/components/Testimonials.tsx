type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "El equipo de diseño web de Odoo ha sido excelente durante todo el proceso de creación del nuevo sitio web. Su comunicación y atención al detalle han sido brillantes, comprendiendo perfectamente el brief y lo que queríamos. La formación también fue muy útil.",
    author: "Cefora",
    role: "Cliente",
    avatar: "/images/testi-cefora.jpg",
  },
  {
    quote:
      "Odoo transformó nuestra presencia digital con una web clara y elegante. El proceso fue ágil y el resultado superó todas nuestras expectativas.",
    author: "Fondation Saint-Luc",
    role: "Cliente",
    avatar: "/images/testi-fondation.jpg",
  },
  {
    quote:
      "Confiamos en Odoo para renovar por completo nuestra identidad online. Su equipo entendió nuestra visión y la plasmó en cada detalle del sitio.",
    author: "Materrup",
    role: "Cliente",
    avatar: "/images/testi-materrup.jpg",
  },
  {
    quote:
      "El diseño refleja a la perfección la ambición de nuestra marca en el sector aeroespacial. Un trabajo impecable, rápido y muy profesional.",
    author: "Aerospacelab",
    role: "Cliente",
    avatar: "/images/testi-aerospacelab.jpg",
  },
  {
    quote:
      "Un acompañamiento cercano de principio a fin. La web que crearon es rápida, bella y fiel a los valores de nuestra casa.",
    author: "Delacroix",
    role: "Cliente",
    avatar: "/images/testi-delacroix.jpg",
  },
  {
    quote:
      "Odoo nos entregó una tienda online cuidada hasta el último píxel. La comunicación fue fluida y el equipo, siempre atento a nuestras ideas.",
    author: "Caromela",
    role: "Cliente",
    avatar: "/images/testi-caromela.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <h2 className="font-display text-[40px] font-bold leading-tight tracking-tight text-white">
          La voz de nuestros clientes
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex flex-col justify-between rounded-2xl bg-[#151515] p-8"
            >
              <blockquote className="text-[15px] leading-relaxed text-white/85">
                {testimonial.quote}
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  loading="lazy"
                  width={44}
                  height={44}
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                />
                <div className="leading-tight">
                  <div className="text-[14px] font-bold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-[12px] text-white/50">
                    {testimonial.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
