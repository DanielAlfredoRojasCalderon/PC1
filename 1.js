// Ejercicio 1: Sumar los números del siguiente array
// [23,4,6,7,99,12,19,8,43,21,65]

let numeros = [23,4,6,7,99,12,19,8,43,21,65];
let suma = 0;
for(let elemento of numeros){
    suma += elemento;
}
console.log(suma)