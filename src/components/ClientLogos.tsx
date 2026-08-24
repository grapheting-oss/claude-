interface ClientLogo {
  src: string;
  alt: string;
}

const logos: ClientLogo[] = [
  { src: "/images/client-televie.png", alt: "Télévie" },
  { src: "/images/client-fondation.png", alt: "Fondation" },
  { src: "/images/client-dreambaby.png", alt: "Dreambaby" },
  { src: "/images/client-cefora.png", alt: "Cefora" },
  { src: "/images/client-flowup.png", alt: "FlowUp" },
  { src: "/images/client-maisondandoy.png", alt: "Maison Dandoy" },
];

export function ClientLogos() {
  return (
    <section className="bg-black py-14">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:justify-between">
          {logos.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-8 w-auto opacity-70 grayscale contrast-0 brightness-200 transition-opacity duration-300 hover:opacity-100 md:h-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
