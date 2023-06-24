//17. Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
//los números pares desde 2 hasta ese número utilizando un bucle `while`.

// Creo la variable que pregunta y guarda el número hasta el que comprobaremos
let numero = prompt("Dame un número y te diré todos los pares hasta este");
// Imprimo un mensaje antes para saber el número tope a comprobar
console.log("Los números pares entre 0 y "+numero+" son: ");
// Recorro todos los números hasta el mismo introducido, para comprobar si también lo es
for (let i = 0; i <= numero; i++) {
    // Sólo lo muestro si el residuo dividido entre 2 es 0
    if(i%2 == 0)
    {
        console.log(i);
    }
}