let operacion = "";

function muestraperm(){
  document.getElementById("perm").style.display  = "";
  document.getElementById("comb").style.display  = "none";
  document.getElementById("operaciones").style.display  = "";
  document.getElementById("resultado").value  = "0";
  document.getElementById("n").value  = "";
  document.getElementById("r").value  = "";
  document.getElementById("resultado").innerHTML = "Resultado :"
  operacion = 1;

}

function muestracomb(){
  document.getElementById("perm").style.display  = "none";
  document.getElementById("comb").style.display  = "";
  document.getElementById("operaciones").style.display  = "";
  document.getElementById("resultado").value  = "0";
  document.getElementById("n").value  = "";
  document.getElementById("r").value  = "";
  document.getElementById("resultado").innerHTML = "Resultado :"
  operacion = 2;
}

function calcular(){
  let n = document.getElementById("n").value;
  let r = document.getElementById("r").value;
  if(operacion == 1){//permutaciones
    let res = factorial(n) / (factorial(n - r));
    document.getElementById("resultado").innerHTML = "nPr = "+res;
    alert("Resultado :  nPr = "+res);
  }else{//combinaciones
    let res = factorial(n) / (factorial(r)*factorial(n - r));
    document.getElementById("resultado").innerHTML = "nCr = "+res;
    alert("Resultado :  nCr = "+res);
  }

}

function factorial (n) {
	var total = 1;
	for (i=1; i<=n; i++) {
		total = total * i;
	}
	return total;
}
