"use client";

import { useEffect, useRef } from "react";
import { CreativeServices } from "@/components/CreativeServices";

export function DesignerSection() {
  const ref = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={ref} className="relative z-10 mt-6 text-white md:mt-14">
      <div
        ref={panelRef}
        className="relative overflow-hidden bg-[linear-gradient(to_bottom,#2f85c2_0px,#256ba0_720px,#256ba0_100%)] text-white"
        style={{
          borderTopLeftRadius: "50% 260px",
          borderTopRightRadius: "50% 260px",
        }}
      >
      {/* single continuous grain over the whole blue zone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.55] mix-blend-soft-light"
        style={{
          backgroundImage: "url(/images/grain.png)",
          backgroundSize: "560px 560px",
          backgroundRepeat: "repeat",
        }}
      />
      {/* Design services live inside the blue dome panel */}
      <div className="relative z-10 pt-28 md:pt-44">
        <CreativeServices />
      </div>
      </div>
    </section>
  );
}
