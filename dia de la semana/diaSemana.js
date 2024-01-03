var  diaIngresar = window.prompt("Ingrese una fecha", "mm/dd/yy");

var fecha = new Date(diaIngresar);

var dia = fecha.getDay();
 
var diaSemana;

switch(dia){
   case 0:
      diaSemana = "El dia de la fecha ingresada es, Domingo " ;
      break;
   case 1:
         diaSemana = "El dia de la fecha ingresada es, Lunes " ;
         break;
   case 2:
      diaSemana = "El dia de la fecha ingresada es, Martes " ;
      break; 
   case 3:
         diaSemana = "El dia de la fecha ingresada es, Miercoles " ;
         break; 
   case 4:
            diaSemana = "El dia de la fecha ingresada es, Jueves " ;
            break;
   case 5:
               diaSemana = "El dia de la fecha ingresada es, Viernes " ;
               break;
   case 6:
         diaSemana = "El dia de la fecha ingresada es, Sábado " ;
         break;                         
}
alert(diaSemana);
 

