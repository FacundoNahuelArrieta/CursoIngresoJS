function mostrar() {/*Al presionar el botón pedir números hasta que el usuario quiera,
   sumar los que son positivos y multiplicar los negativos.*/
	//flag
	//es una variable que sirve para saber si el programa paso por un bloque de codigo.


	var flag = 0;
	//var contador=0;
	var positivo = 0;
	var negativo = 1;
	var seguir;
	var numero;


	do {

		numero = parseInt(prompt("Ingrese un numero: "));

		while (isNaN(numero)) {

			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));

		}

		if (numero >= 0) {

			positivo = positivo + numero;

		} else {

			negativo = negativo * numero;

			flag = 1;

		}

		seguir = prompt("Quiere continuar ingresando numeros?");

	} while (seguir == 'si')

	if (flag == 0) {

		negativo = 0;
	}



	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN