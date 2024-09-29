function addComment() {
	const nameInput = document.getElementById("nameInput");
	const nameInputTextnot = nameInput.value;
	const nameInputText2 = nameInputTextnot.trim();
	const nameInputText =
		nameInputText2.charAt(0).toUpperCase() +
		nameInputText2.slice(1).toLowerCase();

	const photoInput = document.getElementById("photoInput");
	const photoInputText = photoInput.value;

	const textInput = document.getElementById("textInput");
	const textInputTextnot = textInput.value;
	const textInputText = textInputTextnot.replace(/viagra|xxx/gi, "***");

	if (nameInputText === "") {
		alert("Пожалуйста, укажите ваше имя");
		return;
	}

	if (photoInputText === "") {
		alert("Пожалуйста, укажите ваш аватар");
		return;
	}

	if (textInputText === "") {
		alert("Пожалуйста, укажите ваш комметарий");
		return;
	}

	const div = document.createElement("div");
	div.textContent = nameInputText;

	div.classList.add("newName");

	const div2 = document.createElement("img");
	div2.src = photoInputText;

	div2.classList.add("newPhoto");

	const div3 = document.createElement("div");
	div3.textContent = textInputText;

	div3.classList.add("newText");

	chat.appendChild(div);

	chat.appendChild(div2);

	chat.appendChild(div3);

	nameInput.value = "";
	photoInput.value = "";
	textInput.value = "";
}
