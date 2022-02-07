// End Game Function
function failGame() {

	// Create Popup Div
	let div = document.createElement("div");

	// Create Text
	let divText = document.createTextNode(`Game Over, The Word Was ${randomValueValue}`);

	// Append Text To Div
	div.appendChild(divText);

	// Add Class On Div
	div.className = 'popup_lose';

	// Append To The Body
	document.body.appendChild(div);

	document.getElementById("You_lose").play();

}