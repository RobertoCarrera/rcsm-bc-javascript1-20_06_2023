// 12. Escribe un programa que solicite al usuario ingresar su calificación 
// en un examen y muestre en la consola si ha aprobado 
// (calificación mayor o igual a 70) o no.

// Creamos la variable que almacenará la nota
let calificacion = prompt("Dime tu nota (0-100)");

// Comprobamos si es mayor o igual que 70
if(calificacion >= 70)
    {
        // Si es que sí, imprimimos lo siguiente
        console.log("¡Aprobado!");
    }else{
        // Sino, esto otro
        console.log("Suspendido :(");
    }