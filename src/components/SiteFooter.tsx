import { ArrowUpRightIcon } from "@/components/icons";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

const columns: FooterColumn[] = [
  {
    heading: "Navegación",
    links: [
      { label: "Inicio", href: "#top" },
      { label: "Nosotros", href: "#about" },
      { label: "Servicios", href: "#services" },
      { label: "Portafolio", href: "#work" },
      { label: "Contacto", href: "#cta" },
    ],
  },
  {
    heading: "Servicios",
    links: [
      { label: "Marketing estratégico", href: "#services" },
      { label: "Gestión de redes", href: "#services" },
      { label: "Pauta y campañas", href: "#services" },
      { label: "Diseño web", href: "#services" },
      { label: "Producción audiovisual", href: "#services" },
      { label: "Branding", href: "#services" },
    ],
  },
  {
    heading: "Contacto",
    links: [
      { label: "niucom.ec@gmail.com", href: "mailto:niucom.ec@gmail.com" },
      { label: "0987245860", href: "https://wa.me/593987245860" },
      { label: "@niucom.ec", href: "https://instagram.com/niucom.ec" },
      { label: "Ecuador", href: "#" },
    ],
  },
  {
    heading: "Síguenos",
    links: [
      { label: "Instagram", href: "https://instagram.com/niucom.ec" },
      { label: "WhatsApp", href: "https://wa.me/593987245860" },
      { label: "TikTok", href: "https://tiktok.com/@niucom.ec" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#153f66] text-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="overflow-hidden rounded-t-[2.5rem] bg-[#0f3a5e] px-6 pb-10 pt-20 md:px-12">
          {/* CTA */}
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="font-display max-w-3xl text-[clamp(34px,6vw,68px)] font-bold leading-[1.02] tracking-tight text-white">
              ¿Estás listo para hacer crecer tu marca?
            </h2>
            <a
              href="#cta"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#2f85c2] py-3 pl-8 pr-3 text-[16px] font-semibold text-white transition-colors hover:bg-[#3f97d1]"
            >
              Cotiza tu proyecto
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRightIcon aria-hidden="true" className="h-4 w-4" />
              </span>
            </a>
          </div>

          {/* divider */}
          <div className="mt-14 h-px w-full bg-white/12" />

          {/* Columns */}
          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {columns.map((column) => (
              <div key={column.heading}>
                <h3 className="font-display mb-6 text-[22px] font-bold tracking-tight text-white">
                  {column.heading}
                </h3>
                <ul className="flex flex-col gap-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[15px] text-white/65 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Big logo */}
          <div className="mt-20">
            <img
              src="/images/niucom-logo.svg"
              alt="NIUCOM"
              className="h-14 w-auto md:h-16 lg:h-20"
            />
            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
              <p className="text-[13px] text-white/45">
                © 2026 NIUCOM · Agencia de Marketing y Comunicación
              </p>
              <p className="text-[13px] text-[#7fb2e6]">
                Conectamos creatividad con propósito
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
