# Fase 3 · Hallazgos de la prueba · IHC-03 · v1

**Responsable:** Sheyla Pacha · Issue #20 «F3 · Hallazgos y accesibilidad»
**Fecha de las sesiones:** 05/11/2026 · **Participantes:** P01 (facilitó Martín) y P02 (facilitó David), estudiantes universitarias
**Protocolo:** [`protocolo.md`](protocolo.md) · **Datos:** [`resultados.csv`](resultados.csv) · **Registro de P02:** [`P02-registro-sesion.md`](../evidencias/pruebas/P02/P02-registro-sesion.md) · **Capturas:** [`evidencias/pruebas/P02/`](../evidencias/pruebas/P02/) · [`evidencias/pruebas/accesibilidad/`](../evidencias/pruebas/accesibilidad/)

> Regla: aquí va solo lo que **se observó o se dijo** en la prueba. «No anotado» significa que el dato no se registró durante la sesión; no se completa después.

---

## 1. Resumen de resultados
| Tarea | P01 · tiempo / éxito / errores | P02 · tiempo / éxito / errores |
|---|---|---|
| T1 Localizar | 70 s (1.17 min) · Sí · 0 | 1.02 min (≈ 61 s) · Sí · no anotado |
| T2 Operar / corregir | 20 s (0.33 min) · Sí · 0 | 0.9 min (54 s) · Sí · no anotado |
| T3 Finalizar / confirmar | 20 s (0.33 min) · Sí · 0 | 2.01 min (≈ 121 s) · Sí · no anotado |
| A1 · T1 solo con teclado | No realizado | Completó |

**Lectura:** los dos participantes completaron las 3 tareas **sin ayuda registrada**. P01 se recuperó del rechazo del banco usando la Tarjeta B. P02 tardó más en T3 (≈ 2 min), aunque la causa no se anotó.

## 2. Registro de sesiones
| Participante | Tarea | Reacciones y pausas observadas | Dudas | Citas o comentarios |
|---|---|---|---|---|
| P01 | T1 | sin reacción anotada | — | — |
| P01 | T2 | **Suspiró al ver el rechazo** de la Tarjeta A · se recuperó con la Tarjeta B | Al meter la tarjeta *(paráfrasis)* | — |
| P01 | T3 | sin reacción anotada | — | — |
| P02 | T1 | no anotado | — | — |
| P02 | T2 | no anotado | — | — |
| P02 | T3 | no anotado | «Cuando se generó la orden de pago» | — |

**Preguntas finales**
| Pregunta | P01 *(paráfrasis de Martín)* | P02 *(citas textuales)* |
|---|---|---|
| Lo más difícil | La sensación de meter la tarjeta | «Saber como poner datos de la tarjeta» |
| Dónde dudó | Al meter la tarjeta | «Cuando se generó la orden de pago» |
| Seguridad de que el pago quedó hecho (1–5) | **4** · porque la app da retroalimentación | **4** · «cumple con todas las restrucciones de pagos» |
| ¿Confiaría siendo becado? | Sí, porque es intuitivo | «Si, aunque aun faltaria la gratuidad de becario aun asi esta facil de usar» |
| Qué cambiaría | No supo qué cambiaría | «Nada para mi es un sistema perfecto» |

## 3. Matriz de hallazgos
Severidad de Nielsen: 1 cosmético · 2 menor · 3 mayor · 4 catastrófico.

| ID | Touchpoint / pantalla | Lo observado (hecho) | Evidencia | Emoción observada | Heurística | Sev. | Recomendación | Issue |
|---|---|---|---|---|---|---|---|---|
| **HL-01** | 4 · Formulario de pago (datos de la tarjeta) | **Ingresar los datos de la tarjeta fue lo más difícil para los dos participantes** | P01: «la sensación de meter la tarjeta» y dudó ahí *(paráfrasis)* · P02: «Saber como poner datos de la tarjeta» | Dificultad declarada por los dos | **H5** Prevención de errores · H6 Reconocer antes que recordar | **2** | Mostrar un dibujo de la tarjeta que señale dónde está cada dato (número y vencimiento al frente, código de seguridad al reverso) y un enlace «¿Dónde encuentro esto?» | #23 |
| **HL-02** | 6 · Pagar y esperar (procesando) | Duda o preocupación en el momento en que se envía el pago | P02: «Cuando se generó la orden de pago» (pregunta 2) | Preocupación declarada | **H1** Visibilidad del estado del sistema | **2** | Antes de cobrar, un resumen «Vas a pagar $92.50 con la tarjeta •••• 1111» con «Confirmar pago»; en «Procesando», un texto claro sobre lo que está pasando y cuánto tarda | #24 |
| **HL-03** | Todas las pantallas · uso con teclado | **El indicador de foco casi no se ve** | P01: «foco visible no observado» (A1) · medición del equipo: anillo de foco `#ffb000` = **1,83:1** sobre blanco y **1,69:1** sobre el fondo; WCAG pide **≥ 3:1** | — | Accesibilidad · WCAG 2.4.7 Foco visible · 1.4.11 Contraste no textual | **3** | Cambiar el color del anillo de foco a uno con contraste ≥ 3:1 sobre blanco y sobre el fondo (por ejemplo, azul oscuro `#174a96`) y mantener los 3 px | #25 |
| **HL-04** | 2 · Inicio: total con comisión | El becado espera ver reflejada su **beca o gratuidad** en lo que paga | P02: «aun faltaria la gratuidad de becario» (pregunta 4) | Expectativa no cumplida (sin conducta anotada) | **H2** Coincidencia con el mundo real · confianza | **2** | Mostrar en el detalle una línea «Beca / gratuidad» (aunque sea $0.00, con la explicación de qué cubre) | — (opcional, sin Issue) |
| **HL-05** | 7 · Rechazo del banco (MV1) | El rechazo genera una reacción negativa, pero el participante se recupera solo | P01: **suspiró** al ver el rechazo y pagó con la Tarjeta B, sin ayuda | Suspiro (negativa breve) | **H9** (se cumple) | **1** | Mantener el mensaje con la causa y la alternativa; no requiere cambio | — |

**Prioridad para la Fase 4 (≥ 3 correcciones):**
1. **HL-03 (sev. 3):** está medido y no cumple WCAG.
2. **HL-01 (sev. 2):** lo dicen **los dos** participantes.
3. **HL-02 (sev. 2):** es la duda justo en el momento del pago, cerca del momento de verdad.

HL-04 queda como mejora opcional y HL-05 no requiere cambio.

## 4. Heurísticas examinadas
| Heurística | ¿Se cumple en v1? | Evidencia de P01 | Evidencia de P02 |
|---|---|---|---|
| H1 Visibilidad del estado del sistema | **Parcial** | Seguridad 4/5 «porque la app da retroalimentación» *(paráfrasis)* | Seguridad 4/5, pero dudó «Cuando se generó la orden de pago» |
| H5 Prevención de errores | **Parcial** | 0 errores anotados, pero lo más difícil fue la tarjeta | «Saber como poner datos de la tarjeta» (errores no anotados) |
| H9 Reconocer, diagnosticar y recuperarse de errores | **Sí** | Tras el rechazo usó la Tarjeta B sin ayuda | Completó la T2 con éxito (ruta de recuperación no anotada) |

## 5. Revisión de accesibilidad
| Código | Condición | P01 | P02 | Verificación del equipo | Resultado |
|---|---|---|---|---|---|
| A1 | Uso solo con teclado y foco visible | No realizado · foco visible no observado | **Completó** la T1 con teclado | Anillo de foco medido: 1,83:1 (blanco) y 1,69:1 (fondo) < 3:1 | **Parcial:** se puede usar con teclado, pero el foco no tiene contraste suficiente → HL-03 |
| A2 | Errores no dependen solo del color · contraste | No anotado si notó el error | No anotado si notó el error | El error lleva **⚠ + texto + borde**; texto de error 5,72:1 sobre su fondo | **Cumple** (verificación del equipo) |

**Contraste de los colores del prototipo v1.** Calculado con la fórmula de contraste de WCAG 2.1 (la misma que usa WebAIM) a partir de `prototipo/v1/styles.css`.

| Par de colores | Contraste | Mínimo WCAG | ¿Cumple? |
|---|---|---|---|
| Texto de error `#b3261e` sobre fondo de error `#fdecea` | 5,72:1 | 4,5:1 | ✅ |
| Texto de ayuda `#5a6472` sobre blanco | 6,00:1 | 4,5:1 | ✅ |
| Botón: blanco sobre azul `#1f5fbf` | 6,09:1 | 4,5:1 | ✅ |
| Éxito `#1b6e3c` sobre `#e7f4ec` | 5,55:1 | 4,5:1 | ✅ |
| Anillo de foco `#ffb000` sobre blanco | **1,83:1** | 3:1 (indicador no textual) | ❌ |
| Anillo de foco `#ffb000` sobre fondo `#f5f6f8` | **1,69:1** | 3:1 | ❌ |

## 6. Curva emocional observada (insumo para la Fase 4)
Solo se pone un valor cuando hay una conducta observada o algo que el participante **dijo**; el origen va entre paréntesis.

| Touchpoint | Predicción (Fase 1) | P01 | P02 |
|---|---|---|---|
| 2 · Ver total y elegir método | 0 | sin reacción anotada | «aun faltaria la gratuidad de becario» (expectativa) |
| 4–5 · Formulario y error | −1 | **−1** (dijo que fue lo más difícil) | **−1** (dijo que fue lo más difícil) |
| 6 · Pagar y esperar | 0 | sin reacción anotada | **−1** (dijo que dudó «cuando se generó la orden de pago») |
| 7 · Rechazo del banco (MV1) | −2 | **−1** (suspiró, pero se recuperó solo) | no anotado |
| 8 · Comprobante (MV2) | +1 | **+1** (seguridad 4/5) | **+1** (seguridad 4/5) |

**Lectura:** el rechazo (MV1) dolió menos de lo predicho (−1 observado frente a −2 predicho), porque la v1 ya dice la causa y ofrece una alternativa. El punto bajo pasó a ser **ingresar los datos de la tarjeta** (touchpoints 4–5), señalado por los dos participantes. Por eso HL-01 es prioridad en la Fase 4.
