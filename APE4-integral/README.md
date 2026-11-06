# APE 4 integradora · Prototipado y validación

**Universidad Técnica de Ambato · FISEI · Software · 5.º nivel · Paralelo B · Interacción Humano–Computador · Grupo 2**
**Docente:** Ing. MSc. José Rubén Caiza Caizabuano

## Equipo
| Nombre | Cuenta GitHub | Issues | Ramas |
|---|---|---|---|
| Martín Palacios | [@killer13233](https://github.com/killer13233) | #1 P1 · #12 requisitos y arquitectura · #18 protocolo · #23 HL-01 | `aporte/martin` · `aporte/martin-fase2` · `aporte/martin-fase3` · `fix/martin-hl01` |
| David Pérez | [@DavidPe1307](https://github.com/DavidPe1307) | #5 P5 · #15 componentes y formulario · #19 resultados · #24 HL-02 | `aporte/david` · `aporte/david-f2` · `aporte/david-f3` · `fix/david-hl02` |
| Sheyla Pacha | [@Zzzheyla](https://github.com/Zzzheyla) | #2 P2 · #3 P3 · #4 P4 · #14 wireframes y trazabilidad · #20 hallazgos · #25 HL-03 · #27 v2 y antes/después | `aporte/sheyla` · `aporte/sheyla-f4` · `fix/sheyla-hl03` · `aporte/sheyla-f4-docs` |

## Caso asignado
Continuación de la **Prueba Práctica Integradora** (caso *Pagos académicos*, variante B). Se trabaja la tarjeta **IHC-03**. La interfaz de partida es el resultado de la prueba (su versión corregida), guardada en [`prototipo/base-prueba/`](prototipo/base-prueba/).

| Elemento | Descripción |
|---|---|
| Tema | Pagos (pagos académicos) |
| Persona | Estudiante becado con presupuesto limitado ([ficha](evidencias/persona-ihc03.png)) |
| Contexto | Paga desde su celular, en el campus, pocos días antes del cierre de matrícula, con prisa y con el dinero justo *(supuesto del equipo)* |
| Tarea crítica | Consultar y pagar la matrícula |
| Restricción | El costo total debe verse antes de aceptar |
| Fallo adicional | Comisión inesperada al final ($90.00 → $92.50). Corregido en la base de la prueba |

## Cómo abrir el prototipo
| Versión | En línea (GitHub Pages) | En el computador |
|---|---|---|
| **v2 · final** (con HL-01, HL-02 y HL-03) | [abrir v2](https://davidpe1307.github.io/APE4_HCI/APE4-integral/prototipo/v2/inicio.html) | Doble clic en `prototipo/v2/inicio.html` |
| **v1 · probada** con P01 y P02 | [abrir v1](https://davidpe1307.github.io/APE4_HCI/APE4-integral/prototipo/v1/inicio.html) | Doble clic en `prototipo/v1/inicio.html` |
| Base de la prueba (punto de partida) | — | Doble clic en `prototipo/base-prueba/index.html` |

No necesita instalación ni servidor.
**Banco simulado (Mago de Oz):** tarjeta terminada en **0000** = fondos insuficientes · en **0002** = tarjeta vencida · cualquier otra de 16 dígitos (por ejemplo `4111 1111 1111 1111`) = pago aprobado.
**Teclado:** `Tab` / `Shift+Tab` mueven el foco · `Enter` activa · `Esc` cierra el modal o abre «¿Salir sin pagar?».

## Avance por fase
| Fase | Estado | Archivos | PR |
|---|---|---|---|
| 1 · Diagnóstico | ✅ | [diagnostico.md](diagnostico.md) · [recorrido-emocional.csv](recorrido-emocional.csv) · [recorrido-emocional.png](recorrido-emocional.png) · [fichas P2–P4](evidencias/fichas-P2-P3-P4.md) | #6 · #8 · #10 |
| 2 · Diseño y construcción | ✅ | [requisitos.md](requisitos.md) · [arquitectura.md](arquitectura.md) · [sitemap.png](sitemap.png) · [user-flow.png](user-flow.png) · [componentes.md](componentes.md) · [wireframes/](wireframes/) · [trazabilidad.md](trazabilidad.md) · [prototipo/v1/](prototipo/v1/) | #13 · #16 · #17 |
| 3 · Prueba | ✅ | [protocolo.md](pruebas/protocolo.md) · [resultados.csv](pruebas/resultados.csv) · [hallazgos.md](pruebas/hallazgos.md) · [evidencias/pruebas/](evidencias/pruebas/) | #21 · #22 · #26 |
| 4 · Iteración | ✅ | [prototipo/v2/](prototipo/v2/) · [antes-despues.md](iteracion/antes-despues.md) · [curva v1 vs v2](iteracion/curva-v1-v2.png) · [evidencias/v2/](evidencias/v2/) | #28 · #29 · #30 · #31 · #32 |
| 5 · Defensa | ⏳ en la defensa | [conclusiones.md](conclusiones.md) (la incidencia se registra el día de la defensa) | — |

## Resultados en breve
- **Prueba (P01 y P02, 05/11/2026):** 6 de 6 tareas completadas sin ayuda · seguridad de que el pago quedó hecho: 4/5 en ambos.
- **Hallazgos:** 5 (HL-01 a HL-05). Se corrigieron los 3 prioritarios en la v2, incluido el único de severidad 3.
- **Medición honesta:** la v1 es dato medido; las emociones esperadas de la v2 son predicción. El contraste del foco sí está medido: de 1,83:1 a 8,55:1.

| Hallazgo | Corrección en la v2 | Issue | Commit | PR |
|---|---|---|---|---|
| HL-01 · Datos de la tarjeta difíciles | Ayuda «¿Dónde encuentro estos datos?» con dibujo de la tarjeta | #23 | `7898abf` | #29 |
| HL-02 · Duda al generar la orden | «Revise antes de pagar» y estado de carga claro | #24 | `5c00574` | #30 |
| HL-03 · Foco casi invisible | Foco azul `#174a96` (8,55:1) | #25 | `7830c0c` | #31 |

## Enlaces
- **Issues:** [todas](https://github.com/DavidPe1307/APE4_HCI/issues?q=is%3Aissue) · problemas P1–P5: #1–#5 · hallazgos: #23 · #24 · #25
- **Pull Requests:** [todos](https://github.com/DavidPe1307/APE4_HCI/pulls?q=is%3Apr)
- **Commits clave:**
  - Martín: `b3cf2b6` diagnóstico · `3701ee9` corrección de P1 · `1efe085` R1–R6, sitemap y user flow · `8c9623d` Inicio v1 · `4b41d2a` protocolo · `7898abf` HL-01
  - David: `ed79d22` diagnóstico · `7407afa` curva emocional · `8719cb8` validación, modal y rechazo · `e782542` componentes · `b489976` resultados P01/P02 · `5c00574` HL-02
  - Sheyla: `6ccd268` · `091f0bf` · `28fa190` evidencia P2–P4 · `57e295f` comprobante e historial · `e25cff1` wireframes y trazabilidad · `d293561` hallazgos · `ddb22ff` v2 · `7830c0c` HL-03 · `9751d70` antes/después
- [Protocolo](pruebas/protocolo.md) · [Resultados](pruebas/resultados.csv) · [Hallazgos](pruebas/hallazgos.md) · [Antes/después](iteracion/antes-despues.md) · [Trazabilidad](trazabilidad.md) · [Conclusiones](conclusiones.md)

## Decisiones principales
- **Partir del resultado de la prueba** (la v2 de IHC-03) en lugar de empezar de cero, para iterar sobre evidencia.
- **Una sola tarjeta (IHC-03)**, porque tiene más datos medidos: en la prueba, P1 necesitó ayuda y no notó la comisión.
- **Prototipo en código con Mago de Oz**, para probar errores y recuperación reales; no permite probar pagos reales ni seguridad.
- **La v2 nace como copia exacta de la v1** y cada corrección va en su propio commit y PR, para que se vea la causa hallazgo → cambio.
- **Predicción y dato medido se distinguen** desde la Fase 1 hasta la comparación v1/v2.

## Repositorios de referencia (fuente conceptual, no copia)
[HCI-2026-G1](https://github.com/juANO2202/HCI-2026-G1) · [Grupo_2__Exposicion](https://github.com/DavidPe1307/Grupo_2__Exposicion) · [Grupo_3_Exposicion](https://github.com/Mauri10G/Grupo_3_Exposicion)
