function calcula(){

  let faborables = document.getElementById("favorables").value;

  let totales = document.getElementById("totales").value;

  if(faborables > 0 && totales > 0 ){
    let res  = faborables / totales;
    alert("La probabilidad es  : "+res.toFixed(3));
    document.getElementById("resultado").innerHTML = res.toFixed(3);
  }else{
      alert("Ingresa las dos cantidades para calcular ");
  }


}
