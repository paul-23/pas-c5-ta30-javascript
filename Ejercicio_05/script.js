var numero1 = 5;
var numero2 = 8;

if (numero1 <= numero2) {
  console.log("numerol no es mayor que numero2");
}

if (numero2 > 0) {
  console.log("numero2 es positivo");
}

if (numero1 < 0 || numero1 !== 0) {
  console.log("numerol es negativo O distinto de cero");
}

if (++numero1 <= numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor O igual que numero2");
}