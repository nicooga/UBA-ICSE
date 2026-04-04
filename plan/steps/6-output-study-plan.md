# Paso 6 — Salida: plan de unidades

## Objetivo

Invocar Bedrock con `schemas/study-plan.schema.json` y escribir `out/study-plan.json`: plan **realista** (unidades/semanas, objetivos, actividades, lecturas).

## Tareas

- [ ] Prompt: formato tipo sílabo o cronograma que daría la cátedra; cuando **no** haya programa oficial, exigir campo `assumptions` y `notes` en unidades con huecos explícitos (“pendiente confirmar con cátedra”).
- [ ] Incluir referencias a archivos de `bibliografia/` en `readings` cuando existan; `null` donde falte material.
- [ ] Llamada con structured output → validar → `out/study-plan.json`.

## Notas

- Pensado para recursantes y variaciones entre cátedras: priorizar **honestidad** del plan sobre inventar lecturas inexistentes.
