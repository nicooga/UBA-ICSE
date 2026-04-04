# Paso 8 — Visor timeline + GitHub Pages

## Objetivo

Página **estática** que lea `timeline.json` (mismo schema que el generador) y se publique con [GitHub Pages](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Tareas

- [ ] Elegir raíz publicada: carpeta `docs/` en `main` o rama `gh-pages`.
- [ ] `index.html` + JS (vanilla o lib CDN, p. ej. vis-timeline): `fetch('./timeline.json')`, ordenar por `start`, renderizar título/descripcion/eventos.
- [ ] Colocar `timeline.json` **junto** al `index.html` en esa raíz (misma ruta base).
- [ ] Flujo documentado: copiar `out/timeline.json` → `docs/timeline.json` (o script de un línea), commit, push.
- [ ] Activar Pages en configuración del repo.
- [ ] Estilos accesibles y legibles (CSS mínimo).

## Notas

- Sin backend; todo debe ser estático en el artefacto servido.
- El deploy Terraform/AWS **no** publica este sitio; Pages es independiente.
- **Mapa conceptual** y **plan de unidades** no tienen visor en esta etapa; solo JSON en `out/`.
