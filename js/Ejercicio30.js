// 30. Crea un programa que solicite al usuario ingresar un número y luego 
// determine si es un número perfecto (la suma de sus divisores propios es 
//     igual al número) utilizando un bucle `while`, una condición `if` y 
//     una variable acumuladora.

// Creo las variables necesarias
let numero = prompt("Dame un número: ");
let sumaDivisores = 0;
let i = 1;
// Recorro un while con el mínimo en 1 y el máximo en menor que el mismo número
// porque este no hace falta comprobarlo sumarlo
while (i < numero) {
    // Si el numero introducido es divisible entre el valor actual de i, sumo el
    // número a la variable acumuladora
    if(numero%i == 0)
    {
        sumaDivisores += i;
    }
    i++;
}
// En el if compruebo si la variable acumuladora tiene el mismo valor que el número
if(sumaDivisores == numero)
{
    console.log(numero+" es un número perfecto");
}else{
    console.log(numero+" no es un número perfecto porque la suma de sus divisores = "+sumaDivisores);
}