/*
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
    prompt ("ingrese su numero de descuento")
 } if (i == 3){
   alert("ganaste un 40% de descuento en tu segunda compra")
}
    



var opciones= prompt("ingrese el numero de la opcion")

switch(opciones){
    case 1:
        alert(agregar)
        break
    case 2:
        alert(quitar)
        break
    case 3:
        alert(finalizar)
        break

*/
const catalogolenceria =['corpiño','Tanga','colaless','Pijama','Body','conjunto'];

catalogolenceria.forEach ((catalogolenceria)=>console.log (catalogolenceria))

const catalogoLenceria = [
    { nombre: 'corpiños', tipo: 'brassiere', precio: 800 },
    { nombre: 'Tanga', tipo: 'panty', precio: 600 },
    { nombre: 'colaless', tipo: 'panty', precio: 700 },
    { nombre: 'Pijama', tipo: 'ropa de dormir', precio: 1500 },
    { nombre: 'Body', tipo: 'enterizo', precio: 3500 }
 ];

let precioxMayor = catalogoLenceria.filter((precio)=>(precio.precio<1000))

    console.log(precioxMayor)


function preciomaximo(min, max) {
    let montoPEDIDO = prompt("Ingrese monto entre $600 y $3500");
   let resultado = [];
    
    if (montoPEDIDO >= min && montoPEDIDO <= max) {
      resultado.push(montoPEDIDO);
      alert("deacuerdo")
    }else{
        alert("los montos se comprenden de $600 a $3500, vuelva a intentar")
    }
    
    return resultado;
  }
 
  const resultado = preciomaximo(600, 3500);
  console.log(resultado);


  const catalogo = [
    { nombre: 'corpiños', tipo: 'brassiere', precio: 800 },
    { nombre: 'Tanga', tipo: 'panty', precio: 600 },
    { nombre: 'colaless', tipo: 'panty', precio: 700 },
    { nombre: 'Pijama', tipo: 'ropa de dormir', precio: 1500 },
    { nombre: 'Body', tipo: 'enterizo', precio: 3500 }
];

let sumadecarrito =catalogo.reduce((acumulador,precio)=>acumulador+1,0)

console.log ("hay en total articulos: " + sumadecarrito)
 


const articulos = [
    {
        id:1,
        nombre:"corpiño",
        tipo:"brassiere",
        precio: 800,
    },
    { 
        id:2,
        nombre:"tanga",
        tipo:"panty",
        precio: 600,
    },
    {
        id:3,
        nombre:"colaless",
        tipo:"panty",
        precio: 700,
    },
    {
        id:4,
        nombre:"pijama",
        tipo:"ropa de dormir",
        precio: 1500,
    },
    {
        id:5,
        nombre:"body",
        tipo:"enterizo",
        precio: 3500,
    }
]

for(let i=0;i<articulos.length;i++) {
    console.log(articulos[i].nombre)
    console.log(articulos[i].precio)
}