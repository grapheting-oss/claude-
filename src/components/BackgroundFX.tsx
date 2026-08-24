"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
  soft: boolean;
  tint: [number, number, number];
};
type Spark = { x: number; y: number; life: number; maxLife: number; maxR: number; tint: [number, number, number] };

const TINTS: [number, number, number][] = [
  [240, 244, 255],
  [240, 244, 255],
  [240, 244, 255],
  [120, 220, 240],
  [175, 165, 250],
];

/**
 * Ambient particle "dust" (tiny drifting points, like a subtle starfield) plus
 * a grain overlay — inspired by design.odoo.com. Moving the cursor spawns a few
 * small soft sparks along its path.
 */
export function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let dots: Dot[] = [];
    const sparks: Spark[] = [];

    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const makeDot = (seed = false): Dot => {
      const soft = Math.random() < 0.12; // few soft bokeh, rest tiny points
      return {
        x: rand(0, w),
        y: seed ? rand(0, h) : h + rand(0, 40),
        r: soft ? rand(2.5, 5) : rand(0.4, 1.6),
        vx: rand(-0.06, 0.06),
        vy: rand(-0.28, -0.06),
        a: soft ? rand(0.06, 0.12) : rand(0.3, 0.75),
        soft,
        tint: TINTS[(Math.random() * TINTS.length) | 0],
      };
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.min(Math.round((w * h) / 9000), 260);
      dots = Array.from({ length: target }, () => makeDot(true));
    };
    resize();
    window.addEventListener("resize", resize);

    let lastX = 0;
    let lastY = 0;
    const onMove = (e: PointerEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      if (dx * dx + dy * dy > 600 && sparks.length < 50) {
        sparks.push({
          x: e.clientX + rand(-6, 6),
          y: e.clientY + rand(-6, 6),
          life: 0,
          maxLife: rand(35, 60),
          maxR: rand(3, 9),
          tint: TINTS[(Math.random() * TINTS.length) | 0],
        });
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };
    if (!reduce) window.addEventListener("pointermove", onMove, { passive: true });

    const softCircle = (x: number, y: number, r: number, [cr, cg, cb]: number[], alpha: number) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${cr},${cg},${cb},${alpha})`);
      g.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    };

    let raf = 0;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 2);
    const drawDots = () => {
      for (const d of dots) {
        const [cr, cg, cb] = d.tint;
        if (d.soft) {
          softCircle(d.x, d.y, d.r, d.tint, d.a);
        } else {
          ctx.fillStyle = `rgba(${cr},${cg},${cb},${d.a})`;
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
    const render = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.y + d.r < -10) Object.assign(d, makeDot(false));
        if (d.x < -20) d.x = w + 20;
        else if (d.x > w + 20) d.x = -20;
      }
      drawDots();
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life++;
        const p = s.life / s.maxLife;
        if (p >= 1) {
          sparks.splice(i, 1);
          continue;
        }
        softCircle(s.x, s.y, s.maxR * easeOut(p), s.tint, (1 - p) * 0.35);
      }
      raf = requestAnimationFrame(render);
    };
    if (!reduce) render();
    else drawDots();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.6] mix-blend-soft-light"
        style={{
          backgroundImage: "url(/images/grain.png)",
          backgroundSize: "560px 560px",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
