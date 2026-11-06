# Conclusiones · APE 4 · IHC-03

## Aprendizajes del equipo
1. **Diagnóstico.** Definir persona, tareas T1–T3, 8 touchpoints y 2 momentos de verdad mostró que la confianza del becado depende del rechazo del banco (MV1) y del comprobante (MV2). Separar desde el inicio el dato medido de la predicción evitó dar por hechas cosas que no se habían probado.
2. **Diseño.** Los 6 requisitos R1–R6 quedaron enlazados con su pantalla, flujo, componente, wireframe y caso de prueba en [`trazabilidad.md`](trazabilidad.md). Ninguna decisión de diseño quedó sin un origen.
3. **Construcción.** Hacer el prototipo en código con un banco simulado (Mago de Oz) permitió probar errores y recuperación reales: validación al salir del campo, rechazo con causa y salida sin perder datos.
4. **Prueba.** P01 y P02 completaron las 6 tareas sin ayuda y dieron 4/5 de seguridad. Aun así, la prueba reveló tres problemas que el equipo no había medido: la dificultad para ingresar la tarjeta (HL-01), la duda al enviar el pago (HL-02) y el foco con contraste de 1,83:1 (HL-03).
5. **Iteración.** Los 3 hallazgos se corrigieron en la v2, cada uno en su propio commit y PR. El contraste del foco está medido (8,55:1). La mejora emocional de la v2 es una predicción que falta confirmar con una nueva prueba.

**Reflexión del grupo.** Aprendimos que diseñar para el usuario no es adivinar lo que necesita, sino observarlo, medir y corregir con evidencia. Predijimos que el rechazo del banco sería el peor momento, pero la prueba mostró que ese momento ya funcionaba y que el problema real era más simple: saber dónde están los datos de la tarjeta y estar seguro de qué se va a cobrar. También aprendimos a coordinarnos con Issues, ramas y revisión cruzada, y a corregir a tiempo errores de organización, como la confusión entre las sesiones de P01 y P02.

## Incidencia sorpresa
*Se completa el día de la defensa.*

| Dato | Registro |
|---|---|
| Qué pidió el docente | |
| Issue de la incidencia | # |
| Qué se modificó y por qué (requisito / heurística) | |
| Archivos | |
| Commit · PR | |
| Prueba de la ruta exitosa | |
| Prueba de la ruta de error | |

## Aporte individual
| Integrante | Contribución demostrable | Issues | PR propios | Revisó |
|---|---|---|---|---|
| **Martín Palacios** (@killer13233) | Diagnóstico de la base y corrección de P1 · requisitos R1–R6, sitemap, navegación y user flow · Inicio v1 con selector de método · protocolo y hoja de observación · facilitó la sesión de P01 · HL-01 (ayuda de la tarjeta) | #1 · #12 · #18 · #23 | #6 · #13 · #21 · #29 | #30 |
| **David Pérez** (@DavidPe1307) | Esqueleto del repo · diagnóstico, curva emocional y evidencias · formulario de pago, estilos, componentes y microinteracción · facilitó la sesión de P02 · resultados de P01 y P02 · HL-02 (revise antes de pagar) · GitHub Pages | #5 · #15 · #19 · #24 | #8 · #17 · #22 · #30 · #33 | #26 · #28 · #31 · #32 |
| **Sheyla Pacha** (@Zzzheyla) | Evidencia de P2–P4 · comprobante e historial · wireframes Lo-Fi y matriz de trazabilidad · anotadora en el protocolo de prueba · hallazgos, heurísticas y accesibilidad · v2 base, HL-03 (foco) · antes/después, curva v1-v2 y trazabilidad final | #2 · #3 · #4 · #14 · #20 · #25 · #27 | #10 · #16 · #26 · #28 · #31 · #32 | #21 · #29 |
