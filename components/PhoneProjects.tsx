"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { proyectos } from "@/content/site";
import Glyph from "./Glyph";

const COLUMNAS = 4;

export default function PhoneProjects() {
  const [abierto, setAbierto] = useState<string | null>(null);

  useEffect(() => {
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(null);
    };
    window.addEventListener("keydown", alTeclear);
    return () => window.removeEventListener("keydown", alTeclear);
  }, []);

  const indiceActivo = proyectos.findIndex((p) => p.id === abierto);
  const activo = indiceActivo >= 0 ? proyectos[indiceActivo] : null;

  return (
    <div className="mx-auto w-full max-w-[300px] md:justify-self-center">
      <div className="phone rounded-[3rem] border-2 border-tinta bg-fucsia p-3 shadow-[8px_8px_0_0_var(--color-tinta)]">
        <div className="relative aspect-[9/18.5] overflow-hidden rounded-[2.2rem] border-2 border-tinta bg-white">
          {/* Muesca */}
          <div
            className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-tinta"
            aria-hidden="true"
          />

          {/* Pantalla de inicio */}
          <div
            className="absolute inset-0 flex flex-col px-5 pb-6 pt-14"
            inert={activo ? true : undefined}
          >
            <p className="text-sm font-semibold">Tocá una app para abrirla</p>

            <ul
              className="mt-6 grid gap-x-3 gap-y-5"
              style={{ gridTemplateColumns: `repeat(${COLUMNAS}, minmax(0, 1fr))` }}
            >
              {proyectos.map((p, i) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => setAbierto(p.id)}
                    aria-label={`Abrir ${p.nombre}`}
                    className="icon-pop group flex w-full flex-col items-center gap-1.5"
                    style={{ "--i": i } as CSSProperties}
                  >
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-tinta transition-transform group-hover:-translate-y-0.5 group-active:scale-95"
                      style={{ background: p.color, color: p.texto }}
                    >
                      <Glyph nombre={p.icono} className="h-6 w-6" />
                    </span>
                    <span className="text-xs font-semibold">{p.nombre}</span>
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  aria-label="Ir a contacto"
                  className="icon-pop group flex w-full flex-col items-center gap-1.5"
                  style={{ "--i": proyectos.length } as CSSProperties}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-tinta bg-tinta text-lienzo transition-transform group-hover:-translate-y-0.5 group-active:scale-95">
                    <Glyph nombre="mail" className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-semibold">Contacto</span>
                </a>
              </li>
            </ul>

            <div
              className="mx-auto mt-auto h-1.5 w-28 rounded-full bg-tinta"
              aria-hidden="true"
            />
          </div>

          {/* App abierta */}
          {activo && (
            <div
              key={activo.id}
              role="dialog"
              aria-label={activo.nombre}
              className="app-open absolute inset-0 z-10 flex flex-col px-6 pb-6 pt-14"
              style={{
                background: activo.color,
                color: activo.texto,
                transformOrigin: `${12.5 + (100 / COLUMNAS) * (indiceActivo % COLUMNAS)}% 22%`,
              }}
            >
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/25">
                <Glyph nombre={activo.icono} />
              </span>
              <h3 className="text-4xl font-extrabold leading-none tracking-tight">
                {activo.nombre}
              </h3>
              <p className="mt-3 text-base font-semibold">{activo.tipo}</p>
              <p className="mt-3 text-base leading-snug">{activo.resumen}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {activo.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border-2 border-current px-3 py-0.5 text-xs font-semibold"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-2">
                <a
                  href={`#proyecto-${activo.id}`}
                  onClick={() => setAbierto(null)}
                  className="rounded-full bg-white px-4 py-3 text-center text-base font-bold text-tinta"
                >
                  Ver el caso completo
                </a>
                <button
                  type="button"
                  onClick={() => setAbierto(null)}
                  className="rounded-full border-2 border-current px-4 py-3 text-base font-bold"
                >
                  Volver al inicio
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
