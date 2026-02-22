# LusaWorks Angular Landing

Landing one-page bilingue (ES/EN) para LusaWorks, creada con Angular moderno, estilo creativo "tech editorial", responsive y lista para incrustar en Google Sites.

## Stack

- Angular 20 + TypeScript + SCSS
- Deteccion automatica de idioma por navegador
- Selector manual ES/EN persistente en `localStorage` (`lusadev_lang`)
- Deploy gratuito con GitHub Pages

## Scripts

```bash
npm install
npm run start
npm run build
npm run build:pages
```

- `npm run start`: desarrollo local (`http://localhost:4200`).
- `npm run build`: build de produccion local.
- `npm run build:pages`: build preparado para `https://dracolinx.github.io/AnonLusa/lusadev/`.

## Estructura principal

- `src/app/services/language.ts`: autoidioma + persistencia.
- `src/app/services/content.ts`: contenido tipado ES/EN.
- `src/app/models/localized-copy.ts`: contratos `LocalizedCopy` y `LanguageCode`.
- `src/app/sections/*`: secciones visuales de la landing.
- `src/app/directives/reveal-on-scroll.ts`: animacion de revelado por scroll.

## Assets

- Logo: `src/assets/logo/lusadev-logo.jpeg` (origen: imagen JPEG del directorio raiz)
- Favicon: `src/assets/favicon/lusadev-favicon.png` (origen: imagen PNG sin fondo del directorio raiz)

## Publicacion

El workflow `.github/workflows/lusadev-pages.yml` despliega en GitHub Pages el subpath `/lusadev/`.
Despues, incrusta la URL en Google Sites:

1. `Insertar` -> `Incrustar` -> `URL`
2. Pegar `https://dracolinx.github.io/AnonLusa/lusadev/`
3. Ajustar alto/ancho del bloque
