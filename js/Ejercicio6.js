// 6. Realiza un programa que solicite al usuario ingresar un 
// número y determine si es par o impar

// Pedimos el número y lo almacenamos
let numero = prompt('Dame un número');
// Comprobamos si es par o impar con el operador de módulo
if(numero%2 == 0)
    {
        // Condición que aparecerá si es par
        alert("El número es par");
    }
    else
    {
        // Condición que aparecerá si es impar
        alert("El número es impar");
    }