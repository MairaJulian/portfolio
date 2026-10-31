import { site } from "@/content/site";
import PhoneProjects from "./PhoneProjects";

export default function Hero() {
  const [nombre, ...resto] = site.nombre.split(" ");
  const apellido = resto.join(" ");

  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-12 sm:px-8 md:grid-cols-[1.25fr_1fr] md:pb-28 md:pt-20"
    >
      <div>
        <h1 className="text-[22vw] font-extrabold leading-[0.82] tracking-[-0.05em] md:text-[10.5vw] xl:text-[9.5rem]">
          {nombre}
          <br />
          {apellido}
        </h1>
        <p className="mt-8 max-w-[30ch] text-2xl font-bold leading-snug">
          {site.rol}
        </p>
        <p className="mt-4 max-w-[52ch] text-lg leading-relaxed">{site.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#proyectos" className="btn btn-primary">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn btn-secondary">
            Contactame
          </a>
        </div>
        <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
          <a href={site.github} className="underline underline-offset-4 hover:text-fucsia">
            GitHub
          </a>
          <a href={site.linkedin} className="underline underline-offset-4 hover:text-fucsia">
            LinkedIn
          </a>
          <a href={site.cv} className="underline underline-offset-4 hover:text-fucsia">
            Descargar CV
          </a>
        </p>
      </div>

      <PhoneProjects />
    </section>
  );
}
