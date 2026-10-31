"use client";

import { useState } from "react";
import { site } from "@/content/site";

const campo =
  "mt-1 w-full rounded-2xl border-2 border-tinta bg-white px-4 py-3 text-lg";

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  function alEnviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const datos = new FormData(e.currentTarget);
    const nombre = String(datos.get("nombre") ?? "");
    const correo = String(datos.get("correo") ?? "");
    const mensaje = String(datos.get("mensaje") ?? "");

    const asunto = `Mensaje desde tu portfolio: ${nombre}`;
    const cuerpo = `${mensaje}\n\n${nombre}\n${correo}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      asunto
    )}&body=${encodeURIComponent(cuerpo)}`;
    setEnviado(true);
  }

  return (
    <form onSubmit={alEnviar} className="space-y-5">
      <div>
        <label htmlFor="nombre" className="font-bold">
          Nombre
        </label>
        <input id="nombre" name="nombre" type="text" required autoComplete="name" className={campo} />
      </div>
      <div>
        <label htmlFor="correo" className="font-bold">
          Correo
        </label>
        <input id="correo" name="correo" type="email" required autoComplete="email" className={campo} />
      </div>
      <div>
        <label htmlFor="mensaje" className="font-bold">
          Mensaje
        </label>
        <textarea id="mensaje" name="mensaje" rows={5} required className={campo} />
      </div>
      <button type="submit" className="btn btn-oscuro">
        Enviar mensaje
      </button>
      {enviado && (
        <p role="status" className="max-w-[52ch] text-lg font-semibold leading-snug">
          Se abrió tu programa de correo con el mensaje listo. Si no se abrió,
          escribime a {site.email}.
        </p>
      )}
    </form>
  );
}
