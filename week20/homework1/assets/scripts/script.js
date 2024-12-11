document.getElementById("fetchDataButton").addEventListener("click", fetchData);

function showLoadingMessage() {
	document.getElementById("loadingMessage").style.display = "block";
}

function hideLoadingMessage() {
	document.getElementById("loadingMessage").style.display = "none";
}

function showResult(data) {
	const resultContainer = document.getElementById("resultContainer");
	resultContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function showError(message) {
	const errorContainer = document.getElementById("errorContainer");
	errorContainer.innerHTML = `<p>${message}</p>`;
}

function clearMessages() {
	document.getElementById("resultContainer").innerHTML = "";
	document.getElementById("errorContainer").innerHTML = "";
}

async function fetchData() {
	const entityType = document.getElementById("entityType").value;
	const entityId = document.getElementById("entityId").value;
	const apiUrl = `https://swapi.py4e.com/api/${entityType}/${entityId}/`;

	clearMessages();
	showLoadingMessage();

	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(response.status);
		}
		const data = await response.json();
		hideLoadingMessage();
		showResult(data);
	} catch (error) {
		hideLoadingMessage();
		if (error.message === "404") {
			showError("Сущность не найдена");
		} else {
			showError("Сервер не доступен");
		}
	} finally {
		// Дополнительные действия при необходимости
	}
}
