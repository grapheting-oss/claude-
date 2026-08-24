"use client";

import { useState } from "react";
import { PlusIcon } from "@/components/icons";

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
      <div className="mx-auto max-w-[900px] px-5 md:px-10">
        <div className="text-center">
          <h2 className="font-display text-[clamp(32px,5vw,40px)] font-bold leading-[1.05] tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-[16px] text-white/60">
            Resolvemos tus dudas antes de empezar.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={faq.question}
                className="rounded-xl border border-white/15 bg-white/[0.02] transition-colors duration-300 hover:border-white/30"
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-[17px] font-medium leading-snug text-white">
                    {faq.question}
                  </span>
                  <PlusIcon
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-[#3fd0e8] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-6 pb-6"
                >
                  <p className="text-[15px] leading-relaxed text-white/60">
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
