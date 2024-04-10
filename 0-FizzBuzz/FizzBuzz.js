/*
 * "FIZZ BUZZ"
 * Escribe un programa que muestre por consola 
 * los números de 1 a 100 sustituyendo los siguientes:
 *-Múltiplos de 3 por la palabra "fizz".
 *-Múltiplos de 5 por la palabra "buzz".
 *-Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function isMultiple(number, multiple) {
    if (typeof number !== 'number' || typeof multiple !== 'number') return console.error("Error: Both 'number' and 'multiple' must be numerical values.");
    return number % multiple === 0
}

for (let i = 1; i <= 100; i++) {
    if (isMultiple(i, 15)) console.log(`${i} = FizzBuzz`)
    else if (isMultiple(i, 3)) console.log(`${i} = Fizz`)
    else if (isMultiple(i, 5)) console.log(`${i} = Buzz`)
    else console.log(`${i}`)
}
