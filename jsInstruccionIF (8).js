function mostrar()
{
//tomo la edad  

    var edad;
    var estadoCivil;

    edad = parseInt(document.getElementById("edad").value);
    estadoCivil = document.getElementById("estadoCivil").value;

    if(!(edad < 18 && estadoCivil != "Soltero"))
    {

        alert("Es soltero y no es menor");
    }

}

//Tanto los valores de string como los de ID se debe copiar a la pefeccion hasta las mayusculas