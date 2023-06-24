// 27. Crea un programa que solicite al usuario ingresar un número y 
// luego calcule la suma de todos los números impares desde 1 hasta 
// ese número utilizando un bucle `while` y una condición `if`.

// Creo variables para el número final y para almacenar la suma total de impares
let number = prompt("Dame un número y te daré la suma de todos los impares: ");
let total = 0;

for (let i = 1; i <= number; i++) {
    // Condición que suma el número si el resto de dividir entre 2 no es 0 (impar)
    if (i%2 != 0) {
        
        total += i;
    }
}

console.log("El total de la suma de todos los impares = "+total);