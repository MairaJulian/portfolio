# Portfolio de Maira Julián

Next.js + Tailwind CSS. Un solo archivo de contenido, sin base de datos.

## Probarlo en tu computadora

Necesitás Node.js 20 o más nuevo.

```bash
npm install
npm run dev
```

Abrí http://localhost:3000. Los cambios se ven al guardar.

## Qué editar

Todo el texto está en `content/site.ts`:

- `site`: nombre, correo, links de GitHub y LinkedIn, ruta del CV.
- `proyectos`: tus proyectos. Los tres que vienen son de ejemplo y muestran una etiqueta amarilla en la página. Reemplazalos y borrá la línea `ejemplo: true`.
- `servicios` y `proceso`: lo que ofrecés y cómo trabajás.
- `sobreMi`: bio, tecnologías y experiencia.

Archivos que tenés que sumar en la carpeta `public/`:

- `cv.pdf`: tu CV (el botón "Descargar CV" apunta ahí).
- `proyectos/nombre.png`: capturas de tus apps. Después poné `imagen: "/proyectos/nombre.png"` en el proyecto. Una captura vertical de celular queda mejor.

Los íconos del teléfono del inicio salen de cada proyecto (`icono`, `color`, `texto`). Los íconos disponibles están en `components/Glyph.tsx`.

## Publicarlo en Vercel

1. Subí esta carpeta a un repositorio de GitHub.
2. En vercel.com, elegí "Add New Project" e importá el repositorio. Los valores por defecto sirven.
3. Cuando tengas dominio, agregalo en Settings > Domains y seguí las instrucciones de tu proveedor de dominio.

## Formulario de contacto

El formulario abre el programa de correo de quien escribe con el mensaje ya armado (usa `mailto:`). Es simple y no necesita servidor. Si más adelante querés que los mensajes lleguen directo a tu bandeja sin abrir el correo, se puede conectar a un servicio como Formspree o Resend.
