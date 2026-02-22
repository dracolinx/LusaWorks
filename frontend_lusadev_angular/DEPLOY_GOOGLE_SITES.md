# Deploy + Google Sites

## 1) Activar GitHub Pages en el repositorio

1. Abrir `dracolinx/LusaWorks` en GitHub.
2. Ir a `Settings` -> `Pages`.
3. En `Build and deployment`, seleccionar `GitHub Actions`.

## 2) Lanzar deploy

Opciones:

- Hacer push a `main` o `master` con cambios en `frontend_lusadev_angular/**`.
- O ejecutar manualmente el workflow `Deploy LusaWorks Landing`.

Workflow usado: `.github/workflows/lusadev-pages.yml`.

## 3) URL esperada

La landing quedara publicada en:

`https://dracolinx.github.io/LusaWorks/lusadev/`

## 4) Incrustar en Google Sites

1. Abrir la pagina de Google Sites en modo edicion.
2. `Insertar` -> `Incrustar` -> `URL`.
3. Pegar `https://dracolinx.github.io/LusaWorks/lusadev/`.
4. Ajustar altura recomendada del bloque (aprox. 4200-5200 px para mostrar toda la landing).
5. Publicar cambios en Google Sites.

## 5) Verificacion rapida

- Idioma del navegador en ES: abre en espanol.
- Idioma del navegador en EN: abre en ingles.
- Cambiar idioma con selector ES/EN y recargar: se mantiene preferencia.
- CTA abre `mailto:lusadev@icloud.com`.
- Mapa de Jaen visible.
