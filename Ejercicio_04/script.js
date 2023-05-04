let valores = [true, 5, false, "hola", "adios", 2];

// Función para determinar si un valor es un string
function esString(valor) {
  return typeof valor === "string";
}

// Función para determinar si un valor es un número
function esNumero(valor) {
  return typeof valor === "number";
}

// Función para determinar si un valor es un booleano
function esBoolean(valor) {
  return typeof valor === "boolean";
}

// Función para determinar cual de los dos elementos de texto es mayor
function textoMayor() {
  let texto1 = '';
  let texto2 = '';
  valores.forEach(function (valor) {
    if (esString(valor)) {
      if (texto1 === '') {
        texto1 = valor;
      } else if (texto2 === '') {
        texto2 = valor;
      } else {
        if (valor.length > texto1.length) {
          texto2 = texto1;
          texto1 = valor;
        } else if (valor.length > texto2.length) {
          texto2 = valor;
        }
      }
    }
  });
  if (texto1.length > texto2.length) {
    return texto1;
  } else if (texto2.length > texto1.length) {
    return texto2;
  } else {
    return "Los dos textos tienen la misma longitud";
  }
}

// Función para determinar los operadores necesarios para obtener un resultado true y otro resultado false
function operadoresBooleanos() {
  let hayTrue = false;
  let hayFalse = false;
  valores.forEach(function (valor) {
    if (esBoolean(valor)) {
      if (valor) {
        hayTrue = true;
      } else {
        hayFalse = true;
      }
    }
  });
  let operadoresTrue = hayTrue ? "||" : "&&";
  let operadoresFalse = hayFalse ? "&&" : "||";
  return [operadoresTrue, operadoresFalse];
}

// Función para determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
function operacionesNumericas() {
  let numeros = [];
  valores.forEach(function (valor) {
    if (esNumero(valor)) {
      numeros.push(valor);
    }
  });
  if (numeros.length === 2) {
    let suma = 'Suma: '
    suma += numeros[0] + numeros[1];

    let resta = 'Resta: '
    resta += numeros[0] - numeros[1];

    let multiplicacion = 'Multiplicación: '
    multiplicacion += numeros[0] * numeros[1];

    let division = 'División: '
    division += numeros[0] / numeros[1];

    let modulo = 'Modulo: '
    modulo += numeros[0] % numeros[1];

    return [suma, resta, multiplicacion, division, modulo];
  } else {
    return "No hay dos elementos numéricos en el array";
  }
}
console.log("-----------------------------------------");
console.log("El texto mayor es:", textoMayor());
console.log("-----------------------------------------");
console.log("Los operadores para obtener true y false son:", operadoresBooleanos());
console.log("-----------------------------------------");
console.log("El resultado de las operaciones matemáticas es:", operacionesNumericas());
