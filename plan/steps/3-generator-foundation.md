# Paso 3 — Fundación del generador (CLI compartido)

## Objetivo

Base común del **script de generado**: configuración, cliente Bedrock, lectura de `bibliografia/`, validación JSON reutilizable para los pasos 4–7.

## Tareas

- [ ] Dependencias: `boto3` (o SDK actual).
- [ ] Config: región, `model_id`, perfil AWS o variables de entorno; sin secretos en git.
- [ ] Función o clase cliente Bedrock con soporte a **structured outputs** (JSON Schema del paso 1 por invocación).
- [ ] Utilidad para leer/incluir en prompt archivos de `bibliografia/` (texto plano / convención de extensiones documentada).
- [ ] Validar respuestas con `timeline.schema.json`, `concept-map.schema.json`, `study-plan.schema.json`, `cards.schema.json` según el subcomando.
- [ ] Subcomandos o flags: `timeline`, `concept-map`, `study-plan`, `mochi`, y opcionalmente `all` que encadene los cuatro.
- [ ] Manejo de errores, reintentos razonables, logs claros.

## Notas

- Habilitar acceso al modelo en la consola Bedrock para la región elegida.
- Si el modelo no soporta structured outputs, aplicar el fallback acordado en el paso 1.
