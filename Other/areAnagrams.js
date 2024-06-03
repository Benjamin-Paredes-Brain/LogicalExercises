/*
Write a function that receives two words (String) and returns true or false (Bool) depending on whether they are anagrams or not.
returns true or false (Bool) depending on whether they are anagrams or not.
- An Anagram consists of forming a word by reordering 
 ALL the letters of another initial word.
- It is NOT necessary to check that both words exist.
- Two words that are exactly the same are not anagrams.
 */

function isAnagram(word1, word2) {
    if (typeof word1 !== "string" || typeof word2 !== "string") return console.error("Only strings can be compared");
    if (word1 === word2) return console.error("Two identical words are not anagrams");

    const wordCompared1 = word1.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split("").sort().join("")
    const wordCompared2 = word2.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split("").sort().join("")

    wordCompared1 === wordCompared2
        ?
        console.log(`${word1} & ${word2} are anagrams`)
        :
        console.log(`${word1} & ${word2} are not anagrams`)
}

isAnagram("valora", "Álvaro")