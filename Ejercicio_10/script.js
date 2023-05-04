function esPalindromo(cadena) {
    // Eliminar espacios y convertir a minúsculas
    cadena = cadena.toLowerCase().replace(/\s/g, '');
    // \s detecta espacios y la g (global) lo aplica a todo el string

    // Crear una cadena al revés
    var cadenaAlReves = cadena.split('').reverse().join('');

    // Comparar las dos cadenas
    if (cadena === cadenaAlReves) {
        console.log("La cadena es un palíndromo.");
    } else {
        console.log("La cadena no es un palíndromo.");
    }
}

let texto = prompt("Introduce una cadena de texto");
const resultado = esPalindromo(texto);