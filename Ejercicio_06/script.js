let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = prompt("Introduce tu número de DNI sin la letra");
let letra = prompt("Introduce la letra de tu DNI en mayúsculas");

if (dni < 0 || dni > 99999999) {
  console.log("El número de DNI introducido no es válido");
} else {
  let letraCalculada = letras[dni % 23];
  if (letraCalculada !== letra) {
    console.log("La letra indicada no es correcta");
  } else {
    console.log("El número y letra de DNI son correctos");
  }
}
