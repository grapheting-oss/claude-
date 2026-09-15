"use client";

import { useState } from "react";

type Member = {
  first: string;
  last: string;
  role: string;
  photo: string;
  bio: string;
};

const TEAM: Member[] = [
  {
    first: "Valeria",
    last: "Armijos",
    role: "CEO · Fundadora de NIUCOM",
    photo: "/images/valeria.png",
    bio: "Soy una apasionada de la comunicación estratégica, el marketing y la creación de experiencias que conectan marcas con personas. Como fundadora y CEO de NIUCOM, lidero una agencia especializada en desarrollar estrategias de marketing y comunicación que impulsan el crecimiento de empresas, emprendimientos e instituciones a través de soluciones creativas e innovadoras.",
  },
  {
    first: "Alyson",
    last: "Sánchez",
    role: "Diseñadora Gráfica Multimedia",
    photo: "/images/alyson.png",
    bio: "Soy una diseñadora gráfica apasionada por la comunicación visual, la creatividad y el desarrollo de marcas con propósito. En NIUCOM formo parte de un equipo que transforma ideas en soluciones visuales estratégicas, creando identidades, piezas gráficas y contenido que fortalecen la conexión entre las marcas y su audiencia. Creo en el diseño como una herramienta capaz de comunicar, inspirar y generar resultados.",
  },
];

export function FounderSection() {
  return (
    <section className="bg-transparent pb-20 pt-4 md:pb-28 md:pt-8">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="max-w-2xl">
          <span className="font-display text-[13px] font-semibold uppercase tracking-[0.28em] text-[#7fb2e6]">
            Nuestro equipo
          </span>
          <h2 className="font-display mt-3 text-[clamp(32px,5vw,52px)] font-bold leading-[1.02] tracking-tight text-white">
            Las mentes detrás de NIUCOM
          </h2>
        </div>

        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-10 lg:gap-16">
          {TEAM.map((member) => (
            <TeamCard key={member.first} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: Member }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Photo in a framed purple card */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 top-16 rounded-[2rem] bg-gradient-to-br from-[#5b46b8] via-[#46329e] to-[#2f2080] shadow-[0_35px_90px_-25px_rgba(47,32,128,0.85)]"
        />
        <img
          src={member.photo}
          alt={`${member.first} ${member.last}`}
          className="relative z-10 mx-auto block max-h-[460px] w-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <h3 className="font-display mt-7 text-[clamp(28px,3.4vw,44px)] font-bold uppercase leading-[0.95] tracking-tight text-white">
        {member.first} {member.last}
      </h3>
      <p className="mt-2 text-[15px] font-semibold uppercase tracking-wide text-[#bcd8ee]">
        {member.role}
      </p>

      {/* Collapsible bio */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/25 py-2.5 pl-5 pr-4 text-[14px] font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
      >
        {open ? "Ver menos" : "Ver biografía"}
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          open ? "mt-5 max-h-[460px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="max-w-xl text-[15px] leading-relaxed text-white/70">
          {member.bio}
        </p>
      </div>
    </div>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
