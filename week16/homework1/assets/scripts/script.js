// Определение формы
const regForm = document.forms.registrationForm;

// Объявление переменных
const nameInput = regForm.elements.name;
const emailInput = regForm.elements.email;
const ageInput = regForm.elements.age;
const genderInput = regForm.elements.gender;
const professionInput = regForm.elements.profession;
const passwordInput = regForm.elements.password;
const agreementInput = regForm.elements.agreement;

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const genderError = document.getElementById("genderError");
const professionError = document.getElementById("professionError");
const passwordError = document.getElementById("passwordError");
const agreementError = document.getElementById("agreementError");

//Добавление обработчика события submit
regForm.addEventListener("submit", function (event) {
	// Отмена автоматической отправки
	event.preventDefault();
	let hasError = false;

	// Очистка предыдущих сообщений об ошибках
	nameError.style.display = "none";
	emailError.style.display = "none";
	ageError.style.display = "none";
	genderError.style.display = "none";
	professionError.style.display = "none";
	passwordError.style.display = "none";
	agreementError.style.display = "none";

	if (nameInput.value === "") {
		nameError.textContent = "Укажите Ваше имя.";
		nameError.style.display = "block";
		hasError = true;
	}

	if (validateEmail(emailInput.value) === false) {
		emailError.textContent = "Введите корректный email.";
		emailError.style.display = "block";
		hasError = true;
	}

	if (ageInput.value === "") {
		ageError.textContent = "Укажите Ваш возраст.";
		ageError.style.display = "block";
		hasError = true;
	}

	if (genderInput.value === "") {
		genderError.textContent = "Укажите Ваш пол.";
		genderError.style.display = "block";
		hasError = true;
	}

	if (passwordInput.value === "") {
		passwordError.textContent = "Введите пароль.";
		passwordError.style.display = "block";
		hasError = true;
	}

	if (agreementInput.checked === false) {
		agreementError.textContent = "Необходимо согласие с условиями.";
		agreementError.style.display = "block";
		hasError = true;
	}

	if (hasError === false) {
		alert("Форма успешно отправлена!");
	}

	function validateEmail(email) {
		let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;
		return regex.test(email);
	}

	// Очистка формы
	regForm.reset();
});

// Получение кнопки отправки и чекбокса
document.getElementById("agreement").addEventListener("change", function () {
	let submitBtn = document.getElementById("submitBtn");
	let agreementCheckbox = document.getElementById("agreement");

	// Разблокировка или блокировка кнопки в зависимости от состояния чекбокса
	submitBtn.disabled = !agreementCheckbox.checked;
});

regForm.addEventListener("submit", (event) => {
	event.preventDefault();
	if (validateForm()) {
		console.log("Имя:", fields.name.value);
		console.log("Email:", fields.email.value);
		console.log("Возраст:", fields.age.value);
		console.log("Пол:", fields.gender.value);
		console.log("Профессия:", fields.profession.value);
		console.log("Пароль:", fields.password.value);
		console.log("Согласие:", fields.agreement.checked ? "Да" : "Нет");

		form.reset();
		submitBtn.disabled = true;
		alert("Форма успешно отправлена");
	}
});

const form = document.getElementById("registrationForm");
const submitBtn = document.getElementById("submitBtn");

const validateForm = () => {
	let isValid = true;

	//очистить ошибки
	document.querySelectorAll(".error").forEach((error) => {
		error.classList.add("hidden");
	});

	//валидация имени

	const name = document.getElementById("name");
	const nameError = document.getElementById("nameError");
	const namePattern = /^[a-zA-Zа-яА-ЯёЁ\s]{2,20}$/;
	if (!namePattern.test(name.value)) {
		nameError.textContent =
			"Имя должно содержать только буквы и пробелы (2-20 символов)";
		nameError.classList.remove("hidden");
		isValid = false;
	}

	//валидация электронной почты
	const email = document.getElementById("email");
	const emailError = document.getElementById("emailError");
	if (!email.checkValidity()) {
		emailError.textContent = "Введите корректный email";
		emailError.classList.remove("hidden");
		isValid = false;
	}

	//валидация возраста
	const age = document.getElementById("age");
	const ageError = document.getElementById("ageError");
	if (!age.value) {
		ageError.textContent = "Введите ваш возраст";
		ageError.classList.remove("hidden");
		isValid = false;
	}

	//валидация профессии
	const profession = document.getElementById("profession");
	const professionError = document.getElementById("professionError");
	if (profession.value === "") {
		professionError.textContent = "Выберите профессию";
		professionError.classList.remove("hidden");
		isValid = false;
	}

	//валидация пароля
	const password = document.getElementById("password");
	const passwordError = document.getElementById("passwordError");
	const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
	if (!passwordPattern.test(password.value)) {
		passwordError.textContent =
			"Пароль должен содержать минимум 8 символов, одну заглавную букву и одну цифру";
		passwordError.classList.remove("hidden");
		isValid = false;
	}

	// Валидация согласия
	const consent = document.getElementById("consent");
	const consentError = document.getElementById("consentError");
	if (!consent.checked) {
		consentError.textContent = "Необходимо согласие на обработку данных";
		consentError.classList.remove("hidden");
		isValid = false;
	}

	submitBtn.disabled = !isValid;
	return isValid;
};

form.addEventListener("submit", function (event) {
	event.preventDefault();
	if (validateForm()) {
		console.log({
			name: form.name.value,
			email: form.name.value,
			age: form.age.value,
			gender: form.gender.value,
			profession: form.profession.value,
			password: form.password.value,
		});
		form.reset();
		submitBtn.disabled = true;
	}
});

form.addEventListener("input", validateForm);
form.addEventListener("focusout", validateForm);
