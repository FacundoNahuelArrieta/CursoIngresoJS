function mostrar()/* {
    var letra;
    var numero;
    var seguir;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var acumuladorPos = 0;
    var contadorPos = 0;
    var promedioPos = 0;
    var acumuladorNeg = 0;
    var numeroMax;
    var numeroMin;
    var letraMax;
    var letraMin;
    var flag = 0;


    do {
        letra = prompt("Ingrese una letra: ");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Eso no es una letra. Ingrese una letra: ");
        }

        numero = parseInt(prompt("Ingrese un numero (-100 y 100): "));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Numero invalido. Ingrese un numero (-100 y 100): "));
        }

        // ---------Pares-----------
        if (numero % 2 == 0) {
            // par
            contadorPares++;
        }
        else {
            // impar
            contadorImpares++;
        }

        // ------------- Signo------------------

        if (numero > 0) {
            // positivos
            acumuladorPos = acumuladorPos + numero;
            contadorPos++;
        }
        else if (numero < 0) {
            // negativos
            acumuladorNeg = acumuladorNeg + numero;
        }
        else {
            // cero
            contadorCeros++;
        }

        // ------------- Maximos y minimos ---------------
        if (flag == 0 || numero < numeroMin) {
            numeroMin = numero;
            letraMin = letra;
        }
        if (flag == 0 || numero > numeroMax) {
            numeroMax = numero;
            letraMax = letra;
            flag = 1;
        }

        seguir = prompt("Quiere continuar?:");
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

}*/ {
    var letra;
    var numero;
    var seguir;
    var acumuladorPositivo = 0;
    var contadorPositivo = 0;
    var acumuladorNegativos = 0;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var numeroMin;
    var letraMin;
    var numeroMax;
    var letraMax;
    var flag = 0;
    var minimoMinus;
    var letraMinMinus;
    var flagMinus = 0;
    var promedioPositivo = 0;

    do {
        //pido los datos
        letra = prompt("Ingrese una letra: ");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Eso no es una letra. Ingrese una letra: ");
        }

        numero = parseInt(prompt("Ingrese un numero (-100 y 100): "));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Numero invalido. Ingrese un numero (-100 y 100): "));
        }
        /*a) La cantidad de números pares.
    b) La cantidad de números impares.
    c) La cantidad de ceros.
    d) El promedio de todos los números positivos ingresados.
    e) La suma de todos los números negativos.
    f) El número y la letra del máximo y el mínimo.
    g) numero y letra del maximo de letras minusculas*/
        //La cantidad de números pares.
        if (numero % 2 == 0) {

            contadorPares++;
        }//La cantidad de números impares.
        else {

            contadorImpares++;
        }
       //El promedio
       if (numero == 0) {
        // ceros
        contadorCeros++;
    }
    else if (numero > 0) {
        // positivos
        acumuladorPositivo = acumuladorPositivo + numero;
        contadorPositivo++;
    }
    else {
        // negativo
        acumuladorNegativos = acumuladorNegativos + numero;
}
if (flag == 0 || numero < numeroMin) {
    numeroMin = numero;
    letraMin = letra;
}
if (flag == 0 || numero > numeroMax) {
    numeroMax = numero;
    letraMax = letra;
    flag = 1;
}
 // --------------- g --------------

 if ((letra >= 'a' && letra <= 'z') && (flagMinus == 0 || numero < minimoMinus)) {
    minimoMinus = numero;
    letraMinMinus = letra;
    flagMinus = 1;
}

seguir = prompt("Quiere continuar?: ");
} while (seguir == 's');

if (contadorPos != 0) {
promedioPositivo = acumuladorPositivo / contadorPositivo;
}

document.write("a) La cantidad de números pares: " + contadorPares + "</br>");
document.write("b) La cantidad de números impares: " + contadorImpares + "</br>");
document.write("c) La cantidad de ceros: " + contadorCeros + "</br>");
document.write("d) El promedio de todos los números positivos ingresados: " + promedioPositivo + "</br>");
document.write("e) La suma de todos los números negativos: " + acumuladorNegativos + "</br>");
document.write("f) Maximo: " + maximo + " Letra: " + letraMax + "</br>");
document.write("f) Minimo: " + minimo + " Letra: " + letraMin + "</br>");
document.write("g) El menor numero de las letras minusculas: " + minimoMinus + " Letra: " + letraMinMinus + "</br>");

}