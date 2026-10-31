# Portfolio · Guía para Claude Code

Portfolio personal de Maira. [COMPLETAR: qué es y para quién, en una línea]. Repo: [COMPLETAR: nombre del repo]. Proyecto personal de Maira.

## Antes de hacer cualquier cosa, leé

1. `README.md`.
2. [COMPLETAR: documentos de diseño, plan o contenido que hay que leer antes de empezar, y cuál es el paso en curso].

## Stack

- [COMPLETAR: framework, lenguaje, estilos, hosting y herramientas ya decididas].
- [COMPLETAR: estructura del repo: qué va en cada carpeta].

## Convenciones

- [COMPLETAR: idioma de los textos de la interfaz].
- [COMPLETAR: idioma del código (variables, funciones, componentes)].
- [COMPLETAR: dónde viven los colores, las tipografías y las medidas, y dónde está el contenido editable].
- [COMPLETAR: otras convenciones del proyecto].

## Cómo trabajar (importante)

- **Identidad de git:** antes del primer commit de cada sesión, verificá que `git config user.email` sea [COMPLETAR: correo personal de Maira] y que `git remote -v` apunte a [COMPLETAR: remoto, por ejemplo `git@github.com:USUARIO/REPO.git`]. Si no coincide, **frená y avisá**. No modifiques la configuración global de git. Trabajá solo dentro de esta carpeta.
- **Nunca pushees a `main`.** Una rama y una PR por paso: [COMPLETAR: convención de nombre de rama, por ejemplo `tipo/descripcion-corta`]. Maira revisa y mergea.
  - Única excepción: si el repo no tiene ningún commit en `main`, hacé un commit inicial con lo que ya existe y pusheá `main` una sola vez, aclarándolo en el primer mensaje.
- PRs chicas y revisables. Una PR por paso del plan; si un paso crece demasiado, dividilo.
- Cada PR lleva la descripción de `.github/pull_request_template.md`: **qué cambió, cómo probarlo, qué no pudiste verificar**.
- Antes de abrir una PR corré lint, chequeo de tipos y tests. Si algo no pasa, no abras la PR: arreglalo o explicá por qué. [COMPLETAR: comandos exactos de este proyecto].
- Si `gh` no está instalado, hacé el push y dejá el enlace para abrir la PR a mano.

## Límites (no los cruces sin preguntar)

- **Todo gratuito.** No actives ningún plan ni servicio de pago. Si alguna herramienta o servicio pide tarjeta o facturación, frená y avisá. [COMPLETAR: excepciones que Maira ya aprobó, si las hay].
- **No subas secretos.** Claves, tokens, credenciales, archivos `.env` y similares van en `.gitignore`. Si algo parecido a un secreto aparece en el repo, avisá.
- No instales software global ni toques nada fuera de la carpeta del repo sin avisar.
- No inventes datos ni contenido que no sean de Maira: si algo falta, preguntá o proponelo en la PR.
- Sé honesto en las PRs sobre lo que no verificaste. Si no pudiste ver el resultado en un navegador o en un celular real, decilo: eso lo prueba Maira.

## Cómo correr y probar

[COMPLETAR: comandos para instalar y correr el proyecto, y cómo probarlo (navegador, celular, etc.)].
