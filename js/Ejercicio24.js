// 24. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// suma de todos los dígitos del número utilizando un bucle `while`.

// Creamos la variable que almacene el número, la del total de la suma y la de control
// de iteraciones
let number = prompt("Dame un número y te haré la suma de todos los dígitos de este número: ");
let total = 0;
let i = 0;

// Recorremos la totalidad del número con un while
while (i<number.length) {
    // Acumulamos el total de la suma y ponemos el + antes de number para que lo trate como un
    // número y no una array
    total += +number[i];
    i++;
}

console.log("El total de la suma de los dígitos de "+number+" = "+total);