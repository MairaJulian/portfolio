// Todo el contenido del sitio vive en este archivo.
// Cambiá los textos acá y el sitio se actualiza solo.
// Los elementos con `ejemplo: true` muestran una etiqueta amarilla en la página:
// usala para marcar lo que todavía es de relleno y borrala cuando lo completes.

export type NombreIcono = "calendar" | "wallet" | "spark" | "mail" | "cart" | "flag";

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
  imagen?: string; // ej: "/proyectos/changuito.png" (archivo dentro de /public)
  demo?: string;
  codigo?: string;
  ejemplo?: boolean;
};

export type Experiencia = {
  puesto: string;
  lugar: string;
  periodo: string;
  detalle: string;
  ejemplo?: boolean;
};

export const site = {
  nombre: "Maira Julián",
  rol: "Desarrolladora de apps móviles y webs",
  descripcion:
    "Portfolio de Maira Julián: apps con React Native, sitios web a medida y automatizaciones con IA.",
  intro:
    "Desarrollo apps con React Native y sitios web a medida. También conecto herramientas y sumo IA para automatizar tareas repetitivas.",
  email: "mairabetianajulianbarros@gmail.com",
  github: "https://github.com/MairaJulian",
  linkedin: "https://www.linkedin.com/in/tu-usuario", // pendiente: poné tu link real
  cv: "/cv.pdf", // poné tu CV en la carpeta /public con este nombre
};

export const proyectos: Proyecto[] = [
  {
    id: "changuito",
    nombre: "Changuito",
    tipo: "App Android",
    resumen: "Lista de compras compartida que se actualiza en tiempo real.",
    problema:
      "En un hogar, la lista de compras suele repartirse en mensajes sueltos y cada uno compra por su cuenta.",
    solucion:
      "Una app donde las personas de un mismo hogar comparten listas y las editan entre todas. Los cambios se ven al instante en el teléfono de cada una.",
    rol: "Producto, diseño de pantallas y desarrollo completo.",
    stack: ["React Native", "Expo", "TypeScript", "Firebase"],
    color: "#2FCB9E",
    texto: "#20204A",
    icono: "cart",
    codigo: "https://github.com/MairaJulian/lista-de-compras",
  },
  {
    id: "vuelta-rapida",
    nombre: "Vuelta Rápida",
    tipo: "Juego Android",
    resumen: "Juego de carreras de monoplazas con vista desde arriba.",
    problema:
      "Quería un juego de carreras propio, apto para chicos, inspirado en la F1 pero sin marcas, equipos ni pilotos reales.",
    solucion:
      "Un juego en 2D con vista desde arriba, con vibración y sonido, perfiles de jugador, récords y ranking. Los efectos y el motor del juego los armé con Skia y Reanimated.",
    rol: "Diseño del juego y desarrollo completo.",
    stack: ["React Native", "Expo", "TypeScript", "Skia", "Reanimated"],
    color: "#D81B60",
    texto: "#FFFFFF",
    icono: "flag",
    codigo: "https://github.com/MairaJulian/vuelta-rapida",
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

export const sobreMi: {
  bio: string;
  habilidades: { grupo: string; items: string[] }[];
  experiencia: Experiencia[];
} = {
  bio: "Desarrollo aplicaciones móviles con React Native y TypeScript. Hace un año y medio que trabajo en el equipo de app de una empresa, en una aplicación que gestiona sistemas de riego. Fuera del trabajo hago proyectos propios y estoy sumando trabajos freelance de apps, sitios web y automatizaciones. Me importa que lo que construyo sea claro de usar y fácil de mantener.",
  habilidades: [
    { grupo: "Móvil", items: ["React Native", "Expo"] },
    { grupo: "Lenguajes", items: ["TypeScript", "JavaScript"] },
    { grupo: "Web", items: ["React", "Next.js", "Tailwind CSS"] },
    { grupo: "Gráficos y animación", items: ["React Native Skia", "Reanimated"] },
    { grupo: "Datos", items: ["Firebase", "SQLite"] },
    { grupo: "Calidad", items: ["Jest", "ESLint", "Prettier"] },
    { grupo: "Herramientas", items: ["Git", "GitHub", "Claude Code"] },
  ],
  experiencia: [
    {
      puesto: "Desarrolladora de app móvil",
      lugar: "Equipo de app",
      periodo: "Desde 2025",
      detalle:
        "Desarrollo de una aplicación que gestiona sistemas de riego, con React Native y TypeScript.",
    },
  ],
};
