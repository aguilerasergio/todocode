var  color = window.prompt("Ingrese un color primario");

switch(color){
    case "rojo":
    console.log("El color rojo es primario.");
    break; 

    case "azul":
    console.log("El color azul es primario.");
    break; 

    case "amarillo":
    console.log("El color amarillo es primario.");
    break;
    
    case "blanco":
    alert("El color blanco no es color primario, un tono.");
    break; 
    
     case "negro":
    alert("El color negro no es color primario, es un tono.");
    break; 

    default:
        console.log("No es color primario.");
  }