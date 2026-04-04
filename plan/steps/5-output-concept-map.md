# Paso 5 — Salida: mapa conceptual

## Objetivo

Invocar Bedrock con `schemas/concept-map.schema.json` y escribir `out/concept-map.json` (nodos y aristas, sin visor en este entregable).

## Tareas

- [ ] Prompt: conceptos clave de la materia, relaciones causales/jerárquicas según criterio pedagógico.
- [ ] Llamada con structured output → validar → `out/concept-map.json`.
- [ ] IDs únicos en nodos; `source`/`target` de edges deben referenciar `id` de nodos existentes (validar en código si el schema no lo fuerza).

## Notas

- Conversión a Mermaid/Cytoscape u otro visor: fase futura opcional.
