
let claves = new Map();

let palabra = "william"

palabra=palabra.toLowerCase();

console.log(palabra);

if (palabra.includes("x")){
    console.log("Si hay a")
}else{
    console.log("No hay")
}

claves.set("a","enter");
claves.set("e","imes");
claves.set("i","ai");
claves.set("o","ober");
claves.set("u","ufat");

for (let[key, value] of claves){
    console.log(key + " es: " +value);
}

function asignarTexto(elemento, texto){

    let titulo = document.getElementById(elemento);
    titulo.innerHTML = texto;
}

function encriptar(){
    var textarea = document.getElementById('miTextArea');

    var texto = textarea.value;
    if (texto == ""){
        console.log("No hay nada");
    }else{
        texto = texto.toLowerCase();
        console.log("Valor guardado:");
        console.log(texto);
        document.getElementById("outgoing-imagen").style.display = "none"; 
        document.getElementById("idtexto-resultado").style.display = "none"; 
        asignarTexto('idtexto-otro',texto);
        var boton = document.getElementById('idCopiar');
        boton.removeAttribute('hidden');
        var outgoing = document.getElementById('idOutgoing');
        outgoing.style.gap='90%';
        
    }
    
}