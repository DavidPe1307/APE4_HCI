# Fase 3 · Protocolo de prueba de usabilidad · IHC-03 · Pagar la matrícula

**Responsable:** Martín Palacios · Issue «F3 · Protocolo y facilitación»
**Prototipo probado:** `prototipo/v1/` (Fase 2) · **Versión:** v1
**Base:** prueba cognitiva y v1 → prueba → v2 (G3 · Grupo_3_Exposicion) · emociones observadas (G1 · HCI-2026-G1)

---

## 1. Participantes
| Código | Perfil | Requisito |
|---|---|---|
| **P01** | Estudiante universitario, **no diseñador** | No haber visto el prototipo ni el repo |
| **P02** | Estudiante universitario, **no diseñador** | No haber visto el prototipo ni el repo |

- **Sin datos personales:** no se anotan nombres, cédulas, correos ni fotos de la cara. Solo P01 y P02.
- Se usan **datos de prueba ficticios** (tarjeta de datos, sección 5); nadie escribe sus datos reales.

## 2. Consentimiento verbal (se lee tal cual)
> «Gracias por ayudarnos. Vamos a probar **el sistema, no a ti**: si algo cuesta, es un problema del diseño. Te pediremos 3 tareas y que **pienses en voz alta**, diciendo lo que buscas y lo que esperas. Anotaremos tiempos, errores y lo que digas, **sin tu nombre**: en el informe solo aparecerás como P01 o P02. Puedes detenerte cuando quieras. ¿Aceptas participar?»

Se registra en la hoja: **Acepta: Sí / No** y la hora.

## 3. Roles del equipo
| Rol | Quién | Qué hace |
|---|---|---|
| Facilitador | Martín | Lee el consentimiento y las tareas, **no ayuda**, recuerda «piensa en voz alta» |
| Cronometrista | David | Toma el tiempo de cada tarea (cronómetro del celular) |
| Anotador / observador | Sheyla | Llena la hoja de observación: errores, citas textuales, emociones observadas y heurísticas |

## 4. Preparación (antes de cada participante)
1. Abrir `APE4-integral/prototipo/v1/index.html` en una **ventana de incógnito nueva**, para que el historial empiece vacío.
2. Dejar la pantalla en **Inicio** y el cursor fuera de la página.
3. Tener a mano la **tarjeta de datos** (sección 5), el cronómetro y una **hoja de observación** por participante.
4. Comprobar con el equipo que la tarjeta `…0000` da **rechazo por fondos insuficientes** y que la `…1111` da **pago aprobado**.

## 5. Tarjeta de datos (se entrega impresa al participante)
| Dato | Valor |
|---|---|
| Tarjeta A | `4111 1111 1111 0000` |
| Tarjeta B (otra tarjeta) | `4111 1111 1111 1111` |
| Vencimiento | `12/29` |
| Código de seguridad | `123` |
| Correo | `estudiante.prueba@uta.edu.ec` |

## 6. Tareas (se leen tal cual · una a la vez)
| Tarea | Lo que dice el facilitador | Inicio del tiempo | Fin del tiempo | Éxito si… |
|---|---|---|---|---|
| **T1 · Localizar** | «Eres un estudiante becado y quieres pagar tu matrícula. **Averigua cuánto vas a pagar en total** y llega a la pantalla donde se ingresan los datos de pago.» | Al terminar de leer | Llega a «Datos de pago» | Dice el total del método elegido ($92.50 con tarjeta o $90.00 con transferencia) y llega al formulario |
| **T2 · Operar / corregir** | «Paga con la **Tarjeta A** de esta hoja. **Si algo sale mal, resuélvelo** como harías en la vida real.» | Al terminar de leer | Envía un pago que el banco aprueba | Entiende por qué falló (fondos insuficientes) y se recupera: usa la Tarjeta B o paga por transferencia **sin volver a escribir todo** |
| **T3 · Finalizar / confirmar** | «Termina el pago. Dime **cómo sabes que quedó hecho** y **cuánto pagaste**. Luego busca dónde podrías volver a ver ese comprobante.» | Al terminar de leer | Abre «Historial de pagos» | Dice el monto pagado y encuentra el pago en el historial |

**Escala de éxito:** **Sí** (sin ayuda) · **Con ayuda** (el facilitador dio una pista) · **No** (abandona o pasan 3 minutos).
**Regla de ayuda:** solo si el participante está bloqueado **más de 60 s**, el facilitador dice: «¿Qué buscarías ahora?». Si sigue bloqueado, da **una** pista y se marca «Con ayuda».
**Qué cuenta como error:** cada acción que no lleva hacia el objetivo y que el participante tiene que deshacer. Por ejemplo: un dato mal escrito que muestra un mensaje, pulsar el botón equivocado o volver atrás sin querer.

## 7. Qué se registra (sin inventar)
| Dato | Cómo | Dónde |
|---|---|---|
| Tiempo (s) | Cronómetro, por tarea | `resultados.csv` |
| Éxito | Sí / Con ayuda / No | `resultados.csv` |
| Errores | Conteo según la definición | `resultados.csv` |
| Comentarios | **Citas textuales**, entre comillas | hoja → `resultados.csv` y `hallazgos.md` |
| Emoción observada | **Solo lo que se ve o se oye**: suspira, se ríe, frunce el ceño, dice «uy», se queda quieto X s. El valor de −2 a +2 se pone solo si hay una conducta que lo respalde, y siempre con la conducta escrita al lado | hoja → `resultados.csv` |

## 8. Heurísticas que se examinan (las 3)
| Heurística | Qué se observa | Dónde |
|---|---|---|
| **H1** Visibilidad del estado del sistema | ¿Sabe en qué paso está, cuánto pagará y si el pago quedó hecho? | T1 · T3 |
| **H5** Prevención de errores | ¿La ayuda y la validación al salir del campo evitan errores? ¿Elige el método con la comisión a la vista? | T1 · T2 |
| **H9** Ayudar a reconocer, diagnosticar y recuperarse de errores | ¿Entiende la causa del rechazo y se recupera sin perder datos? | T2 |

## 9. Condiciones de accesibilidad (las 2)
| Código | Condición | Cómo se verifica | Criterio |
|---|---|---|---|
| **A1** | **Uso solo con teclado y foco visible** | Al terminar, se pide a cada participante repetir la **T1 sin mouse** (Tab, Shift+Tab, flechas, Enter). Además, el equipo recorre los 3 flujos con teclado | Completa la tarea sin mouse y **siempre ve dónde está el foco** |
| **A2** | **Los errores no dependen solo del color y tienen contraste suficiente** | En la T2, observar si el participante nota el error. El equipo mide los colores con **WebAIM Contrast Checker** (webaim.org/resources/contrastchecker) | Error con ícono + texto · texto ≥ 4.5:1 · indicador de foco ≥ 3:1 |

## 10. Preguntas finales
1. ¿Qué fue lo más difícil?
2. ¿En qué momento dudaste o te preocupaste?
3. Del 1 al 5, ¿qué tan seguro te sentiste de que el pago quedó hecho? ¿Por qué?
4. Si fueras becado con el dinero justo, ¿confiarías en este sistema? ¿Por qué?
5. ¿Qué cambiarías?

## 11. Después de la sesión
1. Pasar los datos de la hoja a `resultados.csv` **el mismo día**.
2. Escribir los hallazgos en `hallazgos.md`.
3. Cada hallazgo nuevo se registra como Issue `problema-ux`.
4. Guardar las hojas escaneadas o fotografiadas **sin datos personales** en `evidencias/pruebas/`.

**Duración estimada:** 15 min por participante (2 consentimiento · 10 tareas · 3 preguntas) → unos 30 min para P01 y P02, dentro de los 50 min de la fase.
