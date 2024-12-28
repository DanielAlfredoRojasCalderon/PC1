// Ejercicio 4: Calcular el promedio de N números
// Descripción: Ingresa los números que desees y debes  almacenarlos en un array, luego recorre el array para sumar todos sus elementos y dividirlo entre el número de elementos que ingresaste, debes de escribir  en consola el promedio

let numeros = [];
let n = 0;
let suma =0;
let i = 0;
let consulta ="";
do{
    n = parseInt(prompt("Ingrese un número"));
    suma += n;
    i++;
    consulta = prompt("Desea continuar (S/N): ")
    
}while(consulta == "S")

console.log("El promedio de los números es " + suma/i)
