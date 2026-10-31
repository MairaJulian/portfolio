import { proyectos } from "@/content/site";
import type { Proyecto } from "@/content/site";

function Maqueta({ p }: { p: Proyecto }) {
  return (
    <div
      className="relative flex aspect-[4/3] items-end justify-center overflow-hidden rounded-[2rem] border-2 border-tinta shadow-[8px_8px_0_0_var(--color-tinta)]"
      style={{ background: p.color }}
    >
      <div className="h-[86%] w-[46%] min-w-[150px] overflow-hidden rounded-t-[1.75rem] border-2 border-b-0 border-tinta bg-white">
        {p.imagen ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={p.imagen}
            alt={`Captura de ${p.nombre}`}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full flex-col gap-3 p-4" aria-hidden="true">
            <div className="h-3 w-1/2 rounded-full bg-tinta" />
            {[0, 1, 2].map((n) => (
              <div key={n} className="flex items-center gap-2">
                <span
                  className="h-8 w-8 shrink-0 rounded-xl border-2 border-tinta"
                  style={{ background: p.color }}
                />
                <span className="flex flex-1 flex-col gap-1.5">
                  <span className="h-2 w-full rounded-full bg-tinta/80" />
                  <span className="h-2 w-2/3 rounded-full bg-tinta/30" />
                </span>
              </div>
            ))}
            <div
              className="mt-auto mb-4 h-9 rounded-full border-2 border-tinta"
              style={{ background: p.color }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="border-t-2 border-tinta py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="section-title">Proyectos</h2>
        <p className="mt-5 max-w-[52ch] text-lg leading-relaxed">
          Lo que construí: qué problema había, qué hice y con qué tecnologías.
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-24 px-5 sm:px-8">
        {proyectos.map((p, i) => (
          <article
            key={p.id}
            id={`proyecto-${p.id}`}
            className="grid scroll-mt-24 items-center gap-10 md:grid-cols-2 md:gap-16"
          >
            <div className={i % 2 === 1 ? "md:order-2" : undefined}>
              <Maqueta p={p} />
            </div>

            <div>
              {p.ejemplo && (
                <p className="mb-4 inline-block rounded-full bg-sol px-3 py-1 text-sm font-bold">
                  Ejemplo: reemplazalo por tu proyecto
                </p>
              )}
              <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                {p.nombre}
              </h3>
              <p className="mt-2 text-lg font-semibold">{p.tipo}</p>

              <dl className="mt-6 max-w-[52ch] space-y-5 text-lg leading-relaxed">
                <div>
                  <dt className="font-bold">El problema</dt>
                  <dd>{p.problema}</dd>
                </div>
                <div>
                  <dt className="font-bold">Lo que hice</dt>
                  <dd>{p.solucion}</dd>
                </div>
                <div>
                  <dt className="font-bold">Mi rol</dt>
                  <dd>{p.rol}</dd>
                </div>
              </dl>

              <ul className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>

              {(p.demo || p.codigo) && (
                <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
                  {p.demo && (
                    <a href={p.demo} className="underline underline-offset-4 hover:text-fucsia">
                      Ver demo
                    </a>
                  )}
                  {p.codigo && (
                    <a href={p.codigo} className="underline underline-offset-4 hover:text-fucsia">
                      Ver código
                    </a>
                  )}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
