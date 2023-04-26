const footer = document.getElementById("copy")
const container = document.getElementById("container")
const categoria = document.getElementsByClassName("titulo")[0].innerHTML;
const total = document.getElementById("total")
const logo = document.getElementsByClassName("logo")
const containerCarrito = document.getElementById("containerCarrito")
const imagenLogo = "./img/GMmotos.jpg"
const carrito = JSON.parse(localStorage.getItem("carritoProductos")) || []

logo.src = imagenLogo
footer.innerHTML = "Copyright GM motos - 2022. Todos los derechos reservados."

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
    cargarProducts()
}

function clickBotonMas(){
    const btnComprar = document.querySelectorAll("button.button.button-outline.button-add")
        for (boton of btnComprar){
            boton.addEventListener("click", (e) => {
                agregarAlCarrito(e.target.id)
            })
            boton.title = "Agregar al carrito";
        }
}
clickBotonMas()

function agregarAlCarrito(id){
    let resultado = productos.find(producto => producto.id === parseInt(id)) || ''
    if (resultado !== undefined){
        carrito.push(resultado)
        console.log("Se agregó el producto", resultado.modelo, "al carrito")
        guardarElCarrito(carrito)
    }
}

function guardarElCarrito(carrito){
    if (carrito.length > 0){
        localStorage.setItem("carritoProductos", JSON.stringify(carrito))
    }
}

function recuperarCarrito(){
    const carritoRecuperado = JSON.parse(localStorage.getItem("carritoProductos"))
    if (carritoRecuperado.length > 0){
        carrito.push(...carritoRecuperado)
    }
}


function cargarCarrito(array){
    containerCarrito.innerHTML = ""
    if(array.length > 0){
        array.forEach((producto) => {
            containerCarrito.innerHTML += cardCarrito(producto)
        })
    }else {
        containerCarrito.innerHTML = retornoCardErrorHTML()
    }   
}
if(containerCarrito){
    cargarCarrito(carrito)
}

function clickBotonMenos(){
    const btnEliminar = document.querySelectorAll("button button-outline button-eliminate")
        for (boton of btnEliminar){
            boton.addEventListener("click", (e) => {
                eliminarProducto(e.target.id)
            })
            boton.title = "Eliminar del carrito";
        }
}
clickBotonMenos()

function actualizarCarrito(){
    let aux = "";
    carrito.forEach((producto) => {
        aux += `<div class="card">
                    <div class="card-image"><img src="${producto.imagen}"></div>
                    <div class="card-model">${producto.modelo}</div>
                    <div class="card-price">us$ ${producto.precio}</div>
                    <div class="card-button">
                        <button onClick = "eliminarDelCarrito("${producto.id})" class="button button-outline button-eliminate" id=" title="Clic para eliminar del carrito">-</button>
                    </div>
                </div>`
    })
    carrito.innerHTML = aux;
}

const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    actualizarCarrito();
}
// function eliminarProducto(id){
//     let resultado = carrito.find(producto => producto.id === parseInt(id)) ||''
//     carrito.splice(carrito.indexOF(producto), 1)
//     actualizarCarrito()
// }

function calcularCarrito(){
    let sumaTotal = 0
    carrito.forEach((producto) => {
        sumaTotal += producto.precio 
    } )
    total.innerHTML = sumaTotal
}
calcularCarrito()