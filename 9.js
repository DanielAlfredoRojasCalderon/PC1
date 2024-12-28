// Ejercicio 8:  Muestra el producto con menor costo 
// Descripción: Recorrer el array de productos con un bucle accede al valor del precio y determina cual de todos es el producto con menor precio y escribe el resultado en consola.
let menor = 0;
const products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Mouse", price: 25, category: "Electronics" },
    { name: "Notebook", price: 3, category: "Stationery" },
    { name: "Backpack", price: 50, category: "Accessories" },
    { name: "Headphones", price: 80, category: "Electronics" }
  ];
for(let index in products){
    (products[index].price <= menor || index == 0) ? menor = products[index].price : menor = menor;
    
}
console.log(menor);