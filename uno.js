function mostrar()
{/*/Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)
informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva/
*/
var nombrehusped;
var cantidadPerosnas;
var DiaEstadia;
var FormaDePago;
var MasPersonas;
var MasDias;
var CantPersonasMasDias;
var PagoMasUtilizado;
var AcumuladorDias = 0;
var ContadorReservas = 0;
var HuespedConMasPersonas;
var cantTarjeta = 0;
var cantQR = 0;
var cantEfectivo = 0;
var promedioDeDiasReserva;
var flag = 0;

respuesta = "s";

do{
nombrehusped = prompt("Dame tu nombre");

while(!isNaN(nombrehusped) ){
nombrehusped = prompt("No es un nombre. Dame tu nombre");
}
ContadorReservas++;
cantidadPerosnas = parseInt(prompt("Decime las personas que se van a quedar"));
while(isNaN(cantidadPerosnas) ){
    cantidadPerosnas = parseInt(prompt("La cantidad es erronea .Decime la cantidad de personas."));
    
    }
DiaEstadia = parseInt(prompt("Decime los dias que se va a quedar "));

while(isNaN(DiaEstadia) ){
    DiaEstadia = parseInt(prompt("Los dias son erroneos.Decime los dias que se va a quedar "));

    
    }
    FormaDePago = prompt("Que forma de pago va a utilizar?(Efectivo, Tarjeta o QR)");

        while(!isNaN(FormaDePago) || FormaDePago != "Tarjeta" && FormaDePago != "QR" && FormaDePago != "Efectivo"){
            FormaDePago = prompt("La forma de pago es incorrecta. Ingrese: Efectivo, QR o  Tarjeta");

        }

//Error aca
    if(flag == 0 || cantidadPerosnas > MasPersonas){

        MasPersonas = cantidadPerosnas;
        HuespedConMasPersonas = nombrehusped;
        flag++;
    }

    if(flag = 1 || DiaEstadia > MasDias){
        MasDias = DiaEstadia;
        CantPersonasMasDias = cantidadPerosnas;
        flag++;

    }

    switch(FormaDePago){
            case"Tarjeta":
                cantTarjeta++;
            break;
            case"Efectivo":
                cantEfectivo++;
            break;
            case"QR":
                cantQR++;
            break;
    }
    /*
    if(FormaDePago == "tarjeta"){
        cantTarjeta++;   
    }else if(FormaDePago == "QR"){
        cantQR++;  
    }else{
        cantEfectivo++;  
    }*/

    //ERROR
    /*if(cantTarjeta > cantEfectivo  ){
        PagoMasUtilizado = "Tarjeta";

    }
    if(cantEfectivo > cantQR ){

        PagoMasUtilizado = "Efectivo";
    }else{
        PagoMasUtilizado = "QR";
    }*/
    if(cantTarjeta > cantQR && cantTarjeta> cantEfectivo){

        PagoMasUtilizado = "tarjeta";
    }else if(cantQR > cantTarjeta && cantQR > cantEfectivo){
        PagoMasUtilizado = "QR";
    }else { 
        PagoMasUtilizado = "Efectivo";
    }
    
    respuesta = prompt("quiere seguir ingresando datos?")
}while (respuesta == "s") {
    AcumuladorDias = AcumuladorDias + DiaEstadia;
    promedioDeDiasReserva = AcumuladorDias / ContadorReservas;
alert("El huesped con mas personas fue: " + HuespedConMasPersonas + "<\n> La cantidad de personas que se quedaron mas dias es de: " + CantPersonasMasDias + "<\n> La forma de pago mas utilizada es de: " + PagoMasUtilizado + "<\n> El promedio de Dias por reserva es de: " + promedioDeDiasReserva) ;


    
}



}