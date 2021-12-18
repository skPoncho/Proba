var cargaPagina = document.addEventListener("DOMContentLoaded",()=>{
    var botones = document.getElementById("menu");
    var pantalla = document.querySelector("header");
    var nuevosConjuntos = document.getElementById("agregar");
    var operacion = document.getElementById("calcula");
    var union = document.getElementById("union");
    var interseccion = document.getElementById("interseccion");
    var subconjunto = document.getElementById("subconjunto");
    var limpia = document.getElementById("limpia");
    var borra = document.getElementById("borra");

    operacion.addEventListener("click",operar);
    borra.addEventListener("click",function(){
        pantalla.removeChild(pantalla.childNodes[pantalla.childNodes.length-1]);
    });
    nuevosConjuntos.addEventListener("click",agregarNuevoConjunto);
    limpia.addEventListener("click", limpiaPantalla);

    for(h=0; h<12; h++)
        botones.childNodes[h].addEventListener("click", mostrarOperacion);
    
    setTimeout(function (){
        do
        {
            var ingresa = prompt("INGRESE LOS VALORES DE SU CONJUNTO UNIVERSO SEPARADOS POR COMAS O SI DESEA TERMINAR DEJE EL ESPACIO EN BLANCO");
            ingresa = ingresa.split(" ").join("");
            var revisa = true;
            if(ingresa != "")
            {
                for(rec=0; rec<ingresa.length && revisa; rec++)
                    if((ingresa[rec].charCodeAt()>=48 && ingresa[rec].charCodeAt()<=57)|| ingresa[rec].charCodeAt()==44)
                        revisa = true;
                    else
                        revisa = false;
                if(revisa)
                    botones.childNodes[11].childNodes[2].innerHTML = ingresa;
                else
                    alert("SOLO SE ACEPTAN VALORES NUMERICOS y COMAS");
            }
        }while(ingresa != "");
    }, 10);
    
    function limpiaPantalla()
    {
        while(pantalla.childNodes.length>0)
            pantalla.removeChild(pantalla.childNodes[pantalla.childNodes.length-1]);
    }
    function operar()
    {
        var final = "";
        var complementos;
        var complementos2;
        var universo = botones.childNodes[11];
        var vacio = botones.childNodes[7];
        for(analiza=0; analiza<pantalla.childNodes.length; analiza++)
            pantalla.childNodes[analiza].removeAttribute("id");
        for(a=0; a<pantalla.childNodes.length; a++)
            if(pantalla.childNodes[a].getAttribute("class")  == "¬")
            {
                if(pantalla.childNodes[a-1].getAttribute("class")!="ø" &&  pantalla.childNodes[a-1].getAttribute("class")!="þ")
                {
                    complementos = universo.childNodes[2].innerHTML.split(",");
                    complementos2 = pantalla.childNodes[a-1].childNodes[1].innerText.split(",");
                    final = "";
                    for(u=0; u<complementos.length; u++)
                    {
                        var noCom = true;
                        for(u2=0; u2<complementos2.length && noCom; u2++)
                            if(complementos2[u2] != complementos[u])
                                noCom = true;
                            else
                                noCom = false;
                        if(noCom)
                            final += complementos[u]+",";
                    }
                    pantalla.childNodes[a-1].childNodes[1].innerText = final;
                    pantalla.removeChild(pantalla.childNodes[a]);
                    a-=1;
                }
                else if(pantalla.childNodes[a-1].getAttribute("class")=="ø")
                {
                    var cloneUni = universo.cloneNode(true);
                    if(a==pantalla.childNodes.length-1)
                    {
                        pantalla.removeChild(pantalla.childNodes[a]);
                        pantalla.removeChild(pantalla.childNodes[a-1]);
                        pantalla.appendChild(cloneUni);
                        a-=1;
                    }
                    else
                    {
                        pantalla.insertBefore(cloneUni, pantalla.childNodes[a+1]);
                        pantalla.removeChild(pantalla.childNodes[a]);
                        pantalla.removeChild(pantalla.childNodes[a-1]); 
                        a-=1;
                    }
                }
                else//UNIVERSO
                {
                    var cloneUni = vacio.cloneNode(true);
                    if(a==pantalla.childNodes.length-1)
                    {
                        pantalla.removeChild(pantalla.childNodes[a]);
                        pantalla.removeChild(pantalla.childNodes[a-1]);
                        pantalla.appendChild(cloneUni);
                        a-=1;
                    }
                    else
                    {
                        pantalla.insertBefore(cloneUni, pantalla.childNodes[a]);
                        pantalla.removeChild(pantalla.childNodes[a-1]);
                        pantalla.removeChild(pantalla.childNodes[a+1]); 
                        a-=1;
                    }
                }
            }
        complementos = "";
        complementos2 = "";
        final = "";
        for(res=0; res<pantalla.childNodes.length; res++)
            switch(pantalla.childNodes[res].getAttribute("class"))
            {
                case "µ":
                    if(pantalla.childNodes[res+1].getAttribute("class")=="þ" || pantalla.childNodes[res+1].getAttribute("class")=="þ")
                    {
                        pantalla.insertBefore(universo, pantalla.childNodes[res-1]);
                        pantalla.removeChild(pantalla.childNodes[res-1]);
                    }
                    complementos = pantalla.childNodes[res-1].childNodes[1].innerText.split(",");
                    complementos2 = pantalla.childNodes[res+1].childNodes[1].innerText.split(",");
                    for(c=0; c<complementos.length && complementos[c] != ""; c++)
                        for(d=0; d<complementos2.length && complementos2[d] != ""; d++)
                            if(complementos[c] == complementos2[d])
                                complementos2[d] = "";
                    for(c=0; c<complementos.length; c++)
                        final += complementos[c]+",";
                    for(d=0; d<complementos2.length && complementos2[d] != ""; d++)
                        final += complementos2[d]+",";
                    pantalla.childNodes[res-1].childNodes[1].innerText = final;
                    pantalla.removeChild(pantalla.childNodes[res+1]);
                    pantalla.removeChild(pantalla.childNodes[res]);
                    res -= 1;
                break;
                case "Ŋ":
                    complementos = pantalla.childNodes[res-1].childNodes[1].innerText.split(",");
                    complementos2 = pantalla.childNodes[res+1].childNodes[1].innerText.split(",");
                    for(c=0; c<complementos.length && complementos[c] != ""; c++)
                        for(d=0; d<complementos2.length && complementos2[d] != ""; d++)
                            if(complementos[c] == complementos2[d])
                            {
                                final += complementos2[d]+",";
                                complementos2[d] = "";
                                complementos[c] = "";
                            }
                    pantalla.childNodes[res-1].childNodes[1].innerText = final;
                    pantalla.removeChild(pantalla.childNodes[res+1]);
                    pantalla.removeChild(pantalla.childNodes[res]);
                    res -= 1;
                break;
                case "¢":
                    complementos = pantalla.childNodes[res-1].childNodes[1].innerText.split(",");
                    complementos2 = pantalla.childNodes[res+1].childNodes[1].innerText.split(",");
                    var evaluaSub = true;
                    if(complementos.length <= complementos2.length)
                        for(d=0; d<complementos2.length && complementos2[d] != "" && evaluaSub; d++)
                            for(c=0; c<complementos.length && complementos[c] != "" && evaluaSub; c++)
                                if(complementos[c] == complementos2[d])
                                {
                                    evaluaSub = true;
                                    complementos2[d] = "";
                                    complementos[c] = "";
                                    d+=1;
                                }
                                else
                                    evaluaSub = false;
                    else
                        evaluaSub = false;      
                    if(evaluaSub)
                        pantalla.childNodes[res-1].childNodes[1].innerText = "ES SUBCONJUNTO";
                    else
                        pantalla.childNodes[res-1].childNodes[1].innerText = "NO ES SUBCONJUNTO";
                    pantalla.removeChild(pantalla.childNodes[res+1]);
                    pantalla.removeChild(pantalla.childNodes[res]);
                    res -= 1;
                break;
            }
                
    }
    function mostrarOperacion()
    {
        var nuevoNodo = this.cloneNode(true);
        pantalla.appendChild(nuevoNodo);
        switch(this.id)
        {
            case "union":
                interseccion.setAttribute("disabled", "true");
                union.setAttribute("disabled", "true");
                subconjunto.setAttribute("disabled", "true");
                nuevoNodo.setAttribute("class", "µ");
            break;
            case "interseccion":
                interseccion.setAttribute("disabled", "true");
                union.setAttribute("disabled", "true");
                subconjunto.setAttribute("disabled", "true");
                nuevoNodo.setAttribute("class", "Ŋ");
            break;
            case "subconjunto":
                interseccion.setAttribute("disabled", "true");
                union.setAttribute("disabled", "true");
                subconjunto.setAttribute("disabled", "true");
                nuevoNodo.setAttribute("class", "¢");
            break;
            case "universo":
                nuevoNodo.setAttribute("class", "þ");
            break;
            case "complemento":
                nuevoNodo.setAttribute("class", "¬");
            break;
            default://vacio
                nuevoNodo.setAttribute("class", "ø");
            break;
        }
    }
    function llenarConjunto()
    {
        do
        {
            var ingresa = prompt("INGRESE LOS VALORES DE SU CONJUNTO SEPARADOS POR COMAS O SI DESEA TERMINAR DEJE EL ESPACIO EN BLANCO");
            ingresa = ingresa.split(" ").join("");
            var revisa = true;
            var nuevoNodoHeader;
            if(ingresa != "")
            {
                for(rec=0; rec<ingresa.length && revisa; rec++)
                    if((ingresa[rec].charCodeAt()>=48 && ingresa[rec].charCodeAt()<=57)|| ingresa[rec].charCodeAt()==44)
                        revisa = true;
                    else
                        revisa = false;
                if(revisa)
                    this.childNodes[1].innerHTML = ingresa;
                else
                    alert("SOLO SE ACEPTAN VALORES NUMERICOS y COMAS");
            }
        }while(ingresa != "");
        nuevoNodoHeader = this.cloneNode(true);
        pantalla.appendChild(nuevoNodoHeader);
        if(this.id != "universo")
        {
            var temp = this.innerHTML[0];
            nuevoNodoHeader.setAttribute("class", temp.toUpperCase());
        }
    }
    function agregarNuevoConjunto()
    {
        console.log("ENTRA");
        var nodoConjunto = document.createElement("div");
        var textoConjunto = prompt("INGRESA EL CONJUNTO");
        var boleano = true;
        if(textoConjunto.length > 1)
        {
            var temp = textoConjunto.split(" ").join(""); 
            if(temp != "")
                textoConjunto = temp[0].toUpperCase();
            else
                textoConjunto = temp;
        }
        if(textoConjunto != "")
        {
            var agregaNodoTexto = document.createTextNode(textoConjunto+"={");
            var parrafo = document.createElement("p");
            parrafo.appendChild(document.createTextNode(""));
            nodoConjunto.appendChild(agregaNodoTexto);
            nodoConjunto.appendChild(parrafo);
            nodoConjunto.appendChild(document.createTextNode("}"));
            nodoConjunto.addEventListener("click", llenarConjunto);
            for(j=0; j<botones.childNodes.length; j++)
                if(botones.childNodes[j].innerHTML == textoConjunto)
                    boleano = false;
            if(boleano)
                botones.appendChild(nodoConjunto);
            else
                alert("NO PUEDE REPETIR EL NOMBRE DEL CONJUNTO FAVOR DE INGRESAR OTRO");
        }
        else
            alert("FAVOR DE INGRESAR UN NOMBRE DE NUEVO");
    }
});