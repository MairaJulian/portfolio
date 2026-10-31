import { site } from "@/content/site";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contacto" className="border-t-2 border-tinta bg-sol py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div>
          <h2 className="section-title">Contacto</h2>
          <p className="mt-6 max-w-[40ch] text-lg leading-relaxed">
            Contame qué necesitás o de qué puesto se trata. Te respondo por correo.
          </p>
          <ul className="mt-8 space-y-2 text-lg font-semibold">
            <li>
              <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-fucsia">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.linkedin} className="underline underline-offset-4 hover:text-fucsia">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.github} className="underline underline-offset-4 hover:text-fucsia">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
