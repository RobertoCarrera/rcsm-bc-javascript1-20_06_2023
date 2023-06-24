// 25. Escribe un programa que solicite al usuario ingresar una frase y muestre en la consola cada
// palabra de la frase en una línea diferente utilizando un bucle `for...of`

// Variable que almacena la frase
let phrase = prompt("Escríbeme una frase y te la separo en palabras: ");

// For con el que recorro la frase, separo cada palabra y la imprimo
for (let i of phrase.split(" ")) {
    
    console.log(i);
}