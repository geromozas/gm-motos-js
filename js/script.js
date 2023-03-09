let modelos = ""
let continuar = true

const marcas = "Ingresa la marca de motos que desea consultar: \n"+
                        "a) Kawasaki \n"+
                        "b) Yamaha \n"+
                        "c) Honda \n"+
                        "d) Benelli \n"+
                        "e) Ktm \n"

function iniciarConsulta(){
    let seleccion = prompt(marcas).toLowerCase().trim()
    
    if (seleccion !== "a" && seleccion !== "b" && seleccion !== "c" && seleccion !== "d" && seleccion !== "e"){
        alert("Debes ingresar un codigo válido, por favor.")
        return
    }else {
        switch(seleccion){
            case "a":
                modelos = "Tenemos disponibles los siguientes modelos:\n - Z400\n - Ninja 400\n - Versys 300"
                break;
            case "b":
                modelos = "Tenemos disponibles los siguientes modelos:\n - FZ25\n - MT03\n - R3"
                break;
            case "c":
                modelos = "Tenemos disponibles los siguientes modelos:\n - CB 250 twister\n - CB 500F\n - CB 500X"
                break;
            case "d":
                modelos = "Tenemos disponibles los siguientes modelos:\n - Leoncino 250\n - 302S\n - 752S"
                break;
            case "e":
                modelos = "Tenemos disponibles los siguientes modelos:\n - Duke 200\n - Duke 390\n - RC390"
                break;
            default:
                console.error("Algo se rompio. No deberia ver este mensaje");
        }
        alert(modelos);
    }
}

function preguntarPrecios(){
    while(continuar){
        iniciarConsulta()
        continuar = confirm ("¿Desea consultar otro marca?")
    }
}

preguntarPrecios();