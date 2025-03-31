/*
Hay que programar un carrito de compra de fruta.

El cliente eligirá que fruta quiere haciendo click sobre la imagen.
Un mensaje emergente le preguntará qué cantidad quiere.

Esta información se mostrará a la derecha, bajo "Total carrito", 
en <p id="carrito"></p>, de esta forma:
 Kiwi 2 kg x 4,20€/kg = 8,40 €

El total se actualizará con cada compra
 Total Compra: 8,40€
 
Se dará la opción de añadir o no más productos que se mostrarán
a continuación de los anteriores, y se sumará todo en el total. 
Por ejemplo:  
 Kiwi 2 kg x 4, 20€/kg = 8, 40€
 Pomelo 1 kg x 2,50€/kg = 2,50€
 Total Compra: 10,90€

Puedes modificar el código facilitado si ello te ayuda con el ejercicio,
pero deberás justificarlo.

Recuerda la importancia comentar con detalle el código.

 Lo importante es el cálculo, no los estilos css
 */
// Array para guardar los productos seleccionados
const productos = ["Pomelo", "Kiwi", "Limón", "Piña", "Sandía", "Aguacate", "Fresón", "Mandarina", "Manzana Fuji", "Plátanos", "Pera", "Manzana Golden"];
const precios = [2.50, 4.20, 1.20,2.80, 1.20,2.50,6.20, 1.90 ,4.20,3.20, 1.80, 3.50]

let totalCompra = 0

let carrito = document.getElementById("carrito")
let preuFinal = document.getElementById("preuFinal")
let listaCompra = [
    { fruta: "Pomelo", precio: 2.50 },
    { fruta: "Kiwi", precio: 4.20 },
    { fruta: "Limón", precio: 1.20 },
    { fruta: "Piña", precio: 2.80 },
    { fruta: "Sandía", precio: 1.20 },
    { fruta: "Aguacate", precio: 2.50 },
    { fruta: "Fresón", precio: 6.20 },
    { fruta: "Mandarina", precio: 1.90 },
    { fruta: "Manzana Fuji", precio: 4.20 },
    { fruta: "Plátanos", precio: 3.20 },
    { fruta: "Pera", precio: 1.80 },
    { fruta: "Manzana Golden", precio: 3.50 }
  ];


function obtenerDatos(fruta, precio, unidad) {
    console.log(fruta, precio, unidad)
    let cantidad = prompt(`¿Qué cantidad de ${fruta} quieres comprar?`)
    console.log(cantidad * precio)
    cantidad = parseFloat(cantidad)

    if (cantidad <= 0) {
        alert("Debe introducir una cantidad correcta")
        return //para que acabe la función
    } 
    
    let calculo = cantidad * precio
    totalCompra += calculo
    listaCompra.push(fruta, precio, cantidad )
    console.log(listaCompra)

   
    carrito.innerHTML += `<p> <i class="fas fa-trash-alt"></i> ${fruta} : ${precio}€ X ${cantidad}/${unidad} = ${calculo.toFixed(2)}€</p>`
    preuFinal.innerHTML = totalCompra.toFixed(2) + "€"
}

listaCompra.push(carrito.innerHTML)
console.log (listaCompra)

    

function eliminarCompra (){

}
