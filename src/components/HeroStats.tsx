"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  label: string;
};

const STATS: Stat[] = [
  { value: 10, label: "Años de experiencia" },
  { value: 100, label: "Proyectos de impacto" },
  { value: 20, label: "Aplicaciones de IA" },
];

export function HeroStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [vals, setVals] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVals(STATS.map((s) => s.value));
      return;
    }

    let raf = 0;
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setVals(STATS.map((s) => Math.round(s.value * ease)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="mt-12 flex flex-wrap gap-x-4 gap-y-6 md:mt-16">
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={`pr-4 sm:pr-8 ${
            i > 0 ? "sm:border-l sm:border-white/20 sm:pl-8" : ""
          }`}
        >
          <div className="font-display text-[clamp(34px,4vw,52px)] font-bold leading-none tracking-tight text-white">
            +{vals[i]}
          </div>
          <div className="mt-2.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/55">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
