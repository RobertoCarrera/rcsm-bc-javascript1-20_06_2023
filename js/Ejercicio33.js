// 33. Crea un programa que solicite al usuario ingresar una palabra y 
// luego muestre en la consola la palabra invertida utilizando un bucle 
// `while`, una condición `if` y una variable acumuladora.

let word = prompt("Ingresa la palabra a mostrar de forma invertida: ");
let i = word.length;

while (i>=0) {
    console.log(word[i]);
    i--;
}