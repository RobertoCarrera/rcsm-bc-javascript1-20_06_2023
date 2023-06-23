// 10. Realiza un programa que solicite al usuario ingresar el día de la semana (como número del
//     1 al 7) y muestre en la consola el nombre del día correspondiente (por ejemplo, 1
//     corresponde a "Lunes", 2 corresponde a "Martes", etc.)

// Creamos la variable semana, que almacenará el número entre 1-7 que el usuario introduzca
let semana = prompt("Pon un número del 1 al 7 para que te dé el día de la semana que corresponde:");

// Ponemos el signo + delante para que lo convierta en un valor numérico
switch (+semana) {
    case 1:
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert("Miércoles");
        break;
    case 4:
        alert("Jueves");
        break;
    case 5:
        alert("Viernes");
        break;
    case 6:
        alert("Sábado");
        break;
    case 7:
        alert("Domingo");
        break;
        // Ponemos la opción default para que cualquier cosa que no sea un número del 1-7, salte por aquí
    default:
        alert("El número tiene que estar entre 1-7");
        break;
}