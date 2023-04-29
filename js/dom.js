const footer = document.getElementById("copy")
const container = document.getElementById("container")
const categoria = document.getElementsByClassName("titulo")[0].innerHTML;
const total = document.getElementById("Total")
const logo = document.getElementsByClassName("logo")
const containerCarrito = document.getElementById("containerCarrito")
const imagenLogo = "./img/GMmotos.jpg";
let carrito = JSON.parse(localStorage.getItem("carritoProductos")) || []
const carritoVacio = document.getElementById("carritoVacio")
const URL = "../js/products.json"
const productos = []

logo.src = imagenLogo
footer.innerHTML = "Copyright GM motos - 2022. Todos los derechos reservados."

function obtenerProductos(){
    fetch(URL)
    .then(response => response.json())
    .then(data => productos.push(...data))
    .then(() => cargarProducts(productos))
    .catch(error => console.log(error))
}

function cargarProducts(){
    container.innerHTML = ""
    if(productos.length > 0){
        let productosFiltrado = productos.filter(producto => producto.categoria === categoria)
        productosFiltrado.forEach((producto)=>{
            container.innerHTML += cardProducts(producto)
        })
    }
}
if(container){
    obtenerProductos()
}

function clickBotonMas(id){
    agregarAlCarrito(id)
}

function alertaCarrito() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se ha agregado al carrito',
        showConfirmButton: false,
        timer: 1000
    })
}

function agregarAlCarrito(id){
    let resultado = productos.find(producto => producto.id === parseInt(id)) || ''
    if (resultado !== undefined){
        carrito.push(resultado)
        guardarElCarrito(carrito)
        alertaCarrito()
    }
}

function guardarElCarrito(carrito){
    localStorage.setItem("carritoProductos", JSON.stringify(carrito))
}

function cargarCarrito(array){
    containerCarrito.innerHTML = ""
    if(array.length > 0){
        array.forEach((producto) => {
            containerCarrito.innerHTML += cardCarrito(producto)
        }) 
    }else {
        containerCarrito.innerHTML = cardCarritoVacio()
    }
    calcularCarrito()   
}
if(containerCarrito){
    cargarCarrito(carrito)
}

function actualizarCarrito(){
    let aux = "";
    carrito.forEach((producto) => {
        aux += cardCarrito(producto)
    })
    containerCarrito.innerHTML = aux;
    calcularCarrito()
}

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    let indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    console.log('carrito actualizado',carrito);
    actualizarCarrito();
    guardarElCarrito(carrito);
}

function calcularCarrito(){
    let sumaTotal = 0
    carrito.forEach((producto) => {
        sumaTotal += producto.precio 
    } )
    total.innerHTML = sumaTotal
}

function alertCompra(){
    Swal.fire(
        'Muchas gracias por su compra',
        'Recibira su factura por vía mail',
    )
}

function vaciarCarrito(){
    carrito.splice(0, carrito.length);
    localStorage.removeItem("carritoProductos")
    actualizarCarrito()
}

function finalizarCompra(){
    alertCompra()
    carrito.splice(0, carrito.length);
    localStorage.removeItem("carritoProductos")
    actualizarCarrito()
}