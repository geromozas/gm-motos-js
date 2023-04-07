const sobreNosotros = document.getElementById("sobreNosotros")
const footer = document.getElementById("copy")
const container = document.getElementById("container")
const categoria = document.getElementsByClassName("titulo")[0].innerHTML;
const carrito = []


// sobreNosotros.textContent = "Sobre nosotros"
footer.innerHTML = "Copyright GM motos - 2022. Todos los derechos reservados."


function cargarMotos(motos){
    container.innerHTML = ""
    if(motos.length > 0){
        let motosFiltrado = motos.filter(moto=>moto.marca===categoria)
        motosFiltrado.forEach((moto) => {
            container.innerHTML += cardMoto(moto)
        })
    }else {
        container.innerHTML = retornoCardErrorHTML()
    }   
}

function cargarCascos(cascos){
    container.innerHTML = ""
    if(cascos.length > 0){
        cascos.forEach((casco) => {
        container.innerHTML += cardCasco(casco)
    })
    }else {
        container.innerHTML = retornoCardErrorHTML()
    }   
}

function cargarGuantes(guantes){
    container.innerHTML = ""
    if(guantes.length > 0){
        guantes.forEach((guante) => {
        container.innerHTML += cardGuante(guante)
    })
    }else {
        container.innerHTML = retornoCardErrorHTML()
    }   
}

if(categoria==="KAWASAKI" || categoria==="YAMAHA" || categoria==="HONDA"  ||categoria==="BENELLI"){
    cargarMotos(motos)
}else if(categoria==="CASCOS"){
    cargarCascos(cascos)
}else if(categoria==="GUANTES"){
    cargarGuantes(guantes)
}else if(categoria === "CARRITO"){
    cargarCarrito(carrito)
}

function clickEnBotonesMoto(){
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
clickEnBotonesMoto()

function agregarAlCarrito(id){
    let resultado = motos.find(moto => moto.id === parseInt(id)) || ''
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
    carrito.forEach((moto) => {
        sumaTotal += moto.precio
    } )
    alert("El importe del carrito es de: us$" +sumaTotal)
}

function cargarCarrito(array){
    recuperarCarrito()
    container.innerHTML = ""
    if(array.length > 0){
        array.forEach((moto) => {
            container.innerHTML += cardMoto(moto)
        })
    }else {
        container.innerHTML = retornoCardErrorHTML()
    }   
}
