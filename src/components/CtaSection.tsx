import { ArrowUpRightIcon } from "@/components/icons";

type ContactDetail = {
  label: string;
  value: string;
  href: string;
};

const contactDetails: ContactDetail[] = [
  {
    label: "Email",
    value: "niucom.ec@gmail.com",
    href: "mailto:niucom.ec@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "0987245860",
    href: "https://wa.me/593987245860",
  },
  {
    label: "Instagram",
    value: "@niucom.ec",
    href: "https://instagram.com/niucom.ec",
  },
];

export function CtaSection() {
  return (
    <section className="bg-transparent py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 md:p-14">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#3fd0e8]">
            Contáctanos
          </span>
          <h2 className="font-display mt-4 max-w-4xl text-[clamp(36px,6vw,64px)] font-bold leading-[1.02] tracking-tight text-white">
            ¿Listos para que tu marca destaque?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Cuéntanos tu idea y creamos juntos una solución a la medida de lo que
            tu marca realmente necesita.
          </p>

          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <a
              href="mailto:niucom.ec@gmail.com"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#3fd0e8] hover:bg-[#5cdcf0] px-8 py-4 font-medium text-[#0e0730] transition-transform duration-200 hover:scale-105"
            >
              Cotiza tu proyecto
              <ArrowUpRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <ul className="flex flex-col gap-3">
              {contactDetails.map((detail) => (
                <li key={detail.label}>
                  <a
                    href={detail.href}
                    className="group inline-flex items-baseline gap-3 text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    <span className="text-[12px] uppercase tracking-wider text-white/40">
                      {detail.label}
                    </span>
                    <span className="text-[15px]">{detail.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
