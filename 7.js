// Ejercicio 6:  Calcular el precio total con IVA
// Descripción:  Calcular el precio total de una lista de productos, considerando un IVA del 18%. recorre el siguiente array con un bucle, luego accede al valor del objeto precio y calcula el IVA (multiplicando por el 0.18) luego almacena el un nuevo array y escribe en consola  todos los IVA.
let total = 0;
const products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Mouse", price: 25, category: "Electronics" },
    { name: "Notebook", price: 3, category: "Stationery" },
    { name: "Backpack", price: 50, category: "Accessories" },
    { name: "Headphones", price: 80, category: "Electronics" }
  ];
for(let index in products){
    total += products[index].price * (1 - 0.18);
}
console.log(total);