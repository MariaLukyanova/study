const form = document.getElementById("registrationForm");
const submitButton = document.getElementById("submitButton");

form.addEventListener("input", validateForm);
form.addEventListener("submit", handleSubmit);

// Проверка валидности каждого поля
function validateForm() {
	let isFormValid = form.checkValidity();
	submitButton.disabled = !isFormValid;

	const fields = [
		{ id: "name", errorId: "nameError" },
		{ id: "email", errorId: "emailError" },
		{ id: "age", errorId: "ageError" },
		{ id: "profession", errorId: "professionError" },
		{ id: "password", errorId: "passwordError" },
		{ id: "consent", errorId: "consentError" },
	];

	// Показать/скрыть сообщение об ошибке
	fields.forEach((field) => {
		const input = document.getElementById(field.id);
		const errorMessage = document.getElementById(field.errorId);
		if (input.validity.valid) {
			errorMessage.style.display = "none";
		} else {
			errorMessage.style.display = "block";
		}
	});
}

function handleSubmit(event) {
	event.preventDefault();

	if (form.checkValidity()) {
		// Вывод значений полей в консоль
		console.log("Имя:", form.name.value);
		console.log("Email:", form.email.value);
		console.log("Возраст:", form.age.value);
		console.log("Пол:", form.gender.value);
		console.log("Профессия:", form.profession.value);
		console.log("Пароль:", form.password.value);

		// Очистка формы
		form.reset();
		submitButton.disabled = true;
	}
}
