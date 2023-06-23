// 14. Crea un programa que solicite al usuario ingresar un número del 1 al 12 y muestre en la
// consola el nombre del mes correspondiente (por ejemplo, 1 corresponde a "Enero", 2
// corresponde a "Febrero", etc.).

// Creamos la variable mes, que almacenará el número entre 1-12 que el usuario introduzca
let mes = prompt("Pon un número del 1 al 12 para que te dé el mes que corresponde:");

// Ponemos el signo + delante para que lo convierta en un valor numérico
switch (+mes) {
    case 1:
        alert("Enero");
        break;
    case 2:
        alert("Febrero");
        break;
    case 3:
        alert("Marzo");
        break;
    case 4:
        alert("Abril");
        break;
    case 5:
        alert("Mayo");
        break;
    case 6:
        alert("Junio");
        break;
    case 7:
        alert("Julio");
        break;
    case 8:
        alert("Agosto");
        break;
    case 9:
        alert("Septiembre");
        break;
    case 10:
        alert("Octubre");
        break;
    case 11:
        alert("Noviembre");
        break;
    case 12:
        alert("Diciembre");
        break;
        // Ponemos la opción default para que cualquier cosa que no sea un número del 1-12, salte por aquí
    default:
        alert("El número tiene que estar entre 1-12");
        break;
}