import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t-2 border-tinta py-8">
      <div className="mx-auto max-w-6xl px-5 font-semibold sm:px-8">
        © {new Date().getFullYear()} {site.nombre}
      </div>
    </footer>
  );
}
