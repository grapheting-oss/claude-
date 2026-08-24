# design.odoo.com — Clone Research Notes

**Site:** Odoo's web-design showcase. Built on **Odoo CMS** with **GSAP** scroll animations.
Dark theme, vibrant accents. Heavy scroll-driven experience (docHeight pinned).

## Design tokens
- Background `#000` · text `#fff`
- Accents: lavender `#D5BFF0`, mint `#72F5E3`, lime `#E7FE56`
- Dark surfaces `#151515`, `#373737`
- Fonts (self-hosted from odoo): **Obviously** (display, regular/medium/semibold) + **Inter** (body).

## Section topology
1. Hero — "Creamos tu sitio web con Odoo" + lime squiggle underline + lavender "Presupuesto" pill + green glow. Logo "odoo web design", hamburger nav.
2. Últimos proyectos — 6 project cards (Studie Bijdehand, Fondation Saint-Luc, Goshop Energy, Bonne Maman, Sakaya, SMD) with colored category pills + "Descubrir más".
3. Services marquee — "Nuestros servicios ✦ Lo que hacemos" scrolling.
4. Services — numbered 01–05 (Diseño web, Diseño de logo, Fotografía, SEO, Marketing), hover-video previews.
5. Testimonials — "La voz de nuestros clientes", 3-col cards w/ avatars (Cefora, Fondation, Materrup, Aerospacelab, Delacroix, Caromela).
6. References — client logos (Televie, Fondation, Dreambaby, Cefora, Flowup, Maison Dandoy).
7. Trust — "Tu sitio web está en buenas manos".
8. CTA — "Obtenga un presupuesto instantáneo" + lime button.
9. FAQ — 6 questions accordion.
10. Footer — "¿Estás listo para crear tu sitio web usando Odoo?" + Navegación/Servicios/Oficinas + social.

## Fidelity notes
- Obviously font is the real self-hosted file. Hero matches (squiggle, glow, purple CTA, hamburger).
- The site's GSAP scroll-pinned animations, hover-video service previews, and auto-scroll are
  approximated statically (CSS marquee, hover states, accordion). Project cards simplified vs the
  original's timer/multi-pill/description layout.
