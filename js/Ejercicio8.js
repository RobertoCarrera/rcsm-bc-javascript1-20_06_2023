// 8. Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor
// de ellos

// Creamos las 3 variables que almacenarán los 3 diferentes números
// [En realidad, lo óptimo sería usar arrays y recorrerlo con un for, pero aún no lo hemos dado]

// Creamos la variable que almacenará el número mayor e inmediatamente le asignamos
// el valor de cualquiera de los números
let numero = 0;
let numeroMayor = 0;
// Comprobamos cuál es el mayor comparándolos con un for
for (let i = 0; i < 3; i++) {
    numero = prompt("Dame un número");
    if (numero>numeroMayor) {
        numeroMayor = numero;
    }
}
alert("El mayor número es "+numeroMayor);

5 12 8