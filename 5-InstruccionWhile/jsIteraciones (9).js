function mostrar() {/*Al presionar el botón pedir números hasta que el usuario quiera, 
   mostrar el número máximo y el número mínimo ingresado.*/


	// declarar variables

	var contador = 0;
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


		}

		else {

			if (numero > maximo)

				maximo = numero;

			if (numero < minimo)

				minimo = numero;

			flag = 1;

		}
		flag = 0;

		respuesta = prompt("Quiere ingresar otro numero?");


	} while (respuesta == 'si');



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
/*

//var contador 0;

var flag = false;

var numero;

//declarar variables

//var respuesta = true;

var respuesta'si';

//while (respuesta = true)

while(respuesta == 'si'){

	   numero = parseInt(prompt("Ingrese un numero: ");

	   respuesta = confirm("Desea ingresar otro numero?")

	   //repuesta = prompt("Desea ingresar otro numero?")

	   //lo que hace es convertir todo en minuscula

	   //respuesta.toLowerCase

	/*if (flag == true || numero > maximo){

		maximo = numero;

	}if(flag == true || numero < minimo){

		minimo = numero
	}*/

/*} if (flag == true) {

		maximo = numero;

		minimo = numero;
	}

	else {

		if (numero > maximo)
		{
			maximo = numero;
		}

		if (numero < minimo)
		{

			minimo = numero;

		}
	}
	flag = false;

	respuesta = confirm("Desea ingresar otro numero?")

document.getElementById("maximo").value = maximo
document.getElementById("minimo").value = minimo
}
*/