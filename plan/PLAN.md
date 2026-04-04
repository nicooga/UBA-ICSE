# UBA ICSE — Sociedad y Estado (plan de implementación)

**Contexto:** materia UBA XXI, cursillo de invierno. Material de referencia en `bibliografia/`.

## Objetivos (qué debe producir el sistema)

1. **Timeline** — `out/timeline.json`: eventos fechados (schema en paso 1).
2. **Mapa conceptual** — `out/concept-map.json`: nodos y aristas, agnóstico del visor.
3. **Plan de unidades de estudio** — `out/study-plan.json`: plan realista tipo sílabo/semanas; supuestos explícitos cuando no haya programa oficial (recursantes, cátedras distintas); vínculo a `bibliografia/` o huecos marcados.
4. **Tarjetas Mochi** — `out/mochi/...`: mazos importables según [import](https://mochi.cards/docs/import-and-export/importing/) y [Markdown](https://mochi.cards/docs/markdown/basic-formatting/).

## Entregables de código

1. **Script de deploy** — `terraform init` / `plan` / `apply`. No sube `out/`.
2. **Script de generado** — Amazon Bedrock (**structured outputs** por artefacto) → escribe en `out/` los cuatro objetivos anteriores.

## Etapa adicional

- **Visor del timeline** — sitio estático en **GitHub Pages** (`docs/` o rama `gh-pages`). Mapa conceptual y plan de unidades quedan como JSON hasta una fase futura opcional.

## Pasos (detalle en `plan/steps/`)

| Orden | Archivo | Contenido |
|------|---------|-----------|
| 1 | [steps/1-schemas.md](steps/1-schemas.md) | TS + JSON Schema: timeline, concept map, study plan, cards (Bedrock) |
| 2 | [steps/2-terraform-deploy.md](steps/2-terraform-deploy.md) | Terraform IAM Bedrock (+ opcional S3/CF) + script deploy |
| 3 | [steps/3-generator-foundation.md](steps/3-generator-foundation.md) | CLI compartido: config, Bedrock, `bibliografia/`, validación JSON |
| 4 | [steps/4-output-timeline.md](steps/4-output-timeline.md) | Invocación + `out/timeline.json` |
| 5 | [steps/5-output-concept-map.md](steps/5-output-concept-map.md) | Invocación + `out/concept-map.json` |
| 6 | [steps/6-output-study-plan.md](steps/6-output-study-plan.md) | Invocación + `out/study-plan.json` (sílabo realista + supuestos) |
| 7 | [steps/7-output-mochi.md](steps/7-output-mochi.md) | Invocación + `out/mochi/...` |
| 8 | [steps/8-viewer-github-pages.md](steps/8-viewer-github-pages.md) | HTML/JS + `docs/timeline.json` + Pages |
| 9 | [steps/9-readme.md](steps/9-readme.md) | README: objetivos, orden, credenciales, convenciones |

## Flujo operativo (resumen)

1. Deploy infra (paso 2).
2. Perfil AWS con `bedrock:InvokeModel`.
3. Generar → `out/timeline.json`, `out/concept-map.json`, `out/study-plan.json`, `out/mochi/` (pasos 3–7).
4. Copiar `out/timeline.json` → árbol del visor; commit; Pages (paso 8).

## Enlaces útiles

- [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/) (structured outputs / Converse según modelo y región).
- [GitHub Pages — publishing source](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
- [Mochi — import](https://mochi.cards/docs/import-and-export/importing/).
- [Mochi — Markdown](https://mochi.cards/docs/markdown/basic-formatting/).
