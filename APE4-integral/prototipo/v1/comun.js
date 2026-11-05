/* Datos compartidos del caso IHC-03 · APE 4 v1 */
const VERSION = 'APE v1';
const RUBROS = [['Matrícula ordinaria', 85], ['Seguro estudiantil', 5]];
const METODOS = {
  tarjeta:       { nombre: 'Tarjeta de crédito o débito', comision: 2.50, detalle: 'Se acredita al instante' },
  transferencia: { nombre: 'Transferencia bancaria',      comision: 0.00, detalle: 'Sin comisión · se acredita en minutos' }
};
const usd = n => '$' + n.toFixed(2);
const subtotal = () => RUBROS.reduce((s, r) => s + r[1], 0);
const totalDe = m => subtotal() + METODOS[m].comision;
const qs = new URLSearchParams(location.search);
const metodoActual = () => METODOS[qs.get('metodo')] ? qs.get('metodo') : 'tarjeta';
// Historial: localStorage solo como comodidad del prototipo (puede fallar en modo privado)
function leerHistorial(){ try { return JSON.parse(localStorage.getItem('ape4-historial') || '[]'); } catch(e){ return []; } }
function guardarHistorial(h){ try { localStorage.setItem('ape4-historial', JSON.stringify(h)); } catch(e){} }
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-version]').forEach(e => e.textContent = VERSION);
});
