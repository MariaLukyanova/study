function createAndAddPost(title, body) {
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
		},
		body: JSON.stringify({
			title: title,
			body: body,
		}),
	})
		.then((response) => response.json())
		.then((post) => {
			// Создание HTML-разметки для нового поста
			const postHTML = `<div class="post">
                            <h2>${post.title}</h2>
                            <p>${post.body}</p>
                            </div>`;
			// Добавление разметки в контейнер
			const container = document.getElementById("posts-container");
			container.innerHTML += postHTML;
		})
		.catch((error) => console.error("Ошибка:", error));
}

// Пример вызова функции для создания и добавления поста
createAndAddPost("Мой пост", "Это содержание моего поста");
