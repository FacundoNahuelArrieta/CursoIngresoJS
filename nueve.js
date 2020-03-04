function mostrar() /*{
    var marca;
    var peso;
    var termperatura;
    var contadorPares = 0;
    var contadorCong = 0;
    var marcaPesada;
    var pesoMaximoMas = 0;
    var pesoMaximo;
    var pesoMinimo;
    var promedioPeso;
    var acumuladorPeso = 0;
    var contador = 0;
    var seguir;
    var flag = 0;

    //--------------------------------------------

    do {
        marca = prompt("Ingrese marca: ");

        peso = parseInt(prompt("Ingrese un peso (1 y 100): "));
        while (peso < 1 || peso > 100 || isNaN(peso)) {
            peso = parseInt(prompt("Peso invalido. Ingrese un peso (1 y 100): "));
        }
        temperatura = parseInt(prompt("Ingrese un temperatura (-30 y 30): "));
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("Temperatura invalida. Ingrese un temperatura (-30 y 30): "));
        }

        if (temperatura % 2 == 0) {
            contadorPares++;
        }
//voy a entrar cuando el flag se == 0 o la temperatura sea mayor a o
        if ((flag == 0 || termperatura > pesoMaximoMas0) && temperatura > 0) {
            pesoMaximoMas0 = termperatura;
            marcaPesada = termperatura;
            flag = 1;
        }

        if (temperatura < 0) {
            contadorCong++;
        }

        acumuladorPeso = acumuladorPeso + termperatura;

        if (contador == 0 || termperatura > pesoMaximo) {
            pesoMaximo = termperatura;
        }
        if (contador == 0 || termperatura < pesoMinimo) {
            pesoMinimo = termperatura;
        }

        contador++;

        seguir = prompt("Quiere continuar?:");
    } while (seguir == 's');

    promedioPeso = acumuladorPeso / contador;

    if( flag == 0){
        marcaPesada = "sin datos";
    }

    document.write("a) La cantidad de temperaturas pares: " + contadorPares + "</br>");
    document.write("b) La termperatura del producto más pesado no congelado: " + marcaPesada + "</br>");
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " + contadorCong + "</br>");
    document.write("d) El promedio del termperatura de todos los productos: " + promedioPeso + "</br>");
    document.write("f) El termperatura máximo: " + pesoMaximo + " y el mínimo: " + pesoMinimo + "</br>");


}

        // ------------- Maximos y minimos ---------------
        if (flag == 0 || termperatura < numeroMin) {
            numeroMin = termperatura;
            letraMin = termperatura;
        }
        if (flag == 0 || termperatura > numeroMax) {
            numeroMax = termperatura;
            letraMax = termperatura;
            flag = 1;
        }

        seguir = prompt("Quiere continuar?: ");
    } while (seguir == 's');

    if (contadorPos != 0) {
        promedioPos = acumuladorPos / contadorPos;
    }

    document.write("a) Cantidad de números pares: " + contadorPares + "</br>");
    document.write("b) Cantidad de números impares: " + contadorImpares + "</br>");
    document.write("c) Cantidad de ceros: " + contadorCeros + "</br>");
    document.write("d) Promedio de todos los números positivos ingresados: " + promedioPos.toFixed(2) + "</br>");
    document.write("e) La suma de todos los números negativos: " + acumuladorNeg + "</br>");
    document.write("f) Número Máximo: " + numeroMax + " Letra: " + letraMax + "</br>");
    document.write("f) Número Minimo: " + numeroMin + " Letra: " + letraMin + "</br>");

}*/ {/*Realizar el algoritmo que permita ingresar la termperatura del producto,
el termperatura el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el ingreso*/

    var marca;
    var peso;
    var temperatura;
    var seguir;
    var contadorPares = 0;
    var marcaPesada;
    var maximoPeso;
    var flag = 0;
    var contadorCongelados = 0;
    var promedioPeso;
    var acumuladorPeso = 0;
    var contador = 0;
    var pesoMax;
    var pesoMin;

    do {
        // pido los datos
        marca = prompt("Ingrese una marca: ");

        peso = parseInt(prompt("Ingrese un peso (1 y 100): "));
        while (peso < 1 || peso > 100 || isNaN(peso)) {
            peso = parseInt(prompt("Peso invalido. Ingrese un peso (1 y 100): "));
        }

        temperatura = parseInt(prompt("Ingrese un temperatura (-30 y 30): "));
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("Temperatura invalido. Ingrese un temperatura (-30 y 30): "));
        }

        if (temperatura % 2 == 0) {
            contadorPares++;
        }

        if ((flag == 0 || peso > maximoPeso) && temperatura > 0) {
            maximoPeso = peso;
            marcaPesada = marca;

            flag = 1;
        }

        if (temperatura < 0) {
            contadorCongelados++;
        }


        if (contador == 0 || peso > pesoMax) {
            pesoMax = peso;
        }
        if (contador == 0 || peso < pesoMin) {
            pesoMin = peso;
        }

        acumuladorPeso = acumuladorPeso + peso;
        contador++;

        seguir = prompt("Quiere continuar?: ");
    } while (seguir == 's');


    promedioPeso = acumuladorPeso / contador;






    document.write("a) La cantidad de temperaturas pares: " + contadorPares + "</br>");
    if (flag == 0) {
        document.write("b) La marca del producto más pesado no congelado: No se ingresaron productos no congelados</br>");

    }
    else {

        document.write("b) La marca del producto más pesado no congelado: " + marcaPesada + " Peso: " + maximoPeso + "</br>");
    }
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " + contadorCongelados + "</br>");
    document.write("d) El promedio del peso de todos los productos: " + promedioPeso + "</br>");
    document.write("e) Maximo: " + pesoMax + "</br>");
    document.write("e) Minimo: " + pesoMin + "</br>");

}

//Palabra suma = acumulador
// cantidad = contador