function mostrar()
{

	var contador=0;
	var acumulador=0;
	var seguir='si';

	while(seguir == 'si'){

		alert("Hola");

		seguir = prompt("Quiere que lo salude de nuevo?");

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

/*{
	
	//usando do while

	var contador=0;
	var acumulador=0;
	var seguir;

	do{

		alert("Hola");
		
		seguir =prompt("Quiere que lo salude de nuevo?");

	}while(seguir == 'si');
	
	

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
	}*/

/*{	
    var contador=0;
	var acumulador=0;
	var numero;
	var seguir;

	do{

		numero = parseInt(prompt("Ingrese un numero: "));

		acumulador = acumuladorr + numero;

		contador+;

		seguir = prompt("Quiere que lo salude de nuevo?");
	
	}while(seguir == 'si');
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
	}*/
