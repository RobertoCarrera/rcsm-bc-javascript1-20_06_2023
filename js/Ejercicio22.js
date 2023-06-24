// 22. Escribe un programa que solicite al usuario ingresar una palabra y muestre en la consola
// cada letra de la palabra en una línea diferente utilizando un bucle `for`.

// Variable para almacenar la palabra
let word = prompt("Dame una palabra y te mostraré las letras sueltas: ");

// For para recorrerla caracter a caracter y mostrándolo
for (let i = 0; i < word.length; i++) {
    
    console.log(word[i]);
}