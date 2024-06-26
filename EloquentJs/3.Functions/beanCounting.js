// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.
// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). 

function countBs(str) {
    const char = "B"
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if(str[i] === char) count += 1
    }

    return count
}


function countChar(str, char) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if(str[i] === char) count += 1
    }

    return count
}

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4