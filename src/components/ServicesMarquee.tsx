const phrases: string[] = ["Nuestros servicios", "Lo que hacemos"];

// Duplicate the group several times so the loop reads as seamless and the
// track is always wider than the viewport.
const repeated: string[] = Array.from({ length: 8 }, () => phrases).flat();

export function ServicesMarquee() {
  return (
    <section className="border-y border-white/10 bg-black py-8">
      <div className="overflow-hidden">
        <div className="od-marquee-track items-center">
          {repeated.map((phrase, index) => (
            <span key={index} className="flex items-center">
              <span className="font-display px-6 text-[40px] uppercase leading-none tracking-tight text-white">
                {phrase}
              </span>
              <span
                aria-hidden="true"
                className="px-6 text-[40px] leading-none text-[#E7FE56]"
              >
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
