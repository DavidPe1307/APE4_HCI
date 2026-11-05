# Fase 2 · Requisitos R1–R6 · IHC-03 · Pagar la matrícula

**Responsable:** Martín Palacios · Issue #12 «F2 · Reorganización, requisitos y arquitectura»
**Regla (G2 · `prototipos/01-requisitos.md`):** un requisito, un verbo, desde el punto de vista del usuario, con un criterio que se pueda medir en la prueba.

## De dónde salen
Cada requisito nace de la **tarea crítica**, de la **restricción** de la tarjeta IHC-03 o de un **problema del diagnóstico** (P1–P5 en [`diagnostico.md`](diagnostico.md)). El orden sigue la matriz mínima de la guía: R1 acceder · R2–R4 ingresar y modificar · R5 corregir error · R6 finalizar con confirmación.

## Requisitos
| ID | El estudiante debe poder… | Verbo | Criterio medible | Origen | Tarea de prueba |
|---|---|---|---|---|---|
| **R1** | Llegar al pago de su matrícula y ver el total desde Inicio | Llegar | Ve el total y el botón «Continuar al pago» sin desplazarse; llega al formulario en 1 clic | Tarea crítica | T1 |
| **R2** | Elegir el método de pago comparando su comisión antes de aceptar | Elegir | Cada método muestra su comisión y su total; el total cambia al elegir, **antes** de pasar al formulario | P3 + restricción «total visible antes de aceptar» | T1 · T2 |
| **R3** | Escribir sus datos de pago con ayuda y validación en cada campo | Escribir | Cada campo tiene etiqueta y ayuda visibles; el error aparece **al salir del campo**, con un ejemplo; la tarjeta se agrupa de 4 en 4 | P4 | T2 |
| **R4** | Modificar sus datos sin perderlos si cancela por error | Modificar | Con datos escritos, «Cancelar», Esc o «Cambiar método» abren «¿Salir sin pagar?»; «Seguir pagando» conserva el 100 % de lo escrito | P2 | T2 |
| **R5** | Entender por qué falló el pago y corregirlo sin perder datos ni pagar dos veces | Corregir | El rechazo dice la **causa** y que **no hubo cobro**; ofrece «Corregir y reintentar» y «Pagar por transferencia»; el botón Pagar no envía dos veces | P1 | T2-E |
| **R6** | Terminar con un comprobante del monto aceptado, enviado a su correo y guardado | Terminar | El comprobante muestra «Total pagado = total aceptado», confirma el correo (enmascarado) y aparece en «Historial de pagos» | P5 | T3 |

## Notas
- **«Cancelar» no es un requisito aparte:** es la salida del usuario (H3). Aquí se exige que esa salida **no borre datos por accidente**, y eso es R4.
- **La comisión** ya no puede aparecer al final (fallo de origen de la tarjeta). Esto se mantiene desde la v2 de la prueba y se refuerza con R2.
- Los requisitos se siguen hasta la pantalla en [`trazabilidad.md`](trazabilidad.md).
