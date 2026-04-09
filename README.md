# frontend1-exercicios

## Exercicio 01

Objetivo: praticar JSON (converter e ler dados) e mostrar dados no HTML.

### 1) Criar objeto

```js
let object = {
	nome: "Jose Cleber",
	idade: 32,
	email: "cleber@gmail.com"
};
```

Esse codigo cria um objeto JavaScript com 3 propriedades: nome, idade e email.

### 2) Converter para JSON string

```js
let parser = JSON.stringify(object);
console.log(parser);
```

`JSON.stringify` transforma o objeto em texto JSON para salvar ou enviar dados.

### 3) Voltar de JSON string para objeto

```js
let object2 = JSON.parse(parser);
console.log(object2);
```

`JSON.parse` converte o texto JSON novamente para objeto JavaScript.

### 4) Buscar dados do arquivo local

```js
fetch('./exercicio-01/data.json')
	.then(response => response.json())
	.then(data => {
		document.getElementById('nome').textContent = data[0].nome;
		document.getElementById('idade').textContent = data[0].idade;
		document.getElementById('email').textContent = data[0].email;
	});
```

Esse bloco le o arquivo JSON local e coloca os valores do primeiro item nos elementos do HTML.

## Exercicio 02

Objetivo: salvar dados do formulario no localStorage e controlar tema claro/escuro.

### 1) Salvar dados do formulario

```js
function save(){
	let name = document.getElementById("nome").value;
	let idade = document.getElementById("idade").value;
	let email = document.getElementById("email").value;

	localStorage.setItem("nome", name);
	localStorage.setItem("idade", idade);
	localStorage.setItem("email", email);
}
```

Essa funcao pega os valores digitados e salva no armazenamento local do navegador.

### 2) Ler tema salvo

```js
let theme = localStorage.getItem("theme");
let themeButton = document.getElementById("theme-button");

theme ? (themeButton.innerText = theme) : (themeButton.innerText = "light");
```

Aqui o codigo verifica se ja existe um tema salvo e atualiza o texto do botao.

### 3) Aplicar tema escuro ao abrir

```js
if(theme == "dark"){
	document.body.classList.add("dark");
}
```

Se o tema salvo for dark, a classe dark e aplicada no body ao carregar a pagina.

### 4) Alternar e salvar tema

```js
function toggleTheme(){
	document.body.classList.toggle("dark");

	if(document.body.classList.contains("dark")){
		localStorage.setItem("theme", "dark");
	} else {
		localStorage.setItem("theme", "light");
	}
}
```

Essa funcao troca entre claro e escuro e salva a escolha no localStorage.

### 5) SessionStorage (dados temporarios da aba)

```js
sessionStorage.setItem("nome", "Ana");
let nomeSalvo = sessionStorage.getItem("nome");
console.log(nomeSalvo);
```

Esse codigo salva e le um valor no `sessionStorage`. A principal diferenca para o `localStorage` e que o `sessionStorage` dura apenas enquanto a aba estiver aberta.

```js
sessionStorage.removeItem("nome");
sessionStorage.clear();
```

`removeItem` remove apenas uma chave. `clear` limpa todos os dados salvos no `sessionStorage` da pagina.