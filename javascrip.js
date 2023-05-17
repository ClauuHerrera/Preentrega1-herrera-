
const Usuario = "gaspar129"
const Pass = "373292"

let UsuarioPedido = prompt("ingrese su Usuario")
let passPedido = prompt("ingrese su contraseña")

if ((Usuario == UsuarioPedido)&&(Pass == passPedido)){
    alert("Bienvenido Gaspar que bueno verte")
} else {
    alert("datos incorrectos")
}







var cantidad = parseInt(prompt("ingrese la cantidad de prendas"))
var precio = 2700

function calcularCostoTotal (cantidad,precio){
    var costoTotal = cantidad * precio;
    return costoTotal;
}

var costoTotal = calcularCostoTotal (cantidad,precio);
    console.log ("el costo total es de: " + costoTotal);





for(let i=0;i<3;i++){
    promtp ("ingrese su numero de descuento")
 }if (i == 3) {
   alert("ganaste un 40% de descuento en tu segunda compra")
}
    



var opciones= prompt("ingrese el numero de la opcion")

switch(opciones){
    case 1:
        alert(agregar)
    case 2:
        alert(quitar)
    case 3:
        alert(finalizar)
}