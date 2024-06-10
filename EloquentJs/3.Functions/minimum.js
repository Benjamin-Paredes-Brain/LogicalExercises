// Define the function min that takes two arguments and returns their minimum.

function min(arg1, arg2) {
    if (typeof arg1 !== "number" || typeof arg2 !== "number") return console.error("Arguments must be a numbers")

    if (arg1 < arg2) return arg1
    return arg2
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10