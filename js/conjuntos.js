var cargaPagina = document.addEventListener("DOMContentLoaded",()=>{
    var agregaConjunto = document.getElementById("agregarConjunto");
    var botones = document.querySelector("main");

    agregaConjunto.addEventListener("click",agregarNuevoConjunto);
    for(k=0; k<botones.length; k++)
        botones.childNodes[k].addEventListener("click", operaciones);

    function agregarNuevoConjunto()
    {
        var nodoConjunto = document.createElement("div");
        var textoConjunto = prompt("INGRESA EL CONJUNTO");
        var boleano = true;
        if(textoConjunto.length > 1)
        {
            var temp = textoConjunto.split(" ").join(""); 
            if(temp != "")
                textoConjunto = temp[0];
            else
                textoConjunto = temp;
        }
        if(textoConjunto != "")
        {
            var agregaNodoTexto = document.createTextNode(textoConjunto);
            nodoConjunto.appendChild(agregaNodoTexto);
            nodoConjunto.setAttribute("id",textoConjunto);
            for(i=15; i<botones.childNodes.length-4; i++)
                if(botones.childNodes[i].innerHTML == textoConjunto)
                    boleano = false;
            if(boleano)
                botones.insertBefore(nodoConjunto ,botones.childNodes[botones.childNodes.length-4]);
            else
                alert("NO PUEDE REPETIR EL NOMBRE DEL CONJUNTO FAVOR DE INGRESAR OTRO");
        }
        else
            alert("FAVOR DE INGRESAR UN NOMBRE DE NUEVO");
    }
    function operaciones ()
    {
        switch(this.id)
        {
            case "parentesisAbre":
            break;
            case "parentesisCierra":
            break;
            case "union":
            break;
            case "interseccion":
            break;
            case "complemento":
            break;
            case "universo":
            break;
            case "vacio":
            break;
        }
    }
});