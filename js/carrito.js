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
const precios = [2.50, 4.20, 1.20, 2.80, 1.20, 2.50, 6.20, 1.90, 4.20, 3.20, 1.80, 3.50];

let totalCompra = 0;
let carrito = document.getElementById("carrito");
let preuFinal = document.getElementById("preuFinal");

let listaCompra = [];

// hago una función para obtener los datos y añadirlos al carrito de la compra
function obtenerDatos(fruta, precio) {
    let cantidad = prompt(`¿Qué cantidad de ${fruta} quieres comprar?`);
    cantidad = parseFloat(cantidad);

    // para indicar si lo que se introduce en el prompt son letras o menor que 0, no sirve.
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Debe introducir una cantidad correcta");
        return; // Terminna la función si la cantidad no es válida
    }

    let calculo = cantidad * precio;
    totalCompra += calculo;

    // Crear un objeto con la información del producto y añadirlo a la lista de compra
    listaCompra.push({ fruta: fruta, precio: precio, cantidad: cantidad, calculo: calculo });

    // Añadir el producto al carrito visualmente
    actualizarCarrito();

    // Actualizar el total de la compra
    preuFinal.innerHTML = totalCompra.toFixed(2) + "€";
}

// hago una funcion para eliminar un elemento del carrito
function eliminarProducto(productoId) {
    for (let i = 0; i < listaCompra.length; i++) {
        let producto = listaCompra[i];
        let productoIdCarrito = producto.fruta.split(' ').join('_'); // Generamos la id del producto

        if (productoIdCarrito === productoId) {
            
            totalCompra -= producto.calculo;//resta del producto que se ha eliminado haciendo click en la basura

            // Eliminar el producto de la lista de compra con splice
            listaCompra.splice(i, 1);

           
            actualizarCarrito();

            // Actualizar el total de la compra
            preuFinal.innerHTML = totalCompra.toFixed(2) + "€";
            break; // Salir del bucle cuando se encuentra el producto
        }
    }
}

// crear función para actualizar el carrito visualmente
function actualizarCarrito() {

    carrito.innerHTML = '';

    for (let i = 0; i < listaCompra.length; i++) {
        let item = listaCompra[i];
        let productoId = item.fruta.split(' ').join('_')
        carrito.innerHTML += `<p id="${productoId}"><i class="fas fa-trash-alt" onclick="eliminarProducto('${productoId}')"></i>${item.fruta} : ${item.precio}€ X ${item.cantidad}kg = ${item.calculo.toFixed(2)}€</p>`
    }
}
