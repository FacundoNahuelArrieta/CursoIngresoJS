function mostrar()
{
//tomo la edad  
var edad;

edad = (document.getElementById("edad").value);

//Si la edad esta dentro del rango
/*if ( edad >= 13 & edad <=17 ){

      alert("Es adolecente");

}*/

//Si la edad no esta fuera del rango

if (!(edad <13 || edad >17)){

    alert("Es adolecente");

}

}//FIN DE LA FUNCIÓN