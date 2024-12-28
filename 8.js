// Ejercicio 8:  Calcular el descuento de los productos
// Descripción: Recorrer el array de productos con un bucle, sumar los precios y calcular el total general. Escribe el resultado en consola
let total = 0;
const products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Mouse", price: 25, category: "Electronics" },
    { name: "Notebook", price: 3, category: "Stationery" },
    { name: "Backpack", price: 50, category: "Accessories" },
    { name: "Headphones", price: 80, category: "Electronics" }
  ];
for(let index in products){
    total += products[index].price;
}
console.log(total);