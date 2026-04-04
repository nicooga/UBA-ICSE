# Paso 7 — Salida: tarjetas Mochi

## Objetivo

Invocar Bedrock con `schemas/cards.schema.json`, validar el payload y escribir `out/mochi/<deck_slug>/*.md` (un archivo por tarjeta, u otra convención alineada a [import Mochi](https://mochi.cards/docs/import-and-export/importing/)).

## Tareas

- [ ] Mapear `MochiCard.front_md` / `back_md` al formato de archivo que use Mochi (p. ej. cuerpo frente, separador, dorso — documentar convención).
- [ ] Respetar [Markdown Mochi](https://mochi.cards/docs/markdown/basic-formatting/).
- [ ] Llamada(s) con structured output; si hay muchas tarjetas, considerar mazos por unidad (`deck_slug`).

## Notas

- Importación final la hace el usuario en la app Mochi desde `out/mochi/`.
