function encriptar_texto(palabra){

    if(typeof palabra  !== 'string'){
        throw new Error('La entrada debe ser una cadena de texto');
    }

    palabra = palabra.toLowerCase();

    console.log("Valor guardado:");
    console.log(palabra);

    if(tieneCaracterEspecial(palabra)){
        alert("El texto no debe contener caracteres especiales, por favor intente nuevamente");
        limpiar();
    }else{

    const diccionario = {
        'a': 'ai',
        'e':'enter',
        'i': 'imes',
        'o':'ober',
        'u':'ufat'
    }

    const textoEncriptado = palabra.split('').map(letra => 
        diccionario[letra] || letra).join('');

    console.log("Texto encriptado:");
    console.log(textoEncriptado);
    cambio_estilo();
    asignarTexto('idtexto-otro', textoEncriptado);
    limpiar();
    } 
}

function desencriptar_texto(palabra){

    if(typeof palabra  !== 'string'){
        throw new Error('La entrada debe ser una cadena de texto');
    }

    palabra = palabra.toLowerCase();

    console.log("Valor guardado:");
    console.log(palabra);

    if(tieneCaracterEspecial(palabra)){
        alert("El texto no debe contener caracteres especiales, por favor intente nuevamente");
        limpiar();
    }else{

    const diccionarioInverso = {
        'ai': 'a',
        'enter':'e',
        'imes': 'i',
        'ober':'o',
        'ufat':'u'
    }

    const patron = new RegExp(Object.keys(diccionarioInverso).join('|'), 'g');

    const textoDesEncriptado = palabra.replace(patron, match => diccionarioInverso[match]);

    console.log("Texto encriptado:");
    console.log(textoDesEncriptado);
    cambio_estilo();
    asignarTexto('idtexto-otro', textoDesEncriptado);
    limpiar();
    } 
}


function asignarTexto(elemento, texto){

    let titulo = document.getElementById(elemento);
    titulo.innerHTML = texto;
}

function limpiar(){
    var textarea = document.getElementById('miTextArea');
    textarea.value='';
    textarea.focus();
    let botonCopiar = document.getElementById('idCopiar');
    botonCopiar.textContent="Copiar";
}

function boton_encriptar(){
    var textarea = document.getElementById('miTextArea');

    var texto = textarea.value;
    if (texto != ''){
        encriptar_texto(texto);
    }
    textarea.focus();
}

function boton_desencriptar(){
    var textarea = document.getElementById('miTextArea');

    var texto = textarea.value;
    if (texto != ''){
        desencriptar_texto(texto);
    }
    textarea.focus();
}

function cambio_estilo(){
    var boton = document.getElementById('idCopiar');
    var imagen=document.getElementById("outgoing-imagen");
    boton.removeAttribute('hidden');
    if(imagen.style.display!=="none"){
        imagen.style.display ="none";
    }
    var idtexto_otro = document.getElementById('idtexto-otro');
    idtexto_otro.style.fontSize='1.5em';
    idtexto_otro.style.textAlign='justify';
    idtexto_otro.style.marginTop='2%';    
}


function tieneCaracterEspecial(str) {
    const regex = /[^a-zA-Z0-9\s]/;
    return regex.test(str);
}


function copiar(){
    let idtext = document.getElementById('idtexto-otro');
    let botonCopiar = document.getElementById('idCopiar');
    navigator.clipboard.writeText(idtext.textContent);
    botonCopiar.textContent="Copiado";

}
