/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100. 
 * Un número primo es aquel que solo es divisible por si mismo y el 1. 
*/
function isPrimo() {
    const numbersPrimos = [];

    for (let number = 2; number <= 100; number++) {
        let isPrimo = true;

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrimo = false;
            }
        }

        if (isPrimo) numbersPrimos.push(number);

    }

    console.log("Números primos:", numbersPrimos);
}

isPrimo();
