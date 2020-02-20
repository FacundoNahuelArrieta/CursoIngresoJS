function mostrar() {/*Al presionar el botón pedir números hasta que el usuario quiera, 
   mostrar el número máximo y el número mínimo ingresado.*/


	// declarar variables

	//var contador= 0;
	var flag = 0;
	var respuesta;
	var numero;
	var maximo;
	var minimo;

	do {
		//pido el dato
		numero = parseInt(prompt("Ingrese un numero: "));
		//me fijo que el dato sea valido
		while (isNaN(numero)) {


			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));

			//me fijo si maximo o minimo

		} if (flag == 0) {

			maximo = numero;

			minimo = numero;

			flag = 1;
		}

		else {

			if (numero > maximo)

				maximo = numero;

			if (numero < minimo)

				minimo = numero;

			flag = 0;

		}while (respuesta == 'si');
		
	
    	respuesta = prompt("Quiere ingresar otro numero?");

		
	}while(respuesta == 'si');



	document.getElementById("maximo").value = maximo
	document.getElementById("minimo").value = minimo

}//FIN DE LA FUNCIÓN

/* var flag = 0;
	var respuesta;
	var numero;
	var maximo;
	var minimo;

	do {
		//pido el dato
		numero = parseInt(prompt("Ingrese un numero: "));
		//me fijo que el dato sea valido
		while (isNaN(numero)) {


			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));

			//me fijo si maximo o minimo*/
