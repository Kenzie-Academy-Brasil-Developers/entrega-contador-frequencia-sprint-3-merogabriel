const button = document.getElementById('countButton')


button.addEventListener("click", function () {
    let typedText = document.getElementById('textInput').value
    typedText = typedText.toLowerCase()
    typedText = typedText.replace(/[^a-z'\s]+/g, '')

    const letters = document.getElementById('lettersDiv')
    letters.innerText = ''
    let letterCounter = {}
    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i]
        if (letterCounter[currentLetter] === undefined) {
            letterCounter[currentLetter] = 1
        } else {
            letterCounter[currentLetter]++
        }
    }
    for (let letter in letterCounter) {
        const span = document.createElement('span')
        const textContent = `"${letter}": ${letterCounter[letter]}, `
        span.innerText = textContent
        letters.appendChild(span)
    }

    const words = document.getElementById("wordsDiv")
    words.innerText = ""
    const wordsCounter = {}
    let newWords = typedText.split(/\s/)
    for (let j = 0; j < newWords.length; j++) {
        let currentWord = newWords[j]
        if (wordsCounter[currentWord] === undefined) {
        wordsCounter[currentWord] = 1
        } else {
        wordsCounter[currentWord] += 1
        }
    }
    for (let word in wordsCounter) {
        const span = document.createElement("span")
        const textContent = `${word}: ${wordsCounter[word]}, `
        span.innerText = textContent
        words.appendChild(span)
    }
})