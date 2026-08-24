const phrases: string[] = [
  "Nuestros servicios",
  "Conectamos creatividad con propósito",
];

// Duplicate the group so the loop reads as seamless and the track always
// overflows the viewport.
const repeated: string[] = Array.from({ length: 8 }, () => phrases).flat();

function LoopSeparator() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 40"
      className="mx-6 h-8 w-14 shrink-0 text-[#8b6ff0] md:h-12 md:w-20"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M4 24 C 6 8, 26 6, 28 20 C 29 30, 18 32, 20 22 C 22 12, 40 12, 44 24 C 47 33, 60 30, 60 20" />
    </svg>
  );
}

export function ServicesMarquee() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-transparent py-6 md:py-10">
      <div className="overflow-hidden">
        <div className="od-marquee-track items-center">
          {repeated.map((phrase, index) => {
            const outlined = index % 2 === 1;
            return (
              <span key={index} className="flex items-center">
                <span
                  className="font-display px-2 text-[clamp(44px,8vw,112px)] font-semibold uppercase leading-none tracking-tight text-white"
                  style={
                    outlined
                      ? { color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.6)" }
                      : undefined
                  }
                >
                  {phrase}
                </span>
                <LoopSeparator />
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
