
let claves = new Map();

let palabra = "william"

palabra=palabra.toLowerCase();

console.log(palabra);



function encriptar_texto(palabra){
    let nuevaPalabra = '';
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === 'a') {
            nuevaPalabra += 'ai';
        } else if (palabra[i] === 'e') {
            nuevaPalabra += 'enter';
        } else if (palabra[i] === 'i') {
            nuevaPalabra += 'imes';
        } else if (palabra[i] === 'o') {
            nuevaPalabra += 'ober';
        } else if (palabra[i] === 'u') {
            nuevaPalabra += 'ufat';
        } else {
            nuevaPalabra += palabra[i];
        }
    }
    return nuevaPalabra;
}

function asignarTexto(elemento, texto){

    let titulo = document.getElementById(elemento);
    titulo.innerHTML = texto;
}

function boton_encriptar(){
    var textarea = document.getElementById('miTextArea');

    var texto = textarea.value;
    if (texto == ""){
        textarea.focus();
    }else{
        texto = texto.toLowerCase();
        console.log("Valor guardado:");
        console.log(texto);
        var idtexto_resultado =document.getElementById('idtexto-resultado');
        document.getElementById("outgoing-imagen").style.display = "none"; 
        idtexto_resultado.style.display = "none"; 
        
        cambio_estilo();
        var encrip = encriptar_texto(texto);
        console.log("texto encriptado");
        console.log(encrip);
        asignarTexto('idtexto-otro',encrip);

        
    }
    
}

function cambio_estilo(){
    var boton = document.getElementById('idCopiar');
    boton.removeAttribute('hidden');
    var outgoing = document.getElementById('idOutgoing');
    var idtexto_otro = document.getElementById('idtexto-otro');
    idtexto_otro.style.fontSize='1.5em';
    idtexto_otro.style.textAlign='justify';
    idtexto_otro.style.marginTop='2%';    
}