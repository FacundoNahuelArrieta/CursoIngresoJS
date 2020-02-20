function mostrar() {
    //pido el dato

    var clave;

    clave = prompt("ingrese el número clave.");

    //me fijo si el dato es valido

    while (clave != "utn750") {

        //si estoy aca es porque el dato no es valido
        //informo y pido nuevamente

        alert("La clave es incorrecta");

        clave = prompt("Clave incorrecta. Ingrese clave nuevamente");

    }

    /*si llegue a este punto del programa es 
    porque ingresaron la clave valida*/

    alert("Contraseña correcta");

}//FIN DE LA FUNCIÓN
