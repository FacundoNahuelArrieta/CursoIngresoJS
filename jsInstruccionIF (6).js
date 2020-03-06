function mostrar()
{
//tomo la edad  
var edad;

edad = (document.getElementById("edad").value);

if ( edad <13 ) {

    alert("Niño");

}

else if (!( edad <13 || edad >17)){

    alert("Es adolecente");

}

else{
    
    alert("Adulto")
}

}//FIN DE LA FUNCIÓN