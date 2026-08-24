type Project = {
  name: string;
  category: string;
  image: string;
};

const projects: Project[] = [
  {
    name: "Studie Bijdehand",
    category: "Diseño web",
    image: "/images/project-studie-bijdehand.jpg",
  },
  {
    name: "Fondation Saint-Luc",
    category: "Diseño web · SEO",
    image: "/images/project-fondation-saint-luc.jpg",
  },
  {
    name: "Goshop Energy",
    category: "eCommerce",
    image: "/images/project-goshop-energy.jpg",
  },
  {
    name: "Bonne Maman",
    category: "Branding",
    image: "/images/project-bonne-maman.jpg",
  },
  {
    name: "Sakaya",
    category: "eCommerce",
    image: "/images/project-sakaya.jpg",
  },
  {
    name: "SMD",
    category: "Diseño web",
    image: "/images/project-smd.jpg",
  },
];

export function ProjectsShowcase() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <h2 className="font-display text-[40px] leading-none tracking-tight">
          Últimos proyectos
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href="#"
              className="group block rounded-2xl transition-transform duration-300 ease-out hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-2xl bg-[#151515]">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-5">
                <span className="text-[12px] font-medium uppercase tracking-wider text-[#72F5E3]">
                  {project.category}
                </span>
                <h3 className="font-display mt-1 text-[22px] leading-tight text-white">
                  {project.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
