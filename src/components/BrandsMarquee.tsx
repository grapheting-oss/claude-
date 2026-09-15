/**
 * Placeholder brand band. The wordmarks below are invented names, styled as
 * logos — swap them for real client logos once they're available.
 */
type Brand = { name: string; className: string };

const BRANDS: Brand[] = [
  { name: "NORTHWIND", className: "font-display font-bold tracking-[0.18em]" },
  { name: "Vértice", className: "font-display font-semibold italic tracking-tight" },
  { name: "LUMINA", className: "font-display font-light tracking-[0.34em]" },
  { name: "Atlas & Co.", className: "font-serif font-medium tracking-tight" },
  { name: "MERIDIAN", className: "font-display font-extrabold tracking-[0.08em]" },
  { name: "Prisma", className: "font-display font-semibold tracking-[0.02em]" },
  { name: "KAIRÓS", className: "font-display font-medium tracking-[0.28em]" },
  { name: "ANDINA", className: "font-display font-bold tracking-[0.14em]" },
];

const TRACK = [...BRANDS, ...BRANDS];

export function BrandsMarquee() {
  return (
    <section className="relative z-10 border-t border-white/10 bg-[#140b33]/60 py-10 md:py-12">
      <p className="mb-8 text-center font-display text-[13px] font-semibold uppercase tracking-[0.28em] text-white/55">
        Trabajamos con{" "}
        <span className="text-[#8b6ff0]">marcas que quieren crecer</span>
      </p>

      <div className="overflow-hidden">
        <div className="niu-brands-track items-center">
          {TRACK.map((brand, i) => (
            <span
              key={i}
              aria-hidden={i >= BRANDS.length ? "true" : undefined}
              className={`mx-10 shrink-0 whitespace-nowrap text-[22px] text-white/70 transition-opacity md:mx-14 md:text-[28px] ${brand.className}`}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
