"use client";

import { useEffect, useRef, useState } from "react";

export function DesignerSection() {
  const ref = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hasPhoto, setHasPhoto] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Scroll-linked dome: the coloured panel rises as a pronounced dome and
  // flattens/fills as it enters the viewport — like studiomodular.be.
  useEffect(() => {
    const el = ref.current;
    const panel = panelRef.current;
    if (!el || !panel) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const clamp = (v: number, a: number, b: number) =>
      Math.max(a, Math.min(b, v));
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the section top hits the bottom of the viewport,
      // 1 once it has risen ~80% of the way up.
      const p = clamp((vh - rect.top) / (vh * 0.8), 0, 1);
      const radius = 260 * (1 - p); // tall dome -> flat
      panel.style.borderTopLeftRadius = `50% ${radius}px`;
      panel.style.borderTopRightRadius = `50% ${radius}px`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const outline =
    "text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)]";

  return (
    <section ref={ref} className="relative z-10 mt-6 text-white md:mt-14">
      <div
        ref={panelRef}
        className="relative overflow-hidden bg-[linear-gradient(to_bottom,#2f85c2_0%,#256ba0_82%,#256ba0_100%)] text-white"
        style={{
          borderTopLeftRadius: "50% 260px",
          borderTopRightRadius: "50% 260px",
        }}
      >
      <div className="relative z-10 mx-auto grid max-w-[1320px] items-start gap-10 px-5 pb-8 pt-32 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-10 md:pb-10 md:pt-40">
        {/* Left: heading + info */}
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="font-display font-bold uppercase leading-[0.9] tracking-tight">
            <span className="block text-[clamp(22px,2.7vw,42px)] tracking-[0.02em] text-[#bcd8ee]">
              <span className={outline}>Diseñamos</span> para
            </span>
            <span className="mt-2 block text-[clamp(34px,5vw,68px)] leading-[0.9] text-white">
              <span className="whitespace-nowrap">conectar y</span>
              <br />
              destacar
            </span>
          </h2>

          <div className="mt-10">
            <div className="flex items-center gap-5">
              <ChevronsIcon className="h-11 w-11 shrink-0 text-white/90" />
              <h3 className="font-display text-[clamp(28px,4vw,48px)] font-bold uppercase leading-[0.95] tracking-tight">
                Alyson
                <br />
                Sánchez
              </h3>
            </div>
            <p className="mt-4 pl-[64px] text-[15px] font-semibold uppercase tracking-wide text-[#bcd8ee]">
              Diseñadora Gráfica Multimedia
            </p>

            <div className="mt-7 max-w-xl space-y-5 text-[16px] leading-relaxed text-white/85">
              <p>
                Soy una diseñadora gráfica apasionada por la comunicación
                visual, la creatividad y el desarrollo de marcas con propósito.
                En NIUCOM formo parte de un equipo que transforma ideas en
                soluciones visuales estratégicas, creando identidades, piezas
                gráficas y contenido que fortalecen la conexión entre las marcas
                y su audiencia.
              </p>
              <p>
                Creo en el diseño como una herramienta capaz de comunicar,
                inspirar y generar resultados, combinando estética,
                funcionalidad y estrategia para construir experiencias visuales
                memorables.
              </p>
            </div>
          </div>
        </div>

        {/* Right: framed blue card, Alyson pops out from the top */}
        <div
          className={`transition-all delay-200 duration-700 ease-out md:-mt-16 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative ml-auto w-full max-w-lg">
            {/* card */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 top-6 rounded-[2.4rem] bg-gradient-to-br from-[#123f73] via-[#0e3260] to-[#0a2547] shadow-[0_35px_90px_-25px_rgba(6,24,48,0.95)]"
            />
            {hasPhoto ? (
              <img
                src="/images/alyson.png"
                alt="Alyson Sánchez, Diseñadora Gráfica Multimedia"
                className="relative z-10 mx-auto block max-h-[720px] w-full object-contain [transform:scaleX(-1)]"
                loading="lazy"
                onError={() => setHasPhoto(false)}
              />
            ) : (
              <div className="relative z-10 grid aspect-[4/5] place-items-center px-6 text-center">
                <span className="text-sm font-medium text-white/70">
                  Foto de Alyson
                  <br />
                  (pendiente)
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

function ChevronsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 12l12 12-12 12" />
      <path d="M18 12l12 12-12 12" />
      <path d="M30 12l12 12-12 12" />
    </svg>
  );
}
