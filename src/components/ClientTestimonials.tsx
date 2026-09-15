"use client";

import { useRef } from "react";

type Testimonial = {
  quote: string;
  name: string;
  initials: string;
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
    role: "Gerente de Marca",
    company: "Grupo Andes",
  },
  {
    quote:
      "Pasamos de publicar por publicar a tener una estrategia con cabeza. En seis meses las consultas por redes se volvieron nuestra principal fuente de clientes nuevos.",
    name: "Diego Salazar",
    initials: "DS",
    role: "Director Comercial",
    company: "Vértice Logística",
  },
  {
    quote:
      "Trabajar con NIUCOM fue fácil en el mejor sentido: plazos claros, entregas a tiempo y gente que responde. Para un equipo pequeño como el nuestro, eso vale oro.",
    name: "Carolina Vallejo",
    initials: "CV",
    role: "Coordinadora de Comunicación",
    company: "Fundación Raíces",
  },
  {
    quote:
      "No tenía presupuesto de agencia grande y aun así me trataron como si lo tuviera. El material del lanzamiento nos dejó la tienda llena la primera semana.",
    name: "Andrés Paredes",
    initials: "AP",
    role: "Fundador",
    company: "Cafetería Origen",
  },
  {
    quote:
      "El video institucional superó lo que teníamos en la cabeza. Entendieron el tono exacto que necesitábamos: serio pero cercano, sin caer en lo frío.",
    name: "Paulina Ríos",
    initials: "PR",
    role: "Jefa de Marketing",
    company: "Clínica Vitalis",
  },
];

export function ClientTestimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const el = trackRef.current;
    if (!el) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
    };
    el.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    const el = trackRef.current;
    if (!d.active || !el) return;
    el.scrollLeft = d.startScroll - (e.clientX - d.startX);
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  return (
    <section className="bg-transparent py-24 text-white md:py-28">
      <h2 className="font-display mx-auto max-w-[1320px] px-5 text-center text-[clamp(32px,4.4vw,56px)] font-bold leading-tight tracking-tight md:px-10">
        La voz de nuestros clientes
      </h2>

      {/* Edge-faded, draggable row */}
      <div
        className="mt-14"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className="flex cursor-grab select-none snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 active:cursor-grabbing md:px-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ touchAction: "pan-y" }}
        >
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex min-h-[380px] w-[86vw] shrink-0 snap-center flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-9 backdrop-blur-sm sm:w-[440px]"
            >
              <blockquote className="text-[17px] leading-relaxed text-white/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-10 flex items-end justify-between gap-5">
                <div className="leading-snug">
                  <div className="font-display text-[19px] font-bold text-white">
                    {t.name}
                  </div>
                  <div className="mt-1 text-[14px] text-white/55">
                    {t.role} <span className="text-white/30">|</span> {t.company}
                  </div>
                </div>

                <span
                  aria-hidden
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/15 bg-gradient-to-br from-[#3379e7] to-[#8b6ff0] text-[15px] font-bold text-white"
                >
                  {t.initials}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
