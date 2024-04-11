/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci() {
    let succession = [0, 1]

    for (let i = 2; i < 50; i++) {
        succession[i] = succession[i - 1] + succession[i - 2]
    }

    return succession.join(", ")
}

console.log(fibonacci())