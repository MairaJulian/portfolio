import { site } from "@/content/site";

const enlaces = [
  { href: "#proyectos", texto: "Proyectos" },
  { href: "#servicios", texto: "Servicios" },
  { href: "#sobre-mi", texto: "Sobre mí" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b-2 border-tinta bg-lienzo">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#inicio" className="text-lg font-extrabold tracking-tight">
          {site.nombre}
        </a>
        <nav aria-label="Principal" className="flex items-center gap-6">
          {enlaces.map((e) => (
            <a
              key={e.href}
              href={e.href}
              className="hidden font-semibold hover:text-fucsia sm:inline"
            >
              {e.texto}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-tinta px-4 py-2 text-sm font-bold text-lienzo hover:bg-fucsia"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
