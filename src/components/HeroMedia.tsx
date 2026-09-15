"use client";

import { useCallback, useEffect, useState } from "react";

/** Placeholder reel — swap for NIUCOM's own stills and showreel. */
const SLIDES = [
  "/images/services/s5.jpg",
  "/images/services/s2.jpg",
  "/images/services/s7.jpg",
  "/images/services/s1.jpg",
];

const VIDEO_SRC = "/videos/waves-loop.mp4";
const INTERVAL = 5000;

export function HeroMedia() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  // Auto-advance, paused while the modal is open.
  useEffect(() => {
    if (open) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(
      () => setIndex((n) => (n + 1) % SLIDES.length),
      INTERVAL,
    );
    return () => clearTimeout(t);
  }, [index, open]);

  const close = useCallback(() => setOpen(false), []);

  // Escape to close + lock background scroll.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <>
      {/* Decoration sits clear of both the headline and the social rail */}
      <div className="pointer-events-none absolute right-[10%] top-1/2 z-20 hidden aspect-square w-[38vw] max-w-[560px] -translate-y-1/2 xl:block">
        {/* rotating rings */}
        <div className="niu-spin absolute inset-0 rounded-full border-2 border-dashed border-white/25" />
        <div className="niu-spin-rev absolute inset-[5%] rounded-full border border-white/15" />

        {/* media disc */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Reproducir el video de NIUCOM"
          className="group pointer-events-auto absolute inset-[10%] cursor-pointer overflow-hidden rounded-full bg-gradient-to-br from-[#2f85c2] via-[#3379e7] to-[#8b6ff0] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#3fd0e8]/70"
        >
          {SLIDES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}

          {/* darkening + play button on hover */}
          <span className="absolute inset-0 bg-[#160b33]/0 transition-colors duration-300 group-hover:bg-[#160b33]/45 group-focus-visible:bg-[#160b33]/45" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-20 w-20 scale-75 place-items-center rounded-full bg-white/95 opacity-0 shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-[#0e0730]">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.5.87l11-6.86a1 1 0 0 0 0-1.74l-11-6.86A1 1 0 0 0 8 5.14Z" />
              </svg>
            </span>
          </span>

        </button>

        {/* orbiting dots */}
        <div className="niu-spin absolute inset-0">
          <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-[#3fd0e8] shadow-[0_0_26px_rgba(63,208,232,0.95)]" />
        </div>
        <div className="niu-spin-rev absolute inset-[5%]">
          <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#8b6ff0] shadow-[0_0_18px_rgba(139,111,240,0.9)]" />
        </div>

        {/* floating stat cards */}
        <div className="niu-float absolute -left-[3%] top-[15%] rounded-2xl bg-white px-5 py-3 shadow-[0_18px_44px_rgba(10,5,40,0.5)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2f85c2]">
            Proyectos
          </p>
          <p className="font-display text-[20px] font-bold leading-tight text-[#0e0730]">
            +100 de impacto
          </p>
        </div>

        <div className="niu-float2 absolute -right-[5%] bottom-[22%] rounded-2xl bg-white px-5 py-3 shadow-[0_18px_44px_rgba(10,5,40,0.5)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
            Experiencia
          </p>
          <p className="font-display text-[20px] font-bold leading-tight text-[#0e0730]">
            +10 años
          </p>
        </div>

        <div className="niu-float absolute bottom-[2%] left-[14%] rounded-full bg-gradient-to-r from-[#2f85c2] to-[#8b6ff0] px-5 py-2.5 shadow-[0_14px_34px_rgba(47,133,194,0.55)]">
          <p className="text-[13px] font-semibold text-white">
            +20 aplicaciones de IA
          </p>
        </div>
      </div>

      {/* Video modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video de NIUCOM"
          onClick={close}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#0a0520]/85 p-5 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
          >
            <video
              src={VIDEO_SRC}
              controls
              autoPlay
              playsInline
              className="aspect-video h-auto w-full"
            />
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Cerrar video"
            className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
