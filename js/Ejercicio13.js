// 13. Realiza un programa que solicite al usuario ingresar dos números y 
// determine si son iguales o diferentes

// Creamos las dos variables en las que pediremos almacenar el valor
let numero1 = prompt("Ingresa el primer valor");
let numero2 = prompt("Ingresa el segundo valor");

// Utilizo el estrictamente igual para intentar reducir los fallos por 
// el tipo de variable
if(numero1 === numero2)
    {
        alert("Los números introducidos son iguales");
    }else{
        alert("Los números introducidos no son iguales");
    }