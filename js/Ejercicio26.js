// 26. Escribe un programa que solicite al usuario ingresar un número y 
// luego muestre en la consola todos los números pares desde 0 hasta ese 
// número utilizando un bucle `for` y una condición `if`.

// Almaceno el número
let number = prompt("Ingresa un número y te diré todos los números pares desde 0 hasta el mismo número: ");

// Recorro todos los números hasta el indicado y muestros los pares
console.log("Los números pares entre 0 y "+number+" son: ");
for (let i = 0; i <= number; i++) {
    
    if (i%2 == 0) {
        console.log(i);
    }
}