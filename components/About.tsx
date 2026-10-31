import { site, sobreMi } from "@/content/site";

export default function About() {
  return (
    <section id="sobre-mi" className="border-t-2 border-tinta py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 md:grid-cols-[1fr_1.2fr] md:gap-20">
        <div>
          <h2 className="section-title">Sobre mí</h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed">{sobreMi.bio}</p>
          <a href={site.cv} className="btn btn-secondary mt-8">
            Descargar CV
          </a>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">Tecnologías</h3>
            <dl className="mt-5 space-y-5">
              {sobreMi.habilidades.map((g) => (
                <div key={g.grupo}>
                  <dt className="font-bold">{g.grupo}</dt>
                  <dd>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <li key={item} className="chip">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">Experiencia</h3>
            <ul className="mt-5 space-y-8">
              {sobreMi.experiencia.map((e) => (
                <li key={e.puesto + e.lugar} className="border-l-4 border-fucsia pl-5">
                  {e.ejemplo && (
                    <p className="mb-2 inline-block rounded-full bg-sol px-3 py-1 text-sm font-bold">
                      Ejemplo: completalo con tus datos
                    </p>
                  )}
                  <p className="text-xl font-bold">{e.puesto}</p>
                  <p className="font-semibold">
                    {e.lugar}, {e.periodo}
                  </p>
                  <p className="mt-2 max-w-[52ch] text-lg leading-relaxed">{e.detalle}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
