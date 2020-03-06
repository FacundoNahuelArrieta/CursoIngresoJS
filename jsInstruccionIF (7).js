function mostrar()
{ 
var edad;
var civil;
	
    edad = parseInt(document.getElementById("edad").value);
    civil = document.getElementById("estadoCivil").value;

    if(edad < 18 && civil != "Soltero")
    {

        alert("Es muy pequeño para NO ser soltero");
    }

}