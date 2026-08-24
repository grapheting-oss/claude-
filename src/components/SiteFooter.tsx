import { ArrowUpRightIcon } from "@/components/icons";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

const columns: FooterColumn[] = [
  {
    heading: "Navegación",
    links: [
      { label: "Inicio", href: "#" },
      { label: "Sobre nosotros", href: "#" },
      { label: "Proyectos", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Servicios",
    links: [
      { label: "Diseño web", href: "#" },
      { label: "Diseño de logos", href: "#" },
      { label: "Fotografía", href: "#" },
      { label: "SEO", href: "#" },
      { label: "Marketing", href: "#" },
    ],
  },
  {
    heading: "Oficinas",
    links: [
      { label: "Bélgica", href: "#" },
      { label: "Buffalo", href: "#" },
      { label: "Dubái", href: "#" },
      { label: "Gujarat", href: "#" },
    ],
  },
];

const socials: SocialLink[] = [
  { label: "Behance", href: "#", icon: "/images/social-behance.svg" },
  { label: "Dribbble", href: "#", icon: "/images/social-dribbble.svg" },
  { label: "Instagram", href: "#", icon: "/images/social-instagram.svg" },
  { label: "YouTube", href: "#", icon: "/images/social-youtube.svg" },
];

const legalLinks: FooterLink[] = [
  { label: "Política de privacidad", href: "#" },
  { label: "Términos y condiciones", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="rounded-t-[2.5rem] bg-[#151515] px-6 pb-10 pt-20 md:px-12">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display max-w-3xl text-[clamp(40px,7vw,80px)] font-bold leading-[0.98] tracking-tight text-white">
              ¿Estás listo para crear tu sitio web usando Odoo?
            </h2>
            <a
              href="#"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#E7FE56] px-7 py-4 text-[15px] font-semibold text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              Solicitar presupuesto
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
              <img
                src="/images/odoo-horizontal.svg"
                alt="Odoo"
                className="h-6 w-auto brightness-200"
              />
              <div className="mt-6 flex items-center gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-white/70 transition-opacity duration-200 hover:opacity-70"
                  >
                    <img
                      src={social.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-6 w-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-[12px] text-white/40">
              © 2026 Odoo. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-[12px] text-white/40">
              {legalLinks.map((link, index) => (
                <span key={link.label} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true">·</span>}
                  <a
                    href={link.href}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
