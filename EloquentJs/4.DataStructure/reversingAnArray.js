// Write two functions, reverseArray and reverseArrayInPlace. 
// The first, reverseArray, should take an array as argument and produce a new array that has the same elements in the inverse order. 
// The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as argument by reversing its elements. 
// Neither may use the standard reverse method.

function reverseArray(array) {
    const reverseArray = []

    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i])
    }

    return reverseArray
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
