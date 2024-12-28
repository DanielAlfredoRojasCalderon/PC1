// Ejercicio 6:  Validar contraseñas de un array
// var passwords = [ ‘’Fran202455”, “test”,”idat”,”IdatJavascript2024”,”enero”]
// Descripción: Pedir al usuario una contraseña y verificar si cumple con ciertas condiciones (mínimo 10 caracteres).
let password = prompt("Ingrese una contraseña")
let caracteres = password.length;
(caracteres < 10 ) ? console.log("Contraseña no cumple con las condiciones, debe tener minimo 10 caracteres") : console.log("Constraseña valida")

