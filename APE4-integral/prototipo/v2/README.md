# Fase 4 · Prototipo v2 · IHC-03 · Pagar la matrícula

**Base:** copia exacta de [`prototipo/v1/`](../v1/) (commit `ddb22ff`), corregida con los 3 hallazgos priorizados de la [prueba](../../pruebas/hallazgos.md).
**Detalle y medición:** [`iteracion/antes-despues.md`](../../iteracion/antes-despues.md)

## Cómo abrirlo
1. Doble clic en `inicio.html`. No necesita instalación ni servidor.
2. **Banco simulado (Mago de Oz):** igual que en la v1 · tarjeta terminada en **0000** = fondos insuficientes · en **0002** = tarjeta vencida · cualquier otra de 16 dígitos = aprobado.
3. En la barra superior la etiqueta dice **APE v2**.

## Qué cambió respecto a la v1
| Hallazgo | Issue | Archivo | Qué cambió | Cómo verlo |
|---|---|---|---|---|
| HL-03 · foco poco visible | #25 | `styles.css` | Anillo de foco azul oscuro `#174a96` (8,55:1); amarillo solo en la barra oscura | Pulsar `Tab` en cualquier pantalla |
| HL-01 · datos de la tarjeta | #23 | `pago.html` | Desplegable «¿Dónde encuentro estos datos?» con dibujo del frente y del reverso de la tarjeta | `pago.html` → abrir el desplegable bajo «Número de tarjeta» |
| HL-02 · duda al pagar | #24 | `pago.html` | Paso «Revise antes de pagar» (monto, tarjeta •••• 1111, destinatario, correo) + «Confirmar pago» / «Revisar mis datos»; texto de carga más claro | Llenar el formulario y pulsar «Pagar $92.50» |

Lo demás (inicio, comprobante, historial, modal de salida, validación al salir del campo, rechazo con causa) **no cambia**.

## Flujos de la v2
| Flujo | Recorrido |
|---|---|
| 1 · Éxito | Inicio → Datos de pago → **Revise antes de pagar** → Confirmar → Enviando al banco → Comprobante → Historial |
| 2 · Error de dato | Igual que la v1 (error al salir del campo), ahora con la ayuda de la tarjeta |
| 3 · Rechazo | Pagar → Revise → Confirmar → rechazo con causa → «Corregir y reintentar» o «Pagar por transferencia» |

## Comprobaciones hechas por el equipo
- Los 3 flujos funcionan (éxito, error de dato, rechazo y reintento) con tarjeta y con transferencia.
- «Revisar mis datos» vuelve al primer campo sin borrar nada; «Confirmar pago» recibe el foco al aparecer.
- El cobro sigue siendo uno solo: no se puede confirmar dos veces.
- La ayuda de la tarjeta solo aparece con el método tarjeta.

**Pendiente:** la v2 **no se ha probado con usuarios**; lo que esperamos que mejore es una predicción.
