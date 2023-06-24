// 21. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// multiplicación de todos los números enteros positivos menores o iguales a ese número
// utilizando un bucle `do...while`.

// Creamos las 2 variables necesarias para controlar el do-while y la variable para
// controlar el resultado: l número final, el inicial desde 1 y la que acumulará el resultado
let number = prompt("Dame un número y te daré todos los números del 1 hasta este, multiplicados: ");
let total = 1;
let i = 1;

do {
    // Expresión que resume el "total = total * i"
    total *= i;
    i++;
} while (i<=number);

console.log("La multiplicación de todos los números hasta "+number+" es = "+total);