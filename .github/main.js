const button = document.getElementById("countButton")
let typedText = document.getElementById("textInput").value
let letterCounts = []
// let value = typedText.value

button.addEventListener("click", function() {  
    formatacao()
})

function formatacao() {
    typedText = typedText.toLowerCase()
    typedText = typedText.replace(/[^a-z'\s]+/g, "")
    return typedText
}

// function counterLetter() {
//     for (let i = 0; i < valor.length; i++) {
//         let currentLetter = valor[i]
//         if (letterCounts[i] === undefined && ) {
//             letterCounts.push({ currentLetter: 1})
//         } else {
//             letterCounts[i].currentLetter + 1
//         }
//     }
//     return 
// }

// function letras() {
//     for (let letter in letterCounts) {
//         const span = document.createElement("span")
//         const textContent = `"${letter}": ${letterCounts[letter]}, `
//         span.innerText = textContent
//         const letters = document.getElementById("lettersDiv")
//         letters.appendChild(span)
//     }
// }

console.log(typedText)
