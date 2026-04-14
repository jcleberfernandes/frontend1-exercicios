
const botao = document.getElementById('reload-button');
const lista = document.getElementById('post-list');

botao.onclick = () => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then((posts) => {
			lista.innerHTML = '';

			posts.forEach((post) => {
				lista.innerHTML += '<li>' + post.title + '</li>';
			});
		});
};