let operacion = "" 

function mdist_geom(){
  //document.getElementById("distgeom").style.display  = "";
  //document.getElementById("distbinomial").style.display  = "none";
  //document.getElementById("disthipergeometrica").style.display  = "none";
  //document.getElementById("distpoisson").style.display  = "none";
  document.getElementById("operaciones").style.display  = "";
  document.getElementById("resultado").value  = "0";
  document.getElementById("p").value  = "";
  document.getElementById("x").value  = "";
  document.getElementById("resultado").innerHTML = "Resultado :"
  operacion = 1;

}

  function mdist_binomial(){
  /*document.getElementById("distgeom").style.display  = "none";
  document.getElementById("distbinomial").style.display  = "";
  document.getElementById("disthipergeometrica").style.display  = "none";
  document.getElementById("distpoisson").style.display  = "none";*/
  document.getElementById("operaciones").style.display  = "";
  document.getElementById("resultado").value  = "0";
  document.getElementById("p").value  = "";
  document.getElementById("q").value  = "";
  document.getElementById("n").value  = "";
  document.getElementById("x").value  = "";
  document.getElementById("resultado").innerHTML = "Resultado :"
  operacion = 2;
  
}

  function mdist_hipergeometrica(){
  /*document.getElementById("distgeom").style.display  = "none";
  document.getElementById("distbinomial").style.display  = "none";
  document.getElementById("disthipergeometrica").style.display  = "";
  document.getElementById("distpoisson").style.display  = "none";*/
  document.getElementById("operaciones").style.display  = "";
  document.getElementById("resultado").value  = "0";
  document.getElementById("M").value  = "";
  document.getElementById("r").value  = "";
  document.getElementById("n").value  = "";
  document.getElementById("x").value  = "";
  document.getElementById("resultado").innerHTML = "Resultado :"
  operacion = 3;
}

 function mdist_poisson(){
  /*document.getElementById("distgeom").style.display  = "none";
  document.getElementById("distbinomial").style.display  = "none";
  document.getElementById("disthipergeometrica").style.display  = "none";
  document.getElementById("distpoisson").style.display  = "";*/
  document.getElementById("operaciones").style.display  = "";
  document.getElementById("resultado").value  = "0";
  document.getElementById("M").value  = "";
  document.getElementById("x").value  = "";
  document.getElementById("resultado").innerHTML = "Resultado :"
  operacion = 4; 
}

function calcular(){
 
	if(operacion == 1){//dist_geom
   let x = document.getElementById("x").value;
   let p = document.getElementById("p").value;
   let resul = (Math.pow((1-p),x-1));
    document.getElementById("resultado").innerHTML = "Resultado = "+resul;
    alert("Resultado = "+resul);
	}
	else if(operacion == 2){//dist_binomial
	let x = document.getElementById("x").value;
        let p = document.getElementById("p").value;
	let n = document.getElementById("n").value;
	let q = document.getElementById("q").value;
	let resul = fact(n)/(fact(n-x)*fact(x))*Math.pow(p,x)*Math.pow(1-p,n-x);
    	document.getElementById("resultado").innerHTML = "Resultado = "+resul;
    	alert("Resultado = "+resul);
	
	
  }
    else if(operacion == 3){//dist_hipergeometrica
        let x = document.getElementById("x").value;
	let M = document.getElementById("M").value;
	let n = document.getElementById("n").value;
	let r = document.getElementById("r").value;
    let res = ( ( fact(r)/(fact(r-x))*((fact(M-r)/((fact(n-x)-x)))/(fact(M)/fact(n-x)))));
    document.getElementById("resultado").innerHTML = "nCr = "+res;
    alert("Resultado :  nCr = "+res);

 }


    else if(operacion == 4){//dist_pssion
	let x = document.getElementById("x").value;
	let M = document.getElementById("M").value;
	let res = Math.exp(-M)*Math.pow(M,x)/(fact(x));
 document.getElementById("resultado").innerHTML = "nCr = "+res;
    alert("Resultado :  nCr = "+res);
}

}




function fact (n) {
	var total = 1;
	for (i=1; i<=n; i++) {
		total = total * i;
	}
	return total;

}



