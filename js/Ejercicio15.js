// 15. Escribe un programa que pida al usuario ingresar un año y 
// determine si es bisiesto o no (un año es bisiesto si es divisible entre 4, 
// pero no entre 100, a menos que también sea divisible entre 400).

// Creamos la variable año y almacenamos el año
let ano = prompt("Dime un año y calcularé si es bisiesto");

const calcularBisiesto = (newAño) => {
    // Comprobamos la primera condición. Si el año es divisible entre 4
    // y no lo es por 100
    if((newAño%4 == 0) && (newAño%100 != 0))
    {
        // Si el año es divisible entre 400, no es bisiesto
        if (newAño%400 == 0) {
            console.log(newAño+" no es bisiesto");
        }else{
            // Si no lo es, es bisiesto
            console.log(newAño+" es bisiesto");
        }
    }else{
        // Si no cumpliera la primera condición, no sería bisiesto
        console.log(newAño+" no es bisiesto");
    }
}

calcularBisiesto(ano);