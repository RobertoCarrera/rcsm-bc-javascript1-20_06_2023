// 20. Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
// los números pares desde ese número hasta 0 utilizando un bucle `while`.

// A diferencia del anterior, necesitamos crear una variable que nos almacene el número
// hasta el que vamos a buscar los pares
let number = prompt("Dame un número y te devolveré todos los pares entre 0 y ese número: ");
// Recorremos con un for todos los números e imprimimos los que son pares
for (let i = 0; i <= number; i++) {
    
    if (i%2 == 0) {
        console.log(i);
    }
}