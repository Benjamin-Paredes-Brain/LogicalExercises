/*
Escribe una función que reciba dos palabras (String) y
retorne verdadero o falso (Bool) según sean o no anagramas.
- Un Anagrama consiste en formar una palabra reordenando 
 TODAS las letras de otra palabra inicial.
- NO hace falta comprobar que ambas palabras existan.
- Dos palabras exactamente iguales no son anagrama.
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