"use client";

import { useState } from "react";
import { MenuIcon, CloseIcon, ArrowUpRightIcon } from "@/components/icons";

const NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Sobre nosotros", href: "#" },
  { label: "Proyectos", href: "#projects" },
  { label: "Servicios", href: "#services" },
  { label: "Contact", href: "#" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-5 md:px-10">
        <a href="#top" aria-label="Odoo web design" className="leading-none">
          <span className="block font-display text-2xl font-semibold lowercase tracking-tight text-white">
            odoo
          </span>
          <span className="-mt-1 block text-sm italic text-white/80">
            web design
          </span>
        </a>

        <button
          type="button"
          aria-label="Menú"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-5 rounded-3xl border border-white/10 bg-[#151515] p-6 md:mx-10">
          <nav className="flex flex-col gap-2">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-white/90 transition-colors hover:text-[#E7FE56]"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#D5BFF0] px-6 py-3 text-sm font-medium text-black"
            >
              Presupuesto
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
