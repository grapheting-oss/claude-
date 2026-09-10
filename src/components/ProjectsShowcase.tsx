"use client";

import { useState } from "react";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/icons";

type Category =
  | "Eventos"
  | "Fotografía"
  | "Branding"
  | "Diseño web"
  | "Audiovisual"
  | "Redes sociales";

type WorkArea = {
  title: string;
  label: string;
  category: Category;
  gradient: string;
  image?: string;
  /** relative tile height for the masonry rhythm */
  span: "tall" | "short";
};

const filters: Array<Category | "Todos"> = [
  "Todos",
  "Eventos",
  "Fotografía",
  "Branding",
  "Diseño web",
  "Audiovisual",
  "Redes sociales",
];

const workAreas: WorkArea[] = [
  {
    title: "Coberturas de eventos",
    label: "Sociales · Corporativos · Deportivos",
    category: "Eventos",
    gradient: "bg-gradient-to-br from-[#3379e7] to-[#8b6ff0]",
    image: "/images/work/w1.jpg",
    span: "tall",
  },
  {
    title: "Foto Studio",
    label: "Fotografía comercial y corporativa",
    category: "Fotografía",
    gradient: "bg-gradient-to-br from-[#8b6ff0] to-[#2f85c2]",
    image: "/images/work/w2.jpg",
    span: "short",
  },
  {
    title: "Branding",
    label: "Identidad corporativa",
    category: "Branding",
    gradient: "bg-gradient-to-br from-[#4a3b94] to-[#3379e7]",
    image: "/images/work/w3.jpg",
    span: "short",
  },
  {
    title: "Diseño web",
    label: "Sitios y plataformas digitales",
    category: "Diseño web",
    gradient: "bg-gradient-to-br from-[#2f85c2] to-[#3379e7]",
    image: "/images/work/w4.jpg",
    span: "tall",
  },
  {
    title: "Producción audiovisual",
    label: "Video y edición",
    category: "Audiovisual",
    gradient: "bg-gradient-to-br from-[#8b6ff0] to-[#4a3b94]",
    image: "/images/work/w5.jpg",
    span: "tall",
  },
  {
    title: "Redes sociales",
    label: "Gestión y contenido",
    category: "Redes sociales",
    gradient: "bg-gradient-to-br from-[#3379e7] to-[#2f85c2]",
    image: "/images/work/w6.jpg",
    span: "short",
  },
];

export function ProjectsShowcase() {
  const [active, setActive] = useState<Category | "Todos">("Todos");

  const visible = workAreas.filter(
    (a) => active === "Todos" || a.category === active,
  );

  return (
    <section className="bg-transparent pb-20 pt-24 text-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-[clamp(36px,6vw,64px)] font-bold leading-[0.95] tracking-tight">
              Nuestro trabajo
            </h2>
            <p className="mt-4 text-[18px] text-white/60">
              Áreas en las que damos vida a tu marca.
            </p>
          </div>

          <a
            href="https://wa.me/593987245860"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full border-2 border-[#2f85c2] px-7 py-2.5 text-[17px] font-bold text-white transition-colors hover:bg-[#2f85c2]/10 md:self-auto"
          >
            Contáctanos
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#2f85c2] text-white transition-transform duration-300 group-hover:scale-110">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
          </a>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`font-display rounded-full border px-6 py-2.5 text-[15px] font-semibold uppercase tracking-wide transition-colors ${
                  isActive
                    ? "border-white bg-white text-[#0e0730]"
                    : "border-white/25 text-white/80 hover:border-white/60 hover:text-white"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Masonry gallery */}
        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {visible.map((area) => (
            <article
              key={area.title}
              className="group mb-6 block break-inside-avoid"
            >
              <div
                className={`relative flex w-full flex-col justify-end overflow-hidden border border-white/10 p-6 ${
                  area.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                } ${area.gradient}`}
              >
                {/* photo */}
                {area.image && (
                  <img
                    src={area.image}
                    alt={area.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                {/* darkening for legibility */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
                <div className="relative flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[12px] font-medium uppercase tracking-wider text-white/80">
                      {area.label}
                    </span>
                    <h3 className="font-display mt-1 text-[24px] leading-tight text-white">
                      {area.title}
                    </h3>
                  </div>
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 text-white opacity-0 transition-all duration-300 group-hover:bg-[#2f85c2] group-hover:text-white group-hover:opacity-100"
                  >
                    <ArrowRightIcon className="h-5 w-5 -rotate-45" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
