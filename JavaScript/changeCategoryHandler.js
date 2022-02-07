var changeCategoryBtn = document.querySelector("#ChangeCategoryBtn");

changeCategoryBtn.addEventListener("click", function (e) {
    // Get Random Property
    let allKeys = Object.keys(words);

    // Random Number Depend On Keys Length
    let randomPropNumber = Math.floor(Math.random() * allKeys.length);

    // Category
    let randomPropName = allKeys[randomPropNumber];

    // Category Words
    let randomPropValue = words[randomPropName];

    // Random Number Depend On Words
    let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

    // The Chosen Word
    let randomValueValue = randomPropValue[randomValueNumber];

    document.querySelector(".game-info .category span").innerHTML = randomPropName;

    let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);

console.log("Cantidad de letras en la palabra: ", lettersAndSpace.length);

// Create Spans Depened On Word
lettersAndSpace.forEach(letter => {

	// Create Empty Span
	let emptySpan = document.createElement("span");

	// If Letter Is Space
	if (letter === ' ') {

		// Add Class To The Span
		emptySpan.className = 'with-space';
	}

	// Append Span To The Letters Guess Container
	lettersGuessContainer.appendChild(emptySpan);
});
});