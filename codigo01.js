//Ejercicio 1 version 01

let saldoCuenta = 20000; // este monto preexistente es a modo de ejemplo suponiendo que tiene dinero en su cuenta

let nombreUsuario = prompt ("Ingrese nombre de usuario")
let montoRetiro= parseFloat ( prompt ("Ingrese monto a retirar"))

let saldo= saldoCuenta - montoRetiro

if (montoRetiro >= 1){
    if (saldoCuenta >= montoRetiro) {
       alert ("Retiro exitoso. El saldo final es: $" + saldo)
    }
    else {
    alert ("El saldo es insuficiente. No se puede realizar el retiro. Su saldo es: $" + saldo)
    }
}
else {
    alert (" Monto invalido. Por favor, ingrese un numero valido mayor a 0")
  }