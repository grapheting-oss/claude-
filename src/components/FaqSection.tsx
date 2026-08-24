"use client";

import { useState } from "react";
import { PlusIcon } from "@/components/icons";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "¿Cuáles son los precios?",
    answer:
      "Cada proyecto se cotiza a medida según su alcance, número de páginas y funcionalidades. Solicita un presupuesto y te enviamos una propuesta clara y sin compromiso.",
  },
  {
    question: "¿Qué pasa si necesito más horas?",
    answer:
      "No hay problema: puedes ampliar tu paquete de horas en cualquier momento. Te avisamos antes de superar lo acordado para que siempre tengas el control del presupuesto.",
  },
  {
    question: "¿Hay tarifas de mantenimiento?",
    answer:
      "Ofrecemos planes de mantenimiento opcionales para mantener tu sitio actualizado y seguro. También puedes gestionarlo por tu cuenta gracias a la sencillez de Odoo.",
  },
  {
    question: "¿Ofrecen formación?",
    answer:
      "Sí, incluimos sesiones de formación para que tu equipo domine el gestor de contenidos de Odoo. Así podrás editar textos, imágenes y páginas de forma autónoma.",
  },
  {
    question: "¿Puedo solicitar funciones adicionales más adelante?",
    answer:
      "Por supuesto. Odoo es modular, así que podemos añadir tienda online, blog, reservas o cualquier otra función cuando tu negocio lo necesite.",
  },
  {
    question: "¿Ustedes redactan contenido?",
    answer:
      "Contamos con redactores especializados que crean textos claros y optimizados para SEO. Trabajamos contigo para reflejar el tono y los objetivos de tu marca.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-[900px] px-5 md:px-10">
        <div className="text-center">
          <h2 className="font-display text-[clamp(32px,5vw,40px)] font-bold leading-[1.05] tracking-tight">
            Preguntas frecuentes (FAQ)
          </h2>
          <p className="mt-4 text-[16px] text-white/60">
            ¿Tiene preguntas? Nosotros tenemos respuestas.
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
                    className={`h-5 w-5 shrink-0 text-[#D5BFF0] transition-transform duration-300 ${
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
