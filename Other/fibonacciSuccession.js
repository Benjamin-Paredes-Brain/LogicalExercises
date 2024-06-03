/*
 * Write a program that prints the first 50 numbers of the Fibonacci sequence starting at 0.
 * Fibonacci series starting at 0.
 * - The Fibonacci series consists of a succession of numbers in which the next number is always the sum of the previous two.
 * in which the next one is always the sum of the two previous ones.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci() {
    let succession = [0, 1]

    for (let i = 2; i < 50; i++) {
        succession[i] = succession[i - 1] + succession[i - 2]
    }

    return succession.join(", ")
}

console.log(fibonacci())