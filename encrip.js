const clave = {a: "ai", e: "enter", i: "ines", o: "ober", u: "afat"};


//Función que permite encriptar el texto.
                
function encriptador(){

    let textoInicial = document.getElementById("textoInicial").value;

    //Necesario para solicitar texto al usuario
    if (textoInicial.length != 0){

        let textoMinusculas = textoInicial.toLowerCase();
        let textoAcondisionado = textoMinusculas.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let longitud = textoInicial.length;

        let muneco = document.getElementById("muneco");
        let mensaje1 = document.getElementById("mensaje1");
        let mensaje2 = document.getElementById("mensaje2");
        let textoFinal = document.getElementById("textoFinal");

        let textoEncriptado = "";

        for (let i = 0; i < longitud; i++){

            let elemento = textoAcondisionado[i];

            if (elemento in clave){
                textoEncriptado += clave[elemento];
            }

            else {
                textoEncriptado += elemento;
            }                    
        }

        muneco.style.visibility = "hidden";
        mensaje1.textContent = "";
        mensaje2.textContent = "";
        textoFinal.textContent = textoEncriptado;

        /** Las siguintes constantes son necesarios para crear el botón
        "Copiar" y la función "copiarTexto" **/
        const encrip = document.getElementById("encriptar");
        const agregar = document.getElementById("agregarBoton");
        const botonAnterior = document.querySelector(".copiar");
        
        // Si existe el botón anterior, eliminarlo
        if (botonAnterior) {
                agregar.removeChild(botonAnterior);
        }
         agregar.appendChild(boton());
    }

    else {
        Swal.fire({
            title: "Ingresa un texto para encriptar",
            icon: "warning",
            width: "50%",
            padding: "1rem",
            backdrop: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: true,
            stopKeydownPropagation: false, 
            confirmButtonColor: "#0A3871",
        })
    }

}

// Función que permite desencriptar el texto.

function desencriptador(){

    let textoInicial = document.getElementById("textoInicial").value;
    let muneco = document.getElementById("muneco");
    let mensaje1 = document.getElementById("mensaje1");
    let mensaje2 = document.getElementById("mensaje2");

    //Necesario para solicitar texto al usuario
    if (textoInicial.length != 0){
     
        const regex = new RegExp(Object.values(clave).join("|"), "gi");
            textoInicial = textoInicial.replaceAll(regex, match => {
                let i = Object.values(clave).indexOf(match);
                    return Object.keys(clave)[i];
                });

        muneco.style.visibility = "hidden";
        mensaje1.textContent = "";
        mensaje2.textContent = "";
        textoFinal.textContent = textoInicial;

        /** Las siguintes constantes son necesarios para crear el botón
        "Copiar" y la función "copiarTexto" **/
        const desenc = document.getElementById("desencriptar");
        const agregarr = document.getElementById("agregarBoton");
        const botonAnteriorr = document.querySelector(".copiar");
        
            // Si existe el botón anterior, eliminarlo
        if (botonAnteriorr) {
            agregarr.removeChild(botonAnteriorr);
        }
        agregarr.appendChild(boton());
    }
                
    else {
        Swal.fire({
            title: "Ingresa un texto para desencriptar",
            icon: "warning",
            width: "50%",
            padding: "1rem",
            backdrop: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: true,
            stopKeydownPropagation: false, 
            confirmButtonColor: "#0A3871",
        })
    }
}

//La siguiente funcion permite crear un botón.


function boton(){
    const enviar = document.createElement("button");

    enviar.textContent = "Copiar";
    enviar.className = "copiar";
    enviar.onclick = copiarTexto;

    return enviar;
}

//La siguiente función permite copiar el texto encriptado o desencriptado.
function copiarTexto(){
    let textoFinal = document.getElementById("textoFinal");
    textoFinal.select();
    textoFinal.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

