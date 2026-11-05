# Fase 2 · Prototipo v1 · IHC-03 · Pagar la matrícula

**Base:** `prototipo/base-prueba/` (interfaz de la Prueba Integradora) (resultado de la prueba), corregido con los problemas P1–P5 del [diagnóstico](../../diagnostico.md).
**Responsables:** Martín → `inicio.html` · David → `pago.html`, `styles.css` · Sheyla → `confirmacion.html`, `historial.html`.

## Cómo abrirlo
1. Doble clic en `index.html` (abre `inicio.html`). No necesita instalación ni servidor.
2. **Simulación del banco (Mago de Oz):** tarjeta que termina en **0000** = fondos insuficientes · en **0002** = tarjeta vencida · cualquier otra de 16 dígitos = pago aprobado.
3. Teclado: `Tab` / `Shift+Tab` mueven el foco · `Enter` activa · `Esc` cierra el modal o abre «¿Salir sin pagar?».

## Pantallas y estados (8)
| # | Estado | Dónde | Captura |
|---|---|---|---|
| 1 | Inicio con selector de método | `inicio.html` | `evidencias/v1/01-inicio.png` |
| 2 | Formulario (normal) | `pago.html` | `evidencias/v1/02-formulario.png` |
| 3 | Error en línea (al salir del campo) | `pago.html` | `evidencias/v1/03-error-en-linea.png` |
| 4 | Modal «¿Salir sin pagar?» | `pago.html` | `evidencias/v1/04-modal-salir.png` |
| 5 | Procesando (carga, botón bloqueado) | `pago.html` | `evidencias/v1/05-procesando.png` |
| 6 | Rechazo del banco con causa | `pago.html` | `evidencias/v1/06-rechazo-causa.png` |
| 7 | Comprobante (éxito) | `confirmacion.html` | `evidencias/v1/07-comprobante.png` |
| 8 | Historial de pagos (vacío / con pagos) | `historial.html` | `evidencias/v1/08-historial.png` |

Además: formulario de transferencia sin comisión (`pago.html?metodo=transferencia`, `evidencias/v1/09-transferencia.png`).

## Los 3 flujos
| Flujo | Recorrido | Cómo demostrarlo |
|---|---|---|
| **1 · Éxito** | Inicio → Datos de pago → Procesando → Comprobante → Historial | Tarjeta `4111 1111 1111 1111`, vencimiento futuro, CVV `123`, correo válido |
| **2 · Error de dato** | Formulario → error al salir del campo → corrige → continúa | Escribir 7 dígitos en la tarjeta o un correo sin dominio y pulsar Tab |
| **3 · Rechazo del banco** | Pagar → rechazo con causa → «Corregir y reintentar» o «Pagar por transferencia» | Tarjeta terminada en `0000` (o `0002`) |

**Recuperación sin perder datos:** en los flujos 2 y 3 los campos conservan lo escrito; «Cancelar» o Esc con datos abren el modal y «Seguir pagando» vuelve al mismo campo.

## Lo que pide la guía y dónde está
| La guía pide | En el prototipo |
|---|---|
| ≥ 6 estados distinguibles | 8 estados (tabla de arriba) |
| 3 flujos | Éxito · error de dato · rechazo del banco |
| Normal, carga, error y éxito | Formulario · Procesando · error en línea y rechazo · Comprobante |
| Feedback | Avisos de estado, ✓ en campos válidos, total actualizado, comprobante con correo |
| Microinteracción | Botón «Pagar $X»: se hunde, se bloquea con indicador y anuncia «Procesando» |
| Teclado y foco visibles | Foco amarillo de 3 px, foco en el título al abrir cada pantalla, modal con foco atrapado, Esc, enlace «Saltar al contenido» |

## Técnica y fidelidad (referencia conceptual: G3, no es una copia)
| Decisión | Elegido | Por qué | Alternativa descartada |
|---|---|---|---|
| **Técnica** | **Código (HTML, CSS, JS)** + **Mago de Oz** para el banco | Hay que probar validación real, carga, rechazo y recuperación de datos. Además se versiona en git y se modifica en vivo en la defensa | Figma clic a clic: los errores y estados se dibujan, no reaccionan a lo que escribe el usuario |
| **Alcance** | **Vertical**: la tarea completa de pagar la matrícula, de principio a fin | La prueba busca saber si el becado paga y se recupera de un fallo | Horizontal: todo el portal sin profundidad |
| **Fidelidad visual** | Media | Colores y tipografía sencillos, sin imágenes reales | Alta: pulir no cambia lo que se quiere aprender |
| **Fidelidad de contenido** | Alta | Montos, rubros y mensajes reales del caso | Texto de relleno |
| **Fidelidad de interacción** | Alta | Validación, bloqueo del botón, rechazo con causa, modal, historial | Pantallas fijas enlazadas |
| **Ciclo de vida** | Desechable | Sirve para aprender en la prueba (Fase 3) y corregir en la v2 (Fase 4) | Evolutivo hacia producto |

**Qué no permite probar:** pagos reales ni la conexión con un banco, seguridad de los datos, rendimiento con muchos usuarios, ni el envío real del correo (se simula el mensaje). El historial usa el almacenamiento del navegador y puede vaciarse en modo privado.

## Accesibilidad básica incluida
Etiquetas `<label>` visibles · `aria-describedby` en ayudas y errores · `aria-invalid` · `aria-live` en avisos · `role="dialog"` y `aria-modal` en el modal · error con ⚠ + texto (no solo color) · contraste AA · `prefers-reduced-motion`.
