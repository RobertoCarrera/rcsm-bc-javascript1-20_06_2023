// 29. Escribe un programa que solicite al usuario ingresar una palabra y 
// luego cuente y muestre en la consola la cantidad de vocales que tiene 
// la palabra utilizando un bucle `for`, una condición `if` y una variable contador.

// Variables para almacenar la palabra a analizar y las vocales totales
let word = prompt("Escríbeme una palabra y te contaré las vocales: ");
let counter = 0;
// Recorro la palabra
for (let i = 0; i < word.length; i++) {
// Condición lógica de OR con las 5 vocales existentes que suma 1 al contador si se cumple
    if((word[i] == 'a') || (word[i] == 'e') || (word[i] == 'i') || (word[i] == 'o') || (word[i] == 'u')){
        counter++;
    }
}

console.log(word+" tiene "+counter+" vocales");