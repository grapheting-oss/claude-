import { ArrowUpRightIcon } from "@/components/icons";
import { HeroStats } from "@/components/HeroStats";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.4 14.3c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-1-.3-1.6-.6-2.9-1.3-4.8-4.2-4.9-4.4-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.7c-.1.2-.3.3-.1.6.1.3.6 1 1.3 1.6.9.8 1.6 1 1.9 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.2.1.7-.1 1.3Z" />
    </svg>
  );
}
function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M16 3c.3 2.1 1.5 3.6 3.6 3.9v2.6c-1.3.1-2.5-.3-3.6-1v5.9c0 3.4-2.6 5.6-5.7 5.6A5.4 5.4 0 0 1 5 14.6c0-3.2 3-5.6 6.2-5v2.8a2.7 2.7 0 0 0-1-.2 2.6 2.6 0 1 0 2.6 2.6V3H16Z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/niucom.ec", Icon: InstagramIcon },
  { label: "WhatsApp", href: "https://wa.me/593987245860", Icon: WhatsappIcon },
  { label: "TikTok", href: "#", Icon: TiktokIcon },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-transparent"
    >
      {/* Waves video backdrop (subtle, tinted) */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-screen"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/waves-loop.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#160b33]/40 via-transparent to-[#160b33]/85" />

      {/* Brand radial glows */}
      <div className="pointer-events-none absolute -right-20 top-1/4 h-[560px] w-[560px] rounded-full bg-[#2f85c2]/20 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[440px] w-[440px] rounded-full bg-[#8b6ff0]/20 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 pt-36 pb-24 md:px-10 md:pt-40 md:pb-28">
        <h1 className="max-w-5xl font-display text-6xl font-semibold leading-[0.95] text-white sm:text-7xl md:text-8xl lg:text-[104px] xl:text-[120px]">
          Conectamos creatividad con{" "}
          <span className="relative inline-block">
            propósito
            <svg
              className="absolute -bottom-6 left-0 w-full md:-bottom-10"
              viewBox="0 0 300 20"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path
                d="M2 12 C 30 2, 45 18, 75 10 S 120 2, 150 12 S 210 18, 240 8 S 285 4, 298 12"
                stroke="#2f85c2"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="mt-20 max-w-xl text-lg text-white/75 md:mt-28 md:text-xl">
          Te ayudamos a crear soluciones creativas desde lo que tu marca
          realmente necesita. Transformamos ideas en resultados.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#cta"
            className="group inline-flex items-center gap-5 rounded-full bg-[#2f85c2] py-3 pl-9 pr-3 text-lg font-semibold text-white transition-colors hover:bg-[#3f97d1]"
          >
            Cotiza tu proyecto
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:rotate-45">
              <ArrowUpRightIcon className="h-5 w-5" />
            </span>
          </a>
          <a
            href="#services"
            className="text-base text-white/70 underline-offset-4 transition-colors hover:text-[#2f85c2] hover:underline"
          >
            Ver servicios
          </a>
        </div>

        <HeroStats />
      </div>

      {/* Vertical "Síguenos" social rail */}
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-5 md:flex md:right-12 lg:right-16">
        <span className="pointer-events-auto text-xs uppercase tracking-widest text-white/50 [writing-mode:vertical-rl]">
          Síguenos
        </span>
        <span className="h-10 w-px bg-white/20" />
        {SOCIALS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="pointer-events-auto text-white/60 transition-colors hover:text-[#2f85c2]"
          >
            <Icon />
          </a>
        ))}
      </div>
    </section>
  );
}
