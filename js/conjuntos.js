var cargaPagina = document.addEventListener("DOMContentLoaded",()=>{
    var agregaConjunto = document.getElementById("agregarConjunto");
    var botones = document.querySelector("main");

    agregaConjunto.addEventListener("click",agregarNuevoConjunto);

    function agregarNuevoConjunto()
    {
        var nodoConjunto = document.createElement("div");
        var textoConjunto = prompt("INGRESA EL CONJUNTO");
        if(textoConjunto.length > 1)
            textoConjunto = textoConjunto[0];
        var agregaNodoTexto = document.createTextNode(textoConjunto);
        nodoConjunto.appendChild(agregaNodoTexto);
        botones.insertBefore(nodoConjunto ,botones.childNodes[botones.childNodes.length-4]);
    }
});