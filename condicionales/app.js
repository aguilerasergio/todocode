var numUno = prompt("ingresa el num 1");
var numDos = prompt("ingresa el num 2");

var resta = numUno-numDos;

if(resta>0) {
    console.log("El numero es mayor a 0");
    let imparpar = resta % 2;
    if(imparpar == 0){
       console.log("es par");   
       
    }else{
        console.log("es impar");
    }
    
  
}else{
    console.log("es igual o menor a cero");
}