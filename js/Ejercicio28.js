// 28. Realiza un programa que solicite al usuario ingresar un número y luego 
// muestre en la consola si ese número es primo o no utilizando un bucle `for`, 
// una condición `if` y un contador de divisores.

// Creamo la variable para almacenar el número y el contador de divisores
let numero = prompt("Introduce un número");
let contadorDivisores = 0;

// For para recorrer todos los números desde 1 hasta él mismo
for (let i = 1; i <= numero; i++) {
    // Si el número es divisible entre el controlador del bucle, sumo 1 al contador
    if(numero%i == 0)
    {
        contadorDivisores++;
    }
}

// Como para ser primo, los divisores no pueden ser más que él mismo y 1, 
// osea 2, controlo esto gracias al if
if (contadorDivisores == 2) {
    
    console.log("El número "+numero+" es primo");
}else{

    console.log("El número no es primo");
}