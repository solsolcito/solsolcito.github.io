/*e - enter 
o - ober
i - imes 
a - ai 
u - ufat */

function encrispar () {
    var texto = document.getElementById("inputtexto").value.toLowerCase();



    

    var txtCIfrado = texto.replace(/e/igm, "enter");
    var txtCIfrado = txtCIfrado.replace(/o/igm, "ober");
    var txtCIfrado = txtCIfrado.replace(/i/igm, "imes");
    var txtCIfrado = txtCIfrado.replace(/a/igm, "ai");
    var txtCIfrado = txtCIfrado.replace(/u/igm, "ufat");
    


    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCIfrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";



    
}

function desencrispar () {
    var texto = document.getElementById("inputtexto").value.toLowerCase();

    var txtCIfrado = texto.replace(/enter/igm, "e");
    var txtCIfrado = txtCIfrado.replace(/ober/igm, "o");
    var txtCIfrado = txtCIfrado.replace(/imes/igm, "i");
    var txtCIfrado = txtCIfrado.replace(/ai/igm, "a");
    var txtCIfrado = txtCIfrado.replace(/ufat/igm, "u");
    


    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCIfrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copy(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Se copió")



}