// 18. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// suma de todos los números naturales hasta ese número utilizando un bucle `do...while`.

// Creo las 3 variables necesarias: el numero hasta el que voy a realizar la suma,
// la sumaTotal que va acumulando cada número y la i para controlar las vueltas
let numero = prompt("Dame un número y te haré la suma de todos los número hasta este: ");
let sumaTotal = 0;
let i = 0;

do {
    sumaTotal += i;
    i++;
} while (i<=numero);

console.log("La suma total es = "+sumaTotal);