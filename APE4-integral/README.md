# APE 4 integradora · Prototipado y validación

**Universidad Técnica de Ambato · FISEI · Software · 5.º nivel · Paralelo B · Interacción Humano–Computador · Grupo 2**

## Equipo
| Nombre | Cuenta GitHub | Issue | Rama |
|---|---|---|---|
| Martín Palacios | [@killer13233](https://github.com/killer13233) | F1: #1 (P1) | `aporte/martin` |
| David Pérez | [@DavidPe1307](https://github.com/DavidPe1307) | F1: #5 (P5) | `aporte/david` |
| Sheyla Pacha | [@Zzzheyla](https://github.com/Zzzheyla) | F1: #2 (P2) · #3 (P3) · #4 (P4) | `aporte/sheyla` |

## Caso asignado
Continuación de la **Prueba Práctica Integradora** (caso *Pagos académicos*, variante B). Se trabaja la tarjeta **IHC-03**. La interfaz de partida es el resultado de la prueba: su versión corregida (v2).

| Elemento | Descripción |
|---|---|
| Tema | Pagos (pagos académicos) |
| Persona | Estudiante becado con presupuesto limitado ([ficha](evidencias/persona-ihc03.png)) |
| Contexto | Paga desde su celular, en el campus, pocos días antes del cierre de matrícula, con prisa y con el dinero justo *(supuesto del equipo)* |
| Tarea crítica | Consultar y pagar la matrícula |
| Restricción | El costo total debe verse antes de aceptar |
| Fallo adicional | Comisión inesperada al final ($90.00 → $92.50). Corregido en la v2 de la prueba; la APE parte de esa v2 |

## Cómo abrir el prototipo
- **v1 (Fase 2):** `prototipo/v1/index.html`, con doble clic · *pendiente*
- **v2 (Fase 4):** `prototipo/v2/index.html`, con doble clic · *pendiente*
- **Base de la prueba (punto de partida):** `prototipo/base-prueba/index.html`, con doble clic. Es la v2 de la prueba integradora con la corrección de P1 (`3701ee9`)
- No necesita instalación ni servidor.

## Avance por fase
| Fase | Estado | Archivos |
|---|---|---|
| 1 · Diagnóstico | ✅ | [diagnostico.md](diagnostico.md) · [recorrido-emocional.csv](recorrido-emocional.csv) · [recorrido-emocional.png](recorrido-emocional.png) · [evidencias/](evidencias/) · [fichas P2–P4](evidencias/fichas-P2-P3-P4.md) |
| 2 · Diseño y construcción | ⏳ | [requisitos.md](requisitos.md) · `sitemap.png` · `user-flow.png` · [componentes.md](componentes.md) · [wireframes/](wireframes/) · [trazabilidad.md](trazabilidad.md) · [prototipo/v1/](prototipo/v1/) |
| 3 · Prueba | ⏳ | [protocolo.md](pruebas/protocolo.md) · [resultados.csv](pruebas/resultados.csv) · [hallazgos.md](pruebas/hallazgos.md) |
| 4 · Iteración | ⏳ | [prototipo/v2/](prototipo/v2/) · [antes-despues.md](iteracion/antes-despues.md) |
| 5 · Defensa | ⏳ | [conclusiones.md](conclusiones.md) |

## Enlaces
- **Issues:** [todas](https://github.com/DavidPe1307/APE4_HCI/issues?q=is%3Aissue) · problemas de la Fase 1: #1 P1 · #2 P2 · #3 P3 · #4 P4 · #5 P5
- **Pull Requests:** [todos](https://github.com/DavidPe1307/APE4_HCI/pulls?q=is%3Apr) · Fase 1: #6 (Martín) · #7 (Sheyla, revertido en #9) · #8 (David)
- **Commits clave · Fase 1:**
  - Martín: `b3cf2b6` diagnóstico de la v2 · `3701ee9` corrección de P1 (en v2)
  - David: `e574614` evidencias · `ed79d22` diagnóstico · `7407afa` curva emocional · `f82e727` enlace P1–P5 con Issues
  - Sheyla: `6ccd268` · `091f0bf` · `28fa190` evidencia de P2–P4 · fichas P2–P4 (este PR)
- [Protocolo](pruebas/protocolo.md) · [Resultados](pruebas/resultados.csv) · [Hallazgos](pruebas/hallazgos.md)
- [Antes/después](iteracion/antes-despues.md) · [Trazabilidad](trazabilidad.md) · [Conclusiones](conclusiones.md)

## Repositorios de referencia (fuente conceptual, no copia)
[HCI-2026-G1](https://github.com/juANO2202/HCI-2026-G1) · [Grupo_2__Exposicion](https://github.com/DavidPe1307/Grupo_2__Exposicion) · [Grupo_3_Exposicion](https://github.com/Mauri10G/Grupo_3_Exposicion)

## Decisiones principales
- **Partir del resultado de la prueba** (la v2 de IHC-03) en lugar de empezar de cero, para iterar sobre evidencia: v1 de la prueba → sesión con P1 (29/10) → v2 → diagnóstico de la APE.
- **Una sola tarjeta (IHC-03)**, porque tiene más datos medidos: P1 necesitó ayuda y no notó la comisión.
- **Predicción y dato medido se distinguen** desde la Fase 1 (`tipo_dato` en el CSV y §6 del diagnóstico).
