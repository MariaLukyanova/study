// Объявляем переменные
document.addEventListener("DOMContentLoaded", () => {
	const taskInput = document.getElementById("taskInput");
	const addTaskButton = document.getElementById("addTaskButton");
	const taskList = document.getElementById("taskList");
	const clearButton = document.getElementById("clearButton");
	const emptyMessage = document.getElementById("emptyMessage");

	// Загружаем задачи из Local Storage
	let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

	const updateUI = () => {
		taskList.innerHTML = "";

		// Если список задач пуст
		if (tasks.length === 0) {
			emptyMessage.style.display = "block";
			clearButton.disabled = true;
		}
		// Если список задач не пуст
		else {
			emptyMessage.style.display = "none";
			clearButton.disabled = false;
			tasks.forEach((task, index) => {
				const taskItem = document.createElement("li");
				taskItem.className = task.completed ? "completed" : "";

				// Создаем чекбокс
				const checkbox = document.createElement("input");
				checkbox.type = "checkbox";
				checkbox.checked = task.completed;
				checkbox.addEventListener("change", () => {
					tasks[index].completed = !tasks[index].completed;
					saveTasks();
					updateUI();
				});

				const taskText = document.createElement("span");
				taskText.textContent = task.text;

				taskItem.appendChild(taskText);
				taskItem.appendChild(checkbox);
				taskList.appendChild(taskItem);
			});
		}
	};

	// Сохраняем задачи в Local storage
	const saveTasks = () => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	};

	addTaskButton.addEventListener("click", () => {
		const taskText = taskInput.value.trim();
		if (taskText) {
			tasks.push({ text: taskText, completed: false });
			saveTasks();
			updateUI();
			taskInput.value = "";
		}
	});

	taskInput.addEventListener("keyup", (e) => {
		if (e.key === "Enter") {
			addTaskButton.click();
		}
	});

	// Очищаем список задач по нажатию на кнопку
	clearButton.addEventListener("click", () => {
		tasks = [];
		saveTasks();
		updateUI();
	});

	updateUI();
});
