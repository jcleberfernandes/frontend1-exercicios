const formulario = document.getElementById('breed-form');
const input = document.getElementById('breed');
const result = document.getElementById('result');

formulario.addEventListener('submit', async (event) => {
	event.preventDefault();
	
	const raca = input.value.trim().toLowerCase();
	
	if (!raca) {
		alert('Digite uma raça!');
		return;
	}
	
	const url = `https://dog.ceo/api/breed/${raca}/images/random`;
	const resposta = await fetch(url);
	const dados = await resposta.json();
	
	if (dados.status === 'success') {
		const image = `<img id="dog-image" alt="Imagem da raca pesquisada" src=${dados.message}>`;
		result.innerHTML = image;
	} else {
		alert('Raça não encontrada!');
	}
});


