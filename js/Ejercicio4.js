// 4. Declarar una variable llamada "temperaturaCelsius" y asignarle un valor numérico que
// represente una temperatura en grados Celsius. Convertir esa temperatura a grados
// Fahrenheit (usando la fórmula (temperaturaCelsius * 9/5) + 32) y mostrar el resultado en la
// consola.

// Creamos la variable temperaturaCelsius y le damos valor
let temperaturaCelsius = 25.3;
// Asignamos la constante del 9/5 que se necesita para calcular la temperatura
const calculoFarenheit = 9/5;
// Calculamos la temperatura y la guardamos en una variable adecuada
let temperaturaFarenheit = (temperaturaCelsius*calculoFarenheit)+32;
// Imprimos el resultado
console.log(temperaturaCelsius+"ºC = "+temperaturaFarenheit+"ºF");