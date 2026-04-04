# Paso 1 — Schemas (todos los artefactos)

## Objetivo

Definir en un solo lugar los contratos que Bedrock debe respetar (**structured outputs** = JSON Schema) y los tipos TypeScript equivalentes para el repo.

## Tareas

- [ ] `schemas/timeline.ts` + `schemas/timeline.schema.json` → `out/timeline.json`.
- [ ] `schemas/concept-map.ts` + `schemas/concept-map.schema.json` → `out/concept-map.json`.
- [ ] `schemas/study-plan.ts` + `schemas/study-plan.schema.json` → `out/study-plan.json`.
- [ ] `schemas/cards.ts` + `schemas/cards.schema.json` → payload que el generador transforma en `out/mochi/...`.
- [ ] Documentar en README (paso 9): convención `start`/`end` del timeline; campos `readings` / `notes` del plan de unidades.
- [ ] (Opcional) Validación post-respuesta en Python con los mismos JSON Schema.

## TypeScript — Timeline

```typescript
export type TimelineSchemaVersion = "1";

export interface TimelineEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
  summary?: string;
  body?: string;
  tags?: string[];
  source?: string;
  unit?: string;
}

export interface Timeline {
  schema_version: TimelineSchemaVersion;
  title?: string;
  description?: string;
  events: TimelineEvent[];
}
```

## TypeScript — Concept map

```typescript
export type ConceptMapSchemaVersion = "1";

export interface ConceptNode {
  id: string;
  label: string;
  /** Opcional: tipo, capa, color sugerido para visores futuros */
  kind?: string;
}

export interface ConceptEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
}

export interface ConceptMap {
  schema_version: ConceptMapSchemaVersion;
  title?: string;
  description?: string;
  nodes: ConceptNode[];
  edges: ConceptEdge[];
}
```

## TypeScript — Plan de unidades

```typescript
export type StudyPlanSchemaVersion = "1";

export interface StudyUnit {
  id: string;
  title: string;
  /** Orden o etiqueta de semana (string para flexibilidad cursillo invierno). */
  week_or_order: string;
  learning_objectives: string[];
  activities: string[];
  /** Rutas o nombres de archivos en bibliografia/, o null si desconocido. */
  readings: (string | null)[];
  /** Supuestos, “confirmar con cátedra”, huecos cuando no hay programa oficial. */
  notes?: string;
}

export interface StudyPlan {
  schema_version: StudyPlanSchemaVersion;
  title?: string;
  assumptions?: string[];
  units: StudyUnit[];
}
```

## TypeScript — Tarjetas (payload antes de escribir Mochi)

Un objeto que el paso 7 convierte a carpetas/archivos. Ejemplo mínimo:

```typescript
export type CardsSchemaVersion = "1";

export interface MochiCard {
  /** Nombre de archivo sin .md; único dentro del mazo. */
  id: string;
  /** Markdown frente (pregunta o término). */
  front_md: string;
  /** Markdown dorso (respuesta o definición). */
  back_md: string;
}

export interface MochiDeck {
  /** Carpeta bajo out/mochi/<deck_slug>/ */
  deck_slug: string;
  display_name?: string;
  cards: MochiCard[];
}

export interface CardsPayload {
  schema_version: CardsSchemaVersion;
  decks: MochiDeck[];
}
```

## Notas

- **Structured outputs:** modelo y región deben soportar JSON Schema en la invocación; si no, un único fallback documentado (p. ej. tool use con JSON).
- **Mochi:** `front_md` / `back_md` según [Markdown Mochi](https://mochi.cards/docs/markdown/basic-formatting/).
- Una **invocación Bedrock por artefacto** simplifica validación y prompts.
