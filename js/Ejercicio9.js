// 9. Escribe un programa que solicite al usuario ingresar un número y determine si es positivo,
// negativo o cero

// Declaramos la variable, pidiendo un número
let numero = prompt("Escribe un número");

// Buscamos primero si el número es negativo
if(numero<0)
{
    alert(`${numero}  es negativo`);
}else{
    // Luego si es positivo
    if(numero>0)
    {
        alert(`${numero}  es positivo`);
    }
    // Y sino ya sólo queda que sea 0
    else{
        alert(`${numero} es 0`);
    }
}