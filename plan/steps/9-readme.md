# Paso 9 — README y cierre

## Objetivo

Un solo lugar con **objetivos del proyecto**, orden de ejecución, prerequisitos y convenciones.

## Objetivos de salida (recordatorio)

El generador debe poder producir, en `out/`:

1. **Timeline** — `timeline.json`
2. **Mapa conceptual** — `concept-map.json`
3. **Plan de unidades** — `study-plan.json` (realista; supuestos y huecos cuando no haya programa oficial)
4. **Tarjetas Mochi** — `mochi/...`

Orden sugerido de implementación/generación: pasos 4 → 5 → 6 → 7 (cada uno puede ser un subcomando); el visor (paso 8) solo consume el timeline.

## Tareas

- [ ] Prerequisitos: versión de Python, Terraform, AWS CLI, cuenta AWS, modelos Bedrock habilitados.
- [ ] Orden operativo: deploy infra (paso 2) → credenciales → generar salidas (pasos 3–7) → copiar `timeline.json` al árbol del visor → Pages (paso 8).
- [ ] Convención de fechas en `timeline.json` (`start` / `end`).
- [ ] Convención de `readings` y `notes` en `study-plan.json`.
- [ ] Cómo importar mazos en Mochi (`out/mochi/...`).
- [ ] Enlaces: [Bedrock](https://docs.aws.amazon.com/bedrock/), [Mochi import](https://mochi.cards/docs/import-and-export/importing/), [Mochi Markdown](https://mochi.cards/docs/markdown/basic-formatting/), [GitHub Pages](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
- [ ] Licencia / uso académico si aplica.
