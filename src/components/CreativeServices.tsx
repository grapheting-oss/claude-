"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRightIcon } from "@/components/icons";

type ServiceBlock = {
  title: string;
  items: string[];
  gradient: string;
};

const blocks: ServiceBlock[] = [
  {
    title: "Marketing digital y redes sociales",
    gradient: "from-[#3379e7] to-[#8b6ff0]",
    items: [
      "Gestión de redes sociales",
      "Estrategia de contenidos",
      "Marketing para marcas y emprendimientos",
      "Plataformas digitales y automatización",
    ],
  },
  {
    title: "Campañas y pauta digital",
    gradient: "from-[#8b6ff0] to-[#2f85c2]",
    items: [
      "Google Ads · Meta · TikTok",
      "Segmentación de audiencias",
      "Seguimiento de KPIs y ROI",
      "Diseño y publicación de anuncios",
    ],
  },
  {
    title: "Diseño gráfico y branding",
    gradient: "from-[#4a3b94] to-[#3379e7]",
    items: [
      "Identidad corporativa (branding)",
      "Diseño para redes sociales",
      "Diseño editorial (catálogos, folletos)",
      "Presentaciones corporativas",
    ],
  },
  {
    title: "Diseño y producción audiovisual",
    gradient: "from-[#2f85c2] to-[#3379e7]",
    items: [
      "Fotografía y grabación de video",
      "Edición fotográfica y de video",
      "Contenido para redes sociales",
      "Piezas publicitarias y maquetación",
    ],
  },
  {
    title: "Diseño y desarrollo web",
    gradient: "from-[#8b6ff0] to-[#4a3b94]",
    items: [
      "Sitios y plataformas a medida",
      "Automatización de procesos",
      "Material impreso y digital",
      "Comunicación corporativa",
    ],
  },
  {
    title: "Publicidad impresa y textil",
    gradient: "from-[#3379e7] to-[#2f85c2]",
    items: [
      "Flyers · roll up · rótulos en lona",
      "Serigrafía y DTF full color",
      "Camisetas · gorras · uniformes",
      "Artículos promocionales",
    ],
  },
];

// Duplicate the set so the loop is seamless.
const loop = [...blocks, ...blocks];

export function CreativeServices() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const half = () => el.scrollWidth / 2;

    // Start a touch in so a card is clipped on the left edge too.
    el.scrollLeft = half() * 0.06;

    let raf = 0;
    const SPEED = 0.4; // px per frame — gentle
    const tick = () => {
      if (!drag.current.active && !reduce) {
        el.scrollLeft += SPEED;
      }
      const h = half();
      if (el.scrollLeft >= h) el.scrollLeft -= h;
      else if (el.scrollLeft < 0) el.scrollLeft += h;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return; // let native scroll handle touch
    const el = trackRef.current;
    if (!el) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
    };
    el.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.active) return;
    const el = trackRef.current;
    if (!el) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 3) d.moved = true;
    el.scrollLeft = d.startScroll - dx;
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  return (
    <div className="relative z-10 pb-20 pt-4 text-white md:pb-24 md:pt-8">
      <div>
        {/* Header */}
        <div className="mx-auto max-w-[1320px] px-5 md:px-10">
          <span className="font-display text-[13px] font-semibold uppercase tracking-[0.28em] text-[#bcd8ee]">
            Nuestros servicios
          </span>
          <h2 className="font-display mt-3 text-[clamp(34px,5vw,60px)] font-bold leading-[0.98] tracking-tight">
            Todo lo que hacemos
            <br className="hidden md:block" /> por tu marca
          </h2>
        </div>

        {/* Draggable infinite carousel */}
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className="mt-12 flex cursor-grab select-none overflow-x-auto px-4 pb-4 active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ touchAction: "pan-y" }}
        >
          {loop.map((block, i) => (
            <article
              key={i}
              aria-hidden={i >= blocks.length ? "true" : undefined}
              className={`relative mr-5 flex min-h-[420px] w-[300px] shrink-0 flex-col justify-between overflow-hidden border border-white/10 bg-gradient-to-br p-8 sm:w-[360px] ${block.gradient}`}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <h3 className="font-display pointer-events-none relative max-w-[15ch] text-[26px] font-bold leading-[1.05] tracking-tight">
                {block.title}
              </h3>

              <ul className="pointer-events-none relative mt-8 space-y-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-snug text-white/90"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center px-5">
          <a
            href="#cta"
            className="group inline-flex items-center gap-3 rounded-full bg-white py-3 pl-8 pr-3 text-[16px] font-semibold text-[#0e0730] transition-transform hover:scale-[1.03]"
          >
            Ver todos los servicios
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#2f85c2] text-white transition-transform group-hover:rotate-45">
              <ArrowUpRightIcon className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
