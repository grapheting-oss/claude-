export function QuoteBanner() {
  const emph =
    "font-semibold text-white [font-family:var(--font-display),sans-serif]";
  return (
    <section className="relative w-full overflow-x-clip bg-[#4a3b94] text-white">
      <div className="mx-auto grid max-w-[1320px] items-center gap-8 px-5 md:grid-cols-[1.35fr_0.9fr] md:gap-12 md:px-10">
        <p className="py-14 text-[clamp(28px,4vw,52px)] font-medium leading-[1.16] tracking-tight text-white/60 md:py-24">
          Somos una <span className={emph}>agencia creativa</span> que combina{" "}
          <span className={emph}>estrategia, diseño y tecnología</span> para
          transformar ideas en resultados y{" "}
          <span className={emph}>hacer crecer tu marca</span>.
        </p>
        {/* right grid cell reserves layout space; the photo itself is absolute */}
        <div aria-hidden="true" className="hidden md:block" />
      </div>

      {/* soft celeste glow anchored behind her */}
      <div className="pointer-events-none absolute bottom-0 right-[4%] hidden h-2/3 w-[34%] bg-[radial-gradient(58%_62%_at_50%_100%,rgba(63,208,232,0.32),transparent_72%)] md:block" />
      {/* Valeria — anchored to the band's bottom, head pokes above the top line */}
      <img
        src="/images/valeria-2.png"
        alt="Valeria Armijos"
        className="pointer-events-none absolute bottom-0 right-[3%] z-10 hidden h-[118%] max-h-[780px] w-auto object-contain md:block"
        loading="lazy"
      />
    </section>
  );
}
