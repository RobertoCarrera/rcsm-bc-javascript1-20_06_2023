// 11. Crea un programa que solicite al usuario ingresar un número y 
// determine si es divisible entre 3

// Creamos la variable que almacenará el número a comprobar
let numero = prompt("Añade un número para realizar la comprobación:");

// Comprobamos que el residuo de la división del número entre 3 es = 0 
// para saber si es divisible. Controlo que si se pone el 0, lo dé por malo
if ((numero % 3 == 0)&&(numero != 0)) {
    alert("El número es divisible entre 3");
} else {
    // Si no lo es, mostramos este texto
    alert("El número no es divisible entre 3");
    }   