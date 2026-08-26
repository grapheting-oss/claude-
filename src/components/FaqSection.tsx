"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "¿Qué servicios ofrece NIUCOM?",
    answer:
      "Somos una agencia de marketing y comunicación que cubre estrategia, gestión de redes, diseño web, branding y producción audiovisual. Integramos todo en un plan a la medida de tu marca.",
  },
  {
    question: "¿Trabajan con emprendimientos y organizaciones?",
    answer:
      "Sí, acompañamos tanto a emprendimientos que arrancan como a empresas y organizaciones consolidadas. Adaptamos el alcance y el presupuesto a cada etapa de tu proyecto.",
  },
  {
    question: "¿Cómo empezamos un proyecto?",
    answer:
      "Todo parte de una conversación para entender tus objetivos y tu público. Con esa información armamos una propuesta clara con tiempos, entregables y presupuesto.",
  },
  {
    question: "¿Manejan redes sociales y pauta publicitaria?",
    answer:
      "Gestionamos tus redes con contenido con propósito y creatividad, y también planificamos campañas de pauta. Optimizamos la inversión para que cada anuncio genere resultados medibles.",
  },
  {
    question: "¿Hacen cobertura de eventos y producción audiovisual?",
    answer:
      "Realizamos cobertura de eventos, fotografía y video con un enfoque cuidado en cada detalle. Entregamos material listo para publicar y para fortalecer la imagen de tu marca.",
  },
  {
    question: "¿Cómo solicito una cotización?",
    answer:
      "Escríbenos a niucom.ec@gmail.com, por WhatsApp al 0987245860 o en Instagram @niucom.ec. Te respondemos con una propuesta personalizada y sin compromiso.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-transparent py-24 text-white">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 md:px-10 lg:grid-cols-[0.85fr_1.5fr] lg:gap-20">
        {/* Left: heading + intro */}
        <div>
          <h2 className="font-display text-[clamp(34px,5vw,54px)] font-bold leading-[1.02] tracking-tight">
            Preguntas
            <br />
            frecuentes (FAQ)
          </h2>
          <p className="mt-8 max-w-md text-[16px] leading-relaxed text-white/70">
            <span className="font-semibold text-white">¿Tienes preguntas?</span>{" "}
            ¡Tenemos respuestas! Explora nuestras preguntas frecuentes para
            conocer más sobre nuestros servicios y cómo podemos hacer realidad
            tu marca.
          </p>
        </div>

        {/* Right: accordion */}
        <div className="border-b border-white/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={faq.question} className="border-t border-white/15">
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-[clamp(18px,2.2vw,24px)] font-medium leading-snug text-white">
                    {faq.question}
                  </span>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#bcd8ee] text-[#123f73] transition-colors duration-300 group-hover:bg-white">
                    <span className="relative block h-4 w-4">
                      <span className="absolute left-0 top-1/2 h-[2.5px] w-4 -translate-y-1/2 rounded-full bg-current" />
                      <span
                        className={`absolute left-1/2 top-0 h-4 w-[2.5px] -translate-x-1/2 rounded-full bg-current transition-transform duration-300 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </span>
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-7 pr-16"
                >
                  <p className="text-[16px] leading-relaxed text-white/70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
