// 5. Declarar una variable llamada "precioProducto" y asignarle un valor numérico que
// represente el precio de un producto. Luego, declarar una variable llamada
// "porcentajeDescuento" y asignarle un valor numérico que represente el porcentaje de
// descuento aplicado al producto. Calcular el precio final después del descuento (usando la
// fórmula precioProducto - (precioProducto * porcentajeDescuento / 100)) y mostrar el
// resultado en la consola.

// Declaramos la variable precioProducto con un valor cualquiera
let precioProducto = 5.3;
// Declaramos la variable con el descuento
let porcentajeDescuento = 25;
// Declaramos la variable precioFinal y hacemos el cálculo
let precioFinal = precioProducto - (precioProducto*(porcentajeDescuento/100));

// Mostramos el resultado
console.log("El precio final con descuento es = "+precioFinal);