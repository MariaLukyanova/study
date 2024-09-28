document.addEventListener("DOMContentLoaded", function randomWord() {
	let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

	let num1 = Math.round(Math.random() * 32);
	console.log(num1);

	let num2 = Math.round(Math.random() * 32);
	console.log(num2);

	let num3 = Math.round(Math.random() * 32);
	console.log(num3);

	let num4 = Math.round(Math.random() * 32);
	console.log(num4);

	let ltr1 = alphabet.substring(num1, num1 + 1);
	console.log(ltr1);

	let ltr2 = alphabet.substring(num2, num2 + 1);
	console.log(ltr2);

	let ltr3 = alphabet.substring(num3, num3 + 1);
	console.log(ltr3);

	let ltr4 = alphabet.substring(num4, num4 + 1);
	console.log(ltr4);

	let word = ltr1 + ltr2 + ltr3 + ltr4;
	console.log(word);

	div = document.getElementById("h2");
	div.innerText = word;
});

randomWord();
