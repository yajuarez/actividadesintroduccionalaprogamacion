
//  let numero = prompt("Ingrese un numero:");

// if (numero % 2 === 0) {
//     console.log("El numero ingresado es par.");
// } else {
//     console.log("El numero ingresado es impar.");
// }


//Ejercicio 1

let saldoCuenta = 20000; // este monto preexistente es a modo de ejemplo suponiendo que tiene dinero en su cuenta

let nombreUsuario = prompt ("Ingrese nombre de usuario")
let montoRetiro= parseFloat ( prompt ("Ingrese monto a retirar"))

let saldo= saldoCuenta - montoRetiro

if (saldoCuenta >= montoRetiro) {
    console.log ("Retiro exitoso. El saldo final es: $" + saldo)
}
else {
    console.log ("El saldo es insuficiente. El saldo es: $" + saldo)
}