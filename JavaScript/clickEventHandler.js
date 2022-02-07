// Handle Clicking On Letters
document.addEventListener("click", (e) => {

	// Set The Choose Status
	let theStatus = false;

	if (e.target.className === 'letter-box') {

		e.target.classList.add("clicked");

		// Get Clicked Letter
		let theClickedLetter = e.target.innerHTML.toLowerCase();

		// The Chosen Word
		let theChosenWord = Array.from(randomValueValue.toLowerCase());
		console.log("Word to be guessed: ", theChosenWord);
		theChosenWord.forEach((wordLetter, WordIndex) => {

			// If The Clicked Letter Equal To One Of The Chosen Word Letter
			if (theClickedLetter == wordLetter) {
				arrayClickedLetters.push(theClickedLetter);
				console.log("The array of correct clicked letters is: ", arrayClickedLetters)

				// Set Status To Correct
				theStatus = true;
				console.log("The clicked letter is: ", theClickedLetter);

				// Loop On All Guess Spans
				guessSpans.forEach((span, spanIndex) => {

					if (WordIndex === spanIndex) {

						span.innerHTML = theClickedLetter;

					}
				});
			}
		});

		// Outside Loop

		// If Letter Is Wrong
		if (theStatus !== true) {

			// Increase The Wrong Attempts
			wrongAttempts++;
			// Show Chances left Info
			chancesLeft= 8 - wrongAttempts;
			// Add Class Wrong On The Draw Element
			theDraw.classList.add(`wrong-${wrongAttempts}`);

			// Play Fail Sound
			document.getElementById("fail").play();

			if (wrongAttempts === 8) {

				failGame();
				lettersContainer.classList.add("finished");

			}
		} else {

			// Play Success Sound
			document.getElementById("success").play();
			const checkifwin = comparingEqualityArrays(arrayClickedLetters, theChosenWord);
			if (checkifwin) {
				console.log("!!!You have won!!!");
				winGame();
			}
		}
	}
	console.log("wrongAttempts: ",wrongAttempts);
	console.log("chances left: ",chancesLeft);
	document.querySelector(".game-info .game-name span").innerHTML = chancesLeft;
});
