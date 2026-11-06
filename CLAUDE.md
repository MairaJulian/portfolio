# Portfolio · Guía para Claude Code

Portfolio personal de Maira. Sitio web personal para conseguir trabajo en relación de dependencia y clientes freelance. Repo: `portfolio`. Publicado en https://mairajulian.netlify.app/ (sin dominio propio por ahora). Proyecto personal de Maira.

## Antes de hacer cualquier cosa, leé

1. `README.md`.
2. `content/site.ts`: todo el contenido del sitio vive ahí. Maira indica en cada pedido cuál es el paso en curso.

## Stack

- Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, fuente Bricolage Grotesque con `next/font`. Sitio estático. Hosting: Netlify (plan gratuito).
- Estructura: `app/` (páginas y estilos globales), `components/` (secciones y piezas de UI), `content/site.ts` (textos y datos), `public/` (imágenes de proyectos en `public/proyectos/` y `cv.pdf`).

## Convenciones

- Los textos que ve la gente en el sitio van en **español** (voseo rioplatense, como el resto del sitio).
- El código va en **inglés**: variables, funciones, componentes, tipos, nombres de archivos y de ramas. Parte del código existente tiene nombres en español (`proyectos`, `sobreMi`, `Proyecto`, etc.): no lo renombres de paso en otra PR; si hace falta migrarlo, va en una PR aparte y solo de renombrado.
- Colores, tipografías y medidas: tokens de Tailwind en `app/globals.css`. Contenido editable: `content/site.ts`. Ese archivo usa saltos de línea CRLF: no los cambies.
- Los elementos de relleno se marcan con `ejemplo: true` para que el sitio muestre la etiqueta amarilla; no los presentes como trabajos reales.
- Imágenes de proyectos en `public/proyectos/`. El CV es `public/cv.pdf` y lo exporta Maira desde su diseño: no lo regeneres.

## Cómo trabajar (importante)

- **Identidad de git:** antes del primer commit de cada sesión, verificá que `git config user.email` sea `mairabetianajulianbarros@gmail.com` y que `git remote -v` apunte a `git@github.com:MairaJulian/portfolio.git`. Si no coincide, **frená y avisá**. No modifiques la configuración global de git. Trabajá solo dentro de esta carpeta.
- **Nunca pushees a `main`.** Una rama y una PR por paso: `tipo/descripcion-corta` (por ejemplo `feat/contact-form`, `fix/cv-link`, `docs/claude-md`). Maira revisa y mergea.
  - Única excepción: si el repo no tiene ningún commit en `main`, hacé un commit inicial con lo que ya existe y pusheá `main` una sola vez, aclarándolo en el primer mensaje.
- PRs chicas y revisables. Una PR por paso del plan; si un paso crece demasiado, dividilo.
- Cada PR lleva la descripción de `.github/pull_request_template.md`: **qué cambió, cómo probarlo, qué no pudiste verificar**.
- Antes de abrir una PR corré lint, chequeo de tipos y tests. Si algo no pasa, no abras la PR: arreglalo o explicá por qué. Comandos de este proyecto: `npx tsc --noEmit` y `npm run build`. Todavía no hay ESLint ni tests configurados: no los inventes, proponelos en una PR aparte si hacen falta..
- Si `gh` no está instalado, hacé el push y dejá el enlace para abrir la PR a mano.

## Límites (no los cruces sin preguntar)

- **Todo gratuito.** No actives ningún plan ni servicio de pago. Si alguna herramienta o servicio pide tarjeta o facturación, frená y avisá. El único gasto posible es el dominio propio, y solo cuando Maira lo decida y lo pague ella..
- **No subas secretos.** Claves, tokens, credenciales, archivos `.env` y similares van en `.gitignore`. Si algo parecido a un secreto aparece en el repo, avisá.
- No instales software global ni toques nada fuera de la carpeta del repo sin avisar.
- No inventes datos ni contenido que no sean de Maira: si algo falta, preguntá o proponelo en la PR.
- Sé honesto en las PRs sobre lo que no verificaste. Si no pudiste ver el resultado en un navegador o en un celular real, decilo: eso lo prueba Maira.

## Cómo correr y probar

`npm install`, `npm run dev` (abre en http://localhost:3000) y `npm run build` para verificar la versión de producción. Probalo en el navegador y en un celular real; si no pudiste, decilo en la PR..
