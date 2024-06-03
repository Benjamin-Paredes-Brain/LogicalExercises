/*
 * Write a program to check if a number is prime or not.
 * Once this is done, print out the prime numbers between 1 and 100. 
 * A prime number is one that is divisible only by itself and 1. 
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
