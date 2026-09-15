"use client";

import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon, WhatsAppIcon } from "@/components/icons";

const NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Nosotros", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Portafolio", href: "#work" },
  { label: "Contacto", href: "#cta" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-[#160b33]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-5 md:px-10">
        <a href="#top" aria-label="NIUCOM" className="flex items-center">
          <img
            src="/images/niucom-logo.svg"
            alt="NIUCOM · Marketing y comunicación"
            className="h-12 w-auto md:h-14"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[17px] text-white/85 transition-colors hover:text-[#2f85c2]"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden items-center gap-2 rounded-full bg-[#2f85c2] hover:bg-[#3f97d1] px-6 py-3 text-[15px] font-medium text-white transition-transform hover:scale-105 sm:inline-flex"
          >
            Cotiza tu proyecto
            <WhatsAppIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label="Menú"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#160b33] px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-2">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-white/90 transition-colors hover:text-[#2f85c2]"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#2f85c2] hover:bg-[#3f97d1] px-6 py-3 text-sm font-medium text-white"
            >
              Cotiza tu proyecto
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
