const sobreNosotros = document.getElementById("sobreNosotros")
const footer = document.getElementById("copy")
const container = document.getElementById("container")
const categoria = document.getElementsByClassName("titulo")[0].innerHTML;
const total = document.getElementsByClassName("total")
const logo = document.getElementsByClassName("logo")
const containerCarrito = document.getElementById("containerCarrito")
const imagenLogo = "./img/GMmotos.jpg"
const carrito = JSON.parse(localStorage.getItem("carritoProductos")) || []

logo.src = imagenLogo
// sobreNosotros.innerHTML = "Sobre nosotros"
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


function clickBotonProducts(){
    const btnComprar = document.querySelectorAll("button.button.button-outline.button-add")
        for (boton of btnComprar){
            boton.addEventListener("click", (e) => {
                agregarAlCarrito(e.target.id)
            })
            boton.addEventListener("mousemove", (e)=>{
                let codigo = parseInt(e.target.title = `Agregar al carrito`)
            })
        }
}
clickBotonProducts()

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

function calcularCarrito(){
    let sumaTotal = 0
    carrito.forEach((producto) => {
        sumaTotal += producto.precio
    } )
    total.innerHTML = `total: ${sumaTotal}`
}

function cargarCarrito(array){
    recuperarCarrito()
    calcularCarrito()
    containerCarrito.innerHTML = ""
    if(array.length > 0){
        array.forEach((producto) => {
            containerCarrito.innerHTML += cardProducts(producto)
        })
    }else {
        containerCarrito.innerHTML = retornoCardErrorHTML()
    }   
}
if(containerCarrito){
    cargarCarrito(carrito)
}
