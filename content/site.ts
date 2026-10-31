// Todo el contenido del sitio vive en este archivo.
// Cambiá los textos acá y el sitio se actualiza solo.
// Los elementos con `ejemplo: true` muestran una etiqueta amarilla en la página:
// reemplazalos por tus datos reales y borrá esa línea.

export type NombreIcono = "calendar" | "wallet" | "spark" | "mail";

export type Proyecto = {
  id: string; // se usa en el link interno (#proyecto-<id>)
  nombre: string; // corto: aparece como nombre del ícono en el teléfono
  tipo: string;
  resumen: string;
  problema: string;
  solucion: string;
  rol: string;
  stack: string[];
  color: string; // color de fondo del ícono y del panel
  texto: string; // color de texto legible sobre `color`
  icono: NombreIcono;
  imagen?: string; // ej: "/proyectos/reservas.png" (archivo dentro de /public)
  demo?: string;
  codigo?: string;
  ejemplo?: boolean;
};

export const site = {
  nombre: "Maira Julián",
  rol: "Desarrolladora de apps móviles y webs",
  descripcion:
    "Portfolio de Maira Julián: apps con React Native, sitios web a medida y automatizaciones con IA.",
  intro:
    "Desarrollo apps con React Native y sitios web a medida. También conecto herramientas y sumo IA para automatizar tareas repetitivas.",
  email: "tu@correo.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://www.linkedin.com/in/tu-usuario",
  cv: "/cv.pdf", // poné tu CV en la carpeta /public con este nombre
};

export const proyectos: Proyecto[] = [
  {
    id: "reservas",
    nombre: "Reservas",
    tipo: "App móvil",
    resumen: "App para reservar turnos y recibir recordatorios.",
    problema:
      "Un estudio organizaba los turnos por mensajes y los horarios se pisaban.",
    solucion:
      "Una app donde cada persona ve los horarios libres, reserva y recibe un recordatorio. El estudio ve la agenda del día.",
    rol: "Diseño de pantallas y desarrollo completo.",
    stack: ["React Native", "TypeScript", "Firebase"],
    color: "#D81B60",
    texto: "#FFFFFF",
    icono: "calendar",
    ejemplo: true,
  },
  {
    id: "gastos",
    nombre: "Gastos",
    tipo: "App móvil",
    resumen: "App para dividir gastos entre amigos o en casa.",
    problema:
      "Dividir gastos en un grupo termina en planillas que nadie revisa.",
    solucion:
      "Cada integrante carga un gasto y la app calcula quién le debe a quién.",
    rol: "Desarrollo de la app y de la lógica de cuentas.",
    stack: ["React Native", "TypeScript", "SQLite"],
    color: "#2FCB9E",
    texto: "#20204A",
    icono: "wallet",
    ejemplo: true,
  },
  {
    id: "evento",
    nombre: "Evento",
    tipo: "Sitio web",
    resumen: "Landing con inscripción por formulario.",
    problema:
      "Un organizador recibía las inscripciones en mensajes sueltos.",
    solucion:
      "Una landing rápida con formulario de inscripción y confirmación por correo.",
    rol: "Diseño y desarrollo (trabajo freelance).",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    color: "#FFC857",
    texto: "#20204A",
    icono: "spark",
    ejemplo: true,
  },
];

export const servicios = [
  {
    titulo: "Apps móviles",
    texto:
      "Desde la idea hasta las tiendas: diseño de pantallas, desarrollo con React Native y publicación en App Store y Google Play.",
  },
  {
    titulo: "Webs y landings a medida",
    texto:
      "Sitios rápidos que se ven bien en el celular, con formularios de contacto o inscripción y dominio propio.",
  },
  {
    titulo: "Automatización e integraciones con IA",
    texto:
      "Conecto tus herramientas y sumo IA para ahorrarte tareas repetitivas: respuestas, reportes, carga de datos.",
  },
];

export const proceso = [
  {
    titulo: "Conversamos",
    texto: "Me contás qué necesitás y para quién. Te hago las preguntas que faltan.",
  },
  {
    titulo: "Presupuesto claro",
    texto: "Recibís alcance, plazos y precio por escrito antes de empezar.",
  },
  {
    titulo: "Desarrollo con entregas",
    texto: "Vas viendo avances en el camino, no recién al final.",
  },
  {
    titulo: "Entrega y ajustes",
    texto: "Dejo todo publicado y funcionando, y ajustamos lo que haga falta.",
  },
];

export const sobreMi = {
  bio: "Desarrollo aplicaciones móviles con React Native y TypeScript, y también sitios web. Me importa que lo que construyo sea claro de usar y fácil de mantener. Trabajo en equipo en relación de dependencia y también con clientes que necesitan una app o una web a medida.",
  habilidades: [
    { grupo: "Móvil", items: ["React Native"] },
    { grupo: "Lenguajes", items: ["TypeScript", "JavaScript"] },
    { grupo: "Web", items: ["React", "Next.js", "Tailwind CSS"] },
    { grupo: "Herramientas", items: ["Git", "GitHub"] },
  ],
  experiencia: [
    {
      puesto: "Desarrolladora móvil",
      lugar: "Nombre de la empresa",
      periodo: "Desde 20XX",
      detalle:
        "Apps con React Native y TypeScript. Contá acá un logro concreto: qué construiste y qué mejoró.",
      ejemplo: true,
    },
  ],
};
