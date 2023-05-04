function calcularFactorial(num) {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

let numero = prompt("Introduce un número");

const resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);