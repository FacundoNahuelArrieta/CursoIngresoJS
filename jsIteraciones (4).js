function mostrar() {

	var numero = parseInt(prompt("ingrese un número entre 0 y 9"));

	while (!(numero >= 0 && numero <= 9)) {

		numero = parseInt(prompt("Error. Reingrese un numero"));

	}

	document.getElementById("Numero").value;

}//FIN DE LA FUNCIÓN

/*
var numero = prompt("ingrese un número entre 0 y 9");

while (numero <0 || numero >9 || isNaN(numero)){

	numero = parseInt(prompt("ingrese un número entre 0 y 9"));

	document.getElementbyId("Numero").value;
}*/