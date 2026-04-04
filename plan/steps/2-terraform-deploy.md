# Paso 2 — Terraform + script de deploy

## Objetivo

Infra AWS necesaria para usar Bedrock desde tu entorno; **sin** subir `out/` ni contenido generado.

## Tareas

- [ ] Carpeta `terraform/` con proveedor AWS, variables (`region`, nombres opcionales).
- [ ] IAM mínimo: política que permita `bedrock:InvokeModel` (y lo estrictamente necesario para el flujo elegido).
- [ ] Opcional: S3 bucket, CloudFront, KMS — solo si los querés creados **vacíos** para uso manual futuro.
- [ ] Outputs: al menos lo que el operador necesite (p. ej. nombre de rol/ARN si usás asunción; si no, documentar uso de usuario IAM).
- [ ] Script de deploy (shell o Makefile): `terraform init`, `terraform plan`, `terraform apply` (con confirmación o `-auto-approve` documentado).
- [ ] `.gitignore`: estado local de Terraform si no usás remote state aún.

## Notas

- El script de deploy **no** ejecuta `aws s3 sync` del generador.
- Remote state (S3 + DynamoDB) es opcional para más adelante.
