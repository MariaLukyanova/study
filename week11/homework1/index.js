function addTask() {
	const taskInput = document.getElementById("taskInput");
	const taskList = document.getElementById("taskList");
	const taskText = taskInput.value;

	if (taskText === "") {
		alert("Please enter a task");
		return;
	}

	const li = document.createElement("li");
	li.textContent = taskText;

	li.addEventListener("click", () => {
		li.classList.toggle("completed");
	});

	taskList.appendChild(li);

	taskInput.value = "";
}
