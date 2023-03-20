const motos = [
    {id: 1, marca: "kawasaki", modelo: "Z400", precio: 11100},
    {id: 2, marca: "kawasaki", modelo: "Ninja 400", precio: 13350},
    {id: 3, marca: "kawasaki", modelo: "Versys 300", precio: 13250},
    {id: 4, marca: "yamaha", modelo: "FZ25", precio: 3700},
    {id: 5, marca: "yamaha", modelo: "MT03", precio: 12200},
    {id: 6, marca: "yamaha", modelo: "R3", precio: 12900},
    {id: 7, marca: "honda", modelo: "CB 250 twister", precio: 3500},
    {id: 8, marca: "honda", modelo: "CB500F", precio: 12900},
    {id: 9, marca: "honda", modelo: "CB500X", precio: 14500},
    {id: 10, marca: "ktm", modelo: "Duke 200 ng", precio: 4500},
    {id: 11, marca: "ktm", modelo: "Duke 390", precio: 11100},
    {id: 12, marca: "ktm", modelo: "RC390", precio: 11500}] 

let continuar = true

function ingreso (){
    let cliente = prompt("Ingrese su nombre");
    alert("Bienvenid@ a GM-motos " +cliente);
    let ingreso2 = confirm("¿Desea ver las marcas con las que trabajamos?")
    if (ingreso2 === true){
        preguntarModelos();
    }else {
        alert("Hasta la proxima "+cliente);
    }
}

const marcas = "Ingresa la marca de motos que desea consultar: \n"+
                        "a) Kawasaki \n"+
                        "b) Yamaha \n"+
                        "c) Honda \n"+
                        "d) Benelli \n"+
                        "e) Ktm \n"

function iniciarConsulta(){
    let seleccion = prompt(marcas).toLowerCase().trim()
    
    if (seleccion !== "kawasaki" && seleccion !== "yamaha" && seleccion !== "honda" && seleccion !== "benelli" && seleccion !== "ktm"){
        alert("Debes ingresar un codigo válido, por favor.")
        return
    }else {
        let motosFiltrado = motos.filter(m => m.marca === seleccion)
        let nombres = [];
        for(i = 0; i<motosFiltrado.length; i++){
            nombres.push(motosFiltrado[i].modelo)
        }
        let modelos = `Tenemos disponibles los siguientes modelos\n ${nombres}`
        alert(modelos);
    }
}

function preguntarModelos(){
    while(continuar){
        iniciarConsulta()
        continuar = confirm ("¿Desea consultar otro marca?")
    }
    alert("Gracias por pasarte por GM-motos, hasta la proxima!!")
}


ingreso();