function getTemperatures() {
	// Заданный массив городов
	const cities = [
		"Москва",
		"Санкт-Петербург",
		"Казань",
		"Саратов",
		"Екатеринбург",
	];

	// Массив для хранения температур
	const temperatures = [];

	// Запрашиваем температуру для каждого города с помощью prompt
	for (let i = 0; i < cities.length; i++) {
		const temp = parseFloat(
			prompt(`Введите температуру для города ${cities[i]}`)
		);
		if (isNaN(temp)) {
			alert("Пожалуйста, введите числовое значение для температуры.");
			return; // Прерываем выполнение, если введено нечисловое значение
		}
		temperatures.push(temp);
	}

	// Элемент для вывода списка городов и температур
	const cityList = document.getElementById("cityList");
	cityList.innerHTML = ""; // Очистить предыдущие результаты

	// Выводим города и их температуры
	for (let i = 0; i < cities.length; i++) {
		const listItem = document.createElement("li");
		listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`;
		cityList.appendChild(listItem);
	}

	// Поиск максимальной и минимальной температуры
	const maxTemp = Math.max(...temperatures);
	const minTemp = Math.min(...temperatures);

	// Вывод максимальной и минимальной температуры
	document.getElementById(
		"maxTemp"
	).textContent = `Максимальная температура: ${maxTemp}°C`;
	document.getElementById(
		"minTemp"
	).textContent = `Минимальная температура: ${minTemp}°C`;
}
