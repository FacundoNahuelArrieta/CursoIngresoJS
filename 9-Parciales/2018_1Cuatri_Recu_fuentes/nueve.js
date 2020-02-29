function mostrar()
{/*Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva*/

var nombreDelHuesped;
var cantidadDePersonas;
//cantidad de dias de estadia
var cantidadDiasEstadia;
var formaDePago;
var numero;
var respuesta = 'si';

do{

    nombreDelHuesped = prompt("Ingrese nombre: ");
    
    while(!(isNaN(nombreDelHuesped))){
 
        nombreDelHuesped = prompt("Eso no es un nombre. Ingrese nombre nuevamente")

    }

    cantidaDePersonas = parseInt(prompt("Ingrese cantidad de personas: "));

    while((respuesta ='si' || isNaN(numero){

        cantidaDePersonas = parseInt(prompt("Desea ingresar otra persona?"))

    }
    
}while(respuesta = "si")

}

/*

var maximoPersonas;
var contadorDeReservas;
var 

contadorTarjeta=0
contadorQR=0;
contadorEfete=0;
contador
respuesta='s'
while(respuesta == 's')
{
    nombre =prompt("ingrese nombre");
    while(!isNaN(nombre))
    {
        contadorDeReservas++
        nombre = prompt("Ingrese nombre");
    }
    cantidadDePersonas= parseInt(prompt("cantidad de personas"));

    while(isNaN(cantidadDeDias)|| cantidadDeDias 0>)
    {
        cantidadDeDias = parseInt(prompt("cantidad de dias"));  
    }
    formaDePago = prompt("forma de pago");

    while(!isNaN(formaDePago)|| formaDePago != "efectivo" && formaDePago != "qr"){
        
        formaDePago = prompt("forma de pago");
    }
    acumuladorDeDias = acumuladorDeDias + cantidadDeDias;

    if(contadorDeReservas == 1 || cantidadDePersonas > maximoDePersonas)
}*/