// Функция, которая принимает объект поста и возвращает строку HTML-разметки

function createPostHTML(post) {
	return `<div class="post">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>`;
}

// Функция, которая добавляет полученную разметку в контейнер

function addPostToContainer(container, postHTML) {
	container.innerHTML += postHTML;
}

// Функция, которая делает GET запрос
async function fetchAndDisplayPosts() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await response.json();
	const container = document.getElementById("posts-container");

	posts.forEach((post) => {
		const postHTML = createPostHTML(post);
		addPostToContainer(container, postHTML);
	});
}

// Вызов функции для получения и отображения постов
fetchAndDisplayPosts();
