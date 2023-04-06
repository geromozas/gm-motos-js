const sobreNosotros = document.getElementById("sobreNosotros")
const footer = document.getElementById("copy")
const container = document.getElementById("container")

// sobreNosotros.textContent = "Sobre nosotros"
footer.innerHTML = "Copyright GM motos - 2022. Todos los derechos reservados."


function cargarMotos(motos){
    container.innerHTML = ""
    if(motos.length > 0){
        motos.forEach((moto) => {
        container.innerHTML += cargarMotos(moto)
    })
    }else {
        container.innerHTML = retornoCardErrorHTML()
    }   
}

function cargarCascos(cascos){
    container.innerHTML = ""
    if(cascos.length > 0){
        cascos.forEach((casco) => {
        container.innerHTML += cargarCascos(casco)
    })
    }else {
        container.innerHTML = retornoCardErrorHTML()
    }   
}

function cargarGuantes(guantes){
    container.innerHTML = ""
    if(guantes.length > 0){
        guantes.forEach((guante) => {
        container.innerHTML += cardGuantes(guante)
    })
    }else {
        container.innerHTML = retornoCardErrorHTML()
    }   
}

cargarMotos(motos)
// cargarCascos(cascos)
// cargarGuantes(guantes)






