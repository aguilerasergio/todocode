function generarTabla(){
     var numFilas = document.getElementById("numFilas").value;
     var numColumnas = document.getElementById("numColumnas").value;
     var contenedorTabla = document.getElementById("contenedorTabla");
    contenedorTabla.innerHTML = "";
    
    var tabla = "<table>";

    for (var f=1;f<=numFilas;f++){
        tabla +="<tr>";
       for( var c=1; c<=numColumnas;c++){
          tabla += "<td>MueveCordoba</td>"; 
       }
       tabla += "</tr>";
    } 
    tabla +=  "</table>";
    contenedorTabla.innerHTML = tabla;
    }
