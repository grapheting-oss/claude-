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
      { label: "Inicio", href: "#" },
      { label: "Nosotros", href: "#" },
      { label: "Servicios", href: "#" },
      { label: "Portafolio", href: "#" },
      { label: "Contacto", href: "#" },
    ],
  },
  {
    heading: "Servicios",
    links: [
      { label: "Marketing estratégico", href: "#" },
      { label: "Gestión de redes", href: "#" },
      { label: "Diseño web", href: "#" },
      { label: "Producción audiovisual", href: "#" },
      { label: "Branding", href: "#" },
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
];

const socialLinks: FooterLink[] = [
  { label: "Instagram", href: "https://instagram.com/niucom.ec" },
  { label: "WhatsApp", href: "https://wa.me/593987245860" },
];

export function SiteFooter() {
  return (
    <footer className="bg-transparent text-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="rounded-t-[2.5rem] bg-[#1e1150] px-6 pb-10 pt-20 md:px-12">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display max-w-3xl text-[clamp(36px,7vw,72px)] font-bold leading-[0.98] tracking-tight text-white">
              ¿Estás listo para hacer crecer tu marca?
            </h2>
            <a
              href="mailto:niucom.ec@gmail.com"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#3fd0e8] hover:bg-[#5cdcf0] px-7 py-4 text-[15px] font-semibold text-[#0e0730] transition-transform duration-300 hover:scale-[1.03]"
            >
              Cotiza tu proyecto
              <ArrowUpRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {columns.map((column) => (
              <div key={column.heading}>
                <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-white/40">
                  {column.heading}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[14px] text-white/70 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                NIUCOM
              </span>
              <p className="mt-3 text-[14px] text-white/70">
                Marketing y comunicación
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-[14px] text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-[12px] text-white/40">
              © 2026 NIUCOM · Agencia de Marketing y Comunicación
            </p>
            <p className="text-[12px] text-[#3fd0e8]/60">
              Conectamos creatividad con propósito
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
