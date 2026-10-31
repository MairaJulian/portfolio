import { proceso, servicios } from "@/content/site";

export default function Services() {
  return (
    <section
      id="servicios"
      className="sobre-tinta border-t-2 border-tinta bg-tinta py-20 text-lienzo sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="section-title">Servicios</h2>
        <p className="mt-5 max-w-[52ch] text-lg leading-relaxed">
          Para quienes necesitan una app, una web o quitarse tareas repetitivas de encima.
        </p>

        <div className="mt-14">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="grid gap-3 border-t-2 border-lienzo/30 py-8 md:grid-cols-[1fr_1.4fr] md:gap-12"
            >
              <h3 className="text-3xl font-extrabold tracking-tight">{s.titulo}</h3>
              <p className="max-w-[52ch] text-lg leading-relaxed">{s.texto}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-20 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Cómo trabajo
        </h3>
        <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {proceso.map((paso, i) => (
            <li key={paso.titulo}>
              <span className="block text-6xl font-extrabold leading-none text-sol">
                {i + 1}
              </span>
              <h4 className="mt-4 text-xl font-bold">{paso.titulo}</h4>
              <p className="mt-2 text-lg leading-relaxed">{paso.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
