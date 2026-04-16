# Frontend1 - Exercicios

Projeto de estudos com JavaScript, JSON, armazenamento no navegador e consumo de API.

Este documento foi escrito para iniciantes, com linguagem simples e explicacao passo a passo.

## Como executar

1. Abra a pasta do projeto no VS Code.
2. Abra o arquivo `index.html` de cada exercicio no navegador.
3. Use o console do navegador para ver os logs (`F12`).

## Estrutura

- `exercicio-01`: JSON (criar, converter e ler arquivo local).
- `exercicio-02`: formulario + `localStorage` + tema claro/escuro.
- `exercicio-03`: criptografia AES com `CryptoJS`.
- `exercicio-04`: anotacoes e pratica de `fetch`, `async/await` e metodos HTTP.
- `exercicio-05`: buscar imagens de cachorro por raca usando API externa.
- `exercicio-06`: APIs do navegador com mensagem na tela, notificacao e fala.

## Exercicio 01 - JSON e leitura de arquivo

### Objetivo do exercicio

Aprender o basico de JSON: criar objeto, converter para JSON, converter de volta para objeto e ler um arquivo JSON local.

### O que foi feito

1. Criado um objeto JavaScript com nome, idade e email.
2. Convertido objeto para JSON string com `JSON.stringify`.
3. Convertido JSON string para objeto com `JSON.parse`.
4. Lido o arquivo local `data.json` com `fetch`.
5. Mostrados os dados no HTML usando `textContent`.

### Codigo 1 - Criar objeto JavaScript

```js
let object = {
  nome: 'Jose Cleber',
  idade: 32,
  email: 'cleberf64@gmail.com',
};
```

Explicacao:

1. `let object = { ... }` cria um objeto em memoria.
2. `nome`, `idade` e `email` sao propriedades do objeto.
3. Esse objeto representa dados que poderiam vir de um formulario ou API.

**Fluxo:**
```
JavaScript cria objeto em memoria
         ↓
objeto fica disponivel no codigo
         ↓
Acesso: object.nome, object.idade, object.email
```

### Codigo 2 - Converter objeto para JSON string

```js
let parser = JSON.stringify(object);
console.log(parser);
```

Explicacao:

1. `JSON.stringify(object)` transforma objeto em texto JSON.
2. Esse texto pode ser salvo, enviado para API ou armazenado.
3. `console.log(parser)` mostra no console como ficou o JSON em texto.

**Fluxo:**
```
Objeto JavaScript
         ↓
JSON.stringify() converte em texto
         ↓
Resultado: {"nome":"Jose Cleber","idade":32,"email":"cleberf64@gmail.com"}
         ↓
console.log mostra no console do navegador
```

### Codigo 3 - Converter JSON string para objeto de novo

```js
let object2 = JSON.parse(parser);
console.log(object2);
```

Explicacao:

1. `JSON.parse(parser)` pega o texto JSON e volta para objeto JavaScript.
2. `object2` volta a ter propriedades acessiveis com ponto, por exemplo `object2.nome`.

**Fluxo:**
```
Texto JSON (string)
         ↓
JSON.parse() converte de volta em objeto
         ↓
object2 fica com propriedades acessiveis
         ↓
Acesso: object2.nome, object2.idade, object2.email
```

### Codigo 4 - Ler arquivo JSON local com fetch

```js
fetch('./exercicio-01/data.json')
  .then((response) => response.json()) // converte resposta para JSON
  .then((data) => {
    console.log(data); // mostra o array/objeto no console

    // preenche os elementos do HTML com os dados do primeiro item
    document.getElementById('nome').textContent = data[0].nome;
    document.getElementById('idade').textContent = data[0].idade;
    document.getElementById('email').textContent = data[0].email;
  });
```

Explicacao:

1. `fetch(...)` busca o arquivo `data.json`.
2. `response.json()` transforma o retorno em objeto JavaScript.
3. `data[0]` pega o primeiro item do array.
4. `textContent` coloca os valores dentro dos elementos da pagina.

**Fluxo:**
```
fetch() busca arquivo data.json no servidor
         ↓
response.json() converte conteudo em objeto JavaScript
         ↓
data[0] pega primeiro item do array
         ↓
textContent preenche elementos HTML (nome, idade, email)
         ↓
Dados aparecem na tela do navegador
```

### Resumo do exercicio 01

1. Crio o objeto em memoria.
2. Transformo em texto JSON para simular envio/armazenamento.
3. Volto o texto para objeto para praticar leitura.
4. Carrego `data.json` e preencho os elementos da pagina com `textContent`.

## Exercicio 02 - Formulario, localStorage e tema

### Objetivo do exercicio

Aprender a salvar dados do formulario no navegador e controlar tema claro/escuro com armazenamento local.

### O que foi feito

1. Capturados os valores de nome, idade e email.
2. Salvos os valores no `localStorage`.
3. Lido o tema salvo ao abrir a pagina.
4. Aplicado modo escuro quando necessario.
5. Alterado e salvo tema no clique.

### Codigo 1 - Salvar dados do formulario no localStorage

```js
function save() {
  let name = document.getElementById('nome').value;
  let idade = document.getElementById('idade').value;
  let email = document.getElementById('email').value;

  localStorage.setItem('nome', name);
  localStorage.setItem('idade', idade);
  localStorage.setItem('email', email);
}
```

Explicacao:

1. `.value` pega o que o usuario digitou no input.
2. `localStorage.setItem(chave, valor)` salva no navegador.
3. Esses dados continuam salvos mesmo fechando o navegador.

**Fluxo:**
```
Usuario digita dados no formulario
         ↓
.value pega os valores dos inputs
         ↓
localStorage.setItem() salva cada valor no navegador
         ↓
Dados armazenados permanentemente (até usuario limpar cache)
```

### Codigo 2 - Ler tema salvo e atualizar texto do botao

```js
let theme = localStorage.getItem('theme');
let themeButton = document.getElementById('theme-button');

theme ? (themeButton.innerText = theme) : (themeButton.innerText = 'light');
```

Explicacao:

1. `getItem('theme')` tenta ler o tema salvo.
2. Se existir tema, o texto do botao vira esse valor.
3. Se nao existir, o texto inicial fica `light`.

**Fluxo:**
```
localStorage.getItem('theme') tenta ler tema salvo
         ↓
Se tema existe → botao mostra texto do tema
         ↓
Se tema nao existe → botao mostra 'light' como padrao
```

### Codigo 3 - Aplicar tema escuro ao carregar a pagina

```js
if (theme == 'dark') {
  document.body.classList.add('dark');
}
```

Explicacao:

1. Se o tema salvo for `dark`, adiciona classe `dark` no `body`.
2. O CSS da classe `dark` muda as cores da pagina.

**Fluxo:**
```
Pagina carrega (onload)
         ↓
Verifica: o tema salvo e 'dark'?
         ↓
Se SIM → adiciona classe 'dark' no body
         ↓
CSS aplica estilos escuros automaticamente
```

### Codigo 4 - Alternar tema e salvar novamente

```js
function toggleTheme() {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}
```

Explicacao:

1. `classList.toggle('dark')` liga/desliga o modo escuro.
2. Depois verifica qual modo ficou ativo.
3. Salva no `localStorage` para manter na proxima abertura.

**Fluxo:**
```
Usuario clica botao de tema
         ↓
toggle('dark') liga ou desliga a classe
         ↓
Verifica: classe 'dark' esta ativa agora?
         ↓
Se SIM → salva 'dark' no localStorage
         ↓
Se NAO → salva 'light' no localStorage
         ↓
Proxima vez que abrir, tema e mantido
```

### Codigo 5 - Evento de clique no botao de tema

```js
themeButton.addEventListener('click', () => {
  if (theme === 'light') {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
    theme = 'light';
    themeButton.innerText = 'light';
  }
});
```

Explicacao:

1. `addEventListener('click', ...)` executa codigo ao clicar.
2. Dentro do evento, o tema salvo e atualizado.
3. O texto do botao tambem pode ser atualizado com `innerText`.

**Fluxo:**
```
Usuario clica botao de tema
         ↓
addEventListener detecta clique
         ↓
Verifica tema atual (light ou dark)
         ↓
Salva o tema oposto no localStorage
         ↓
Proxima vez que abrir, novo tema e usado
```

Observacao de iniciante:

1. No seu arquivo, existe `toggleTheme()` e tambem esse `addEventListener` alterando tema.
2. Nas aulas isso pode aparecer para mostrar formas diferentes de fazer a mesma ideia.
3. Em projetos reais, geralmente escolhemos apenas uma abordagem para evitar confusao.

### Conceitos do exercicio 02

- `localStorage`: salva dados sem prazo de expiracao no navegador.
- `sessionStorage`: salva dados temporarios, apenas durante a aba aberta.
- `innerText`: altera o texto visivel de um elemento.
- `innerHTML`: altera o conteudo HTML interno (texto + tags).

### Diferenca rapida: innerText x innerHTML

- Use `innerText` para texto simples e seguro.
- Use `innerHTML` quando precisar inserir tags HTML.

### Resumo do exercicio 02

1. O formulario captura os dados digitados.
2. O `localStorage` guarda os dados e o tema no navegador.
3. A pagina aplica o tema salvo ao carregar.
4. O botao permite alternar e salvar tema novamente.

## Exercicio 03 - Criptografia de senha com CryptoJS

### Objetivo do exercicio

Entender o fluxo basico de criptografar e descriptografar senha no frontend para estudo.

### O que foi feito

1. Criada interface com input, botao e area de resultado.
2. Capturada senha digitada pelo usuario.
3. Criptografada senha com AES usando `CryptoJS`.
4. Salvo valor criptografado no `localStorage`.
5. Recuperado valor salvo e feita descriptografia.
6. Mostrado resultado na tela.

### Codigo 1 - Estrutura HTML usada

```html
<label for="password">Password:</label>
<input type="password" id="password" />
<button type="button" id="password-button">password</button>
<p id="resultado"></p>
```

Explicacao:

1. O usuario digita a senha no `input`.
2. O botao dispara o processamento.
3. O paragrafo `resultado` mostra a resposta final.

### Codigo 2 - Script principal comentado

```js
const secretKey = 'senhatrancada';

function processPassword() {
  const passwordInput = document.getElementById('password');
  const result = document.getElementById('resultado');
  const password = passwordInput.value;

  // valida se o campo esta vazio
  if (!password) {
    result.textContent = 'Digite uma senha primeiro.';
    return;
  }

  // criptografa com AES e transforma em string
  const encrypted = CryptoJS.AES.encrypt(password, secretKey).toString();

  // salva o valor criptografado no navegador
  localStorage.setItem('senha', encrypted);

  // le novamente do localStorage
  const stored = localStorage.getItem('senha');

  // descriptografa usando a mesma chave
  const decrypted = CryptoJS.AES.decrypt(stored, secretKey).toString(CryptoJS.enc.Utf8);

  // mostra o texto final na tela
  result.textContent = 'Password: ' + decrypted;
}

document.getElementById('password-button').addEventListener('click', processPassword);
```

### Explicacao do fluxo

1. O usuario digita uma senha.
2. Clica no botao.
3. O sistema valida se tem valor.
4. Se tiver, criptografa com `CryptoJS.AES.encrypt`.
5. Salva no `localStorage`.
6. Le novamente o valor salvo.
7. Descriptografa com `CryptoJS.AES.decrypt`.
8. Mostra o resultado no elemento `resultado`.

**Fluxo Completo:**
```
Usuario digita senha e clica botao
         ↓
Valida: campo esta preenchido?
         ↓
Se NAO → mostra mensagem de erro
         ↓
Se SIM → CryptoJS.AES.encrypt() criptografa
         ↓
localStorage.setItem() salva criptografado
         ↓
localStorage.getItem() le novamente
         ↓
CryptoJS.AES.decrypt() descriptografa com mesma chave
         ↓
textContent mostra resultado na tela
```

### Codigo 3 - Biblioteca usada no HTML

```html
<script src="https://cdn.jsdelivr.net/npm/crypto-js@4.2.0/crypto-js.min.js"></script>
```

Explicacao:

1. Essa biblioteca adiciona os metodos de criptografia no navegador.
2. Sem ela, `CryptoJS` nao existe e o codigo gera erro.

### Observacao importante para iniciante

1. Este exercicio e didatico, para entender o fluxo de criptografia.
2. Em aplicacoes reais, segredo/chave nao deve ficar exposto no frontend.

### Resumo do exercicio 03

1. O usuario digita a senha.
2. O sistema valida se o campo esta preenchido.
3. A senha e criptografada e salva.
4. O valor salvo e lido de novo.
5. A senha e descriptografada para exibicao.
6. A chave no frontend e apenas para fins de aula.

## Exercicio 04 - Fetch, async/await e API (em andamento)

### Objetivo do exercicio

Aprender requisicoes HTTP com `fetch`, tratamento de erros e manipulacao de dados vindos de API.

### O que foi feito

1. Praticado `fetch` com `then/catch`.
2. Praticado `fetch` com `async/await`.
3. Revisados metodos HTTP principais.
4. Testado cancelamento de requisicao com `AbortController`.
5. Praticada manipulacao de DOM com `innerText`, `innerHTML` e `appendChild`.

### API de teste usada: JSONPlaceholder

JSONPlaceholder e uma API falsa (de teste) usada para estudar requisicoes HTTP sem precisar criar um backend real.

Por que usar:

1. E gratis e simples para praticar.
2. Permite treinar `fetch`, `then/catch` e `async/await`.
3. Ajuda a praticar metodos HTTP como `GET`, `POST`, `PUT` e `DELETE`.

Importante para iniciante:

1. Alteracoes com `POST`, `PUT` e `DELETE` sao simuladas.
2. Ou seja, a API responde como se tivesse salvo, mas nao grava de forma permanente.

Endpoint de exemplo:

`https://jsonplaceholder.typicode.com/users`

### Entendendo de vez: `data-id="${product.id}"` e `target.dataset.id`

Se isso te confundiu, pense assim:

1. O JSON (da API) so traz dados, por exemplo `id`, `name`, `price`.
2. O JavaScript pega esses dados e cria elementos na tela com `createElement` ou `innerHTML`.
3. Nessa criacao, o codigo grava o id no elemento com `data-id`.
4. Depois, no clique, o codigo le esse mesmo valor com `target.dataset.id`.

Ou seja:

- `data-id="${product.id}"` = etapa de escrever o valor no elemento.
- `target.dataset.id` = etapa de ler o valor que foi escrito.

Por isso o professor diz que "e a mesma coisa":

1. E o mesmo dado (`id` do produto).
2. Mas usado em momentos diferentes (escrever e depois ler).

Importante para estudo:

1. Isso nao aparece no seu `index.html` fixo quando o elemento e criado dinamicamente.
2. Aparece no DOM em tempo de execucao (DevTools > Elements) e no Console.

Exemplo curto do fluxo:

```js
// veio da API (JSON)
const product = { id: 7, name: 'Teclado' };

// escreve no elemento
const btn = document.createElement('button');
btn.dataset.id = product.id; // equivalente a data-id="7"

// le no clique
btn.addEventListener('click', (event) => {
  console.log(event.target.dataset.id); // "7"
});
```

### Codigo 1 - Exemplo com then/catch (promises)

Este formato usa encadeamento de metodos. Cada `then` recebe o resultado da etapa anterior.

```js
const link = 'https://jsonplaceholder.typicode.com/users';

fetch(link) // faz a requisicao HTTP
  .then((resposta) => {
    // verifica se a resposta veio com sucesso (status 200-299)
    if (!resposta.ok) {
      throw new Error('Erro na requisicao: ' + resposta.status);
    }
    // converte o corpo da resposta para JSON
    return resposta.json();
  })
  .then((dados) => {
    // "dados" agora e um array/objeto JavaScript
    console.log('Dados recebidos:', dados);
  })
  .catch((erro) => {
    // captura erro de rede, status invalido ou falha no parse JSON
    console.error('Falha ao buscar dados:', erro.message);
  });
```

### Explicacao do fluxo do codigo 1

1. `fetch(link)` inicia a chamada para a API.
2. O primeiro `then` recebe o objeto `Response`.
3. `resposta.ok` valida se o status foi sucesso.
4. `resposta.json()` converte o retorno em objeto JavaScript.
5. O segundo `then` recebe os dados prontos para uso.
6. `catch` trata qualquer erro do processo.

**Fluxo Completo:**
```
fetch(link) envia requisicao para API
         ↓
Aguarda resposta chegar
         ↓
Primeiro then() verifica: resposta.ok (sucesso)?
         ↓
Se NAO → throw new Error envia para catch
         ↓
Se SIM → resposta.json() converte em objeto
         ↓
Segundo then() recebe dados prontos
         ↓
console.log mostra dados no console
         ↓
catch captura qualquer erro do processo
```

### Codigo 2 - Exemplo com async/await

Este formato faz a mesma coisa, mas com leitura mais parecida com codigo sincrono.

```js
async function getNomeDaApi() {
  try {
    const link = 'https://jsonplaceholder.typicode.com/users';

    // espera a resposta da API chegar
    const resposta = await fetch(link);

    // valida se o status da resposta e sucesso
    if (!resposta.ok) {
      throw new Error('Erro na requisicao: ' + resposta.status);
    }

    // converte para JSON (tambem e uma operacao assincrona)
    const dados = await resposta.json();

    // exibe os dados no console
    console.log('Dados recebidos:', dados);

    // retorna dados para usar em outro lugar, se precisar
    return dados;
  } catch (erro) {
    // trata qualquer erro da funcao
    console.error('Falha ao buscar dados:', erro.message);
    return [];
  }
}

getNomeDaApi();
```

### O que faz `getNomeDaApi();`

1. Essa linha executa a funcao `getNomeDaApi`.
2. Sem essa chamada, a funcao fica criada, mas nao roda.
3. Quando roda, ela busca os dados com `fetch`, converte para JSON e mostra no console.
4. Se acontecer erro, o `catch` trata e mostra a mensagem.

### Explicacao do fluxo do codigo 2

1. A funcao `async` permite usar `await` dentro dela.
2. `await fetch(...)` pausa ate a resposta chegar.
3. Se o status for invalido, o `throw` envia para o `catch`.
4. `await resposta.json()` converte JSON em objeto JavaScript.
5. O `catch` centraliza o tratamento de erro.

**Fluxo Completo:**
```
getNomeDaApi() e executada
         ↓
await fetch(link) pausa ate resposta chegar
         ↓
Verifica: resposta.ok (sucesso)?
         ↓
Se NAO → throw envia para catch
         ↓
Se SIM → await resposta.json() converte em objeto
         ↓
console.log mostra dados
         ↓
return retorna dados ou array vazio em caso de erro
```

### Metodos HTTP (resumo simples)

- `GET`: buscar dados.
- `POST`: criar/enviar dados novos.
- `PUT`: atualizar um recurso inteiro.
- `DELETE`: remover um recurso.

### Codigo 3 - AbortController (cancelar requisicao)

Serve para cancelar uma chamada que demorou muito ou quando o usuario sai da tela.

```js
const controller = new AbortController();

fetch('https://jsonplaceholder.typicode.com/users', {
  signal: controller.signal, // conecta o fetch ao controlador
})
  .then((r) => r.json())
  .then((dados) => console.log(dados))
  .catch((erro) => {
    // identifica cancelamento de requisicao
    if (erro.name === 'AbortError') {
      console.log('Requisicao cancelada');
    } else {
      console.error('Erro real:', erro);
    }
  });

// cancela a requisicao manualmente
controller.abort();
```

**Fluxo:**
```
new AbortController() cria controlador
         ↓
fetch envia signal ao controlador
         ↓
controller.abort() cancela a requisicao
         ↓
catch captura erro com nome 'AbortError'
         ↓
Verifica: foi abortado intencionalmente?
         ↓
Se SIM → mostra "Requisicao cancelada"
         ↓
Se NAO → mostra erro de rede ou outro
```

### Codigo 4 - DOM: innerText, innerHTML e appendChild

```js
const caixa = document.getElementById('resultado');

caixa.innerText = 'Texto simples';
// troca apenas texto visivel

caixa.innerHTML = '<strong>Texto com HTML</strong>';
// permite inserir tags HTML

const item = document.createElement('p');
item.innerText = 'Novo paragrafo';
caixa.appendChild(item);
// adiciona um novo elemento filho dentro de "caixa"
```

**Fluxo:**
```
caixa.innerText altera APENAS texto
         ↓
HTML tags sao ignoradas ou mostradas como texto
         ↓
-----------------------------------------
         ↓
caixa.innerHTML altera texto E tags
         ↓
Tags sao processadas e renderizadas
         ↓
-----------------------------------------
         ↓
document.createElement('p') cria novo elemento
         ↓
item.innerText adiciona texto nele
         ↓
caixa.appendChild(item) coloca dentro de caixa
```

### Qual versao usar no dia a dia?

- Para estudar base de promises, use `then/catch`.
- Para projetos reais e legibilidade, normalmente use `async/await`.
- As duas abordagens sao corretas; a escolha depende do contexto.

### Resumo do exercicio 04

1. `fetch` busca dados de APIs.
2. `then/catch` e `async/await` resolvem o mesmo problema, com estilos diferentes.
3. Metodo HTTP define a intencao da requisicao (buscar, criar, atualizar, remover).
4. `AbortController` cancela requisicoes.
5. Dados recebidos podem ser mostrados no HTML com manipulacao de DOM.


## Exercicio 05 - Buscar imagens de cachorro por raca

### Objetivo do exercicio

Aprender a consultar uma API externa, processar resposta JSON e exibir dados dinamicamente no HTML.

### O que foi feito

1. Capturado valor do formulario (raca de cachorro).
2. Validado se o campo esta preenchido.
3. Feita requisicao `fetch` para API publica de cachorro.
4. Convertido resposta em JSON.
5. Exibido imagem do cachorro no HTML de forma dinamica.
6. Mostrado mensagem de erro se raca nao existisse.

### API usada: Dog CEO

A API Dog CEO fornece imagens de cachorros por raca:

Endpoint exemplo:
```
https://dog.ceo/api/breed/husky/images/random
```

Resposta sucesso:
```json
{
  "message": "https://images.dog.ceo/breeds/husky/...",
  "status": "success"
}
```

Resposta erro:
```json
{
  "message": "Breed not found (master breed does not exist)",
  "status": "error"
}
```

Observacao:

1. E uma API publica e gratuita.
2. Nao precisa de autenticacao (JWT, token, etc.).
3. Retorna imagem aleatoria de cachorro da raca solicitada.

### Codigo - Fluxo completo simplificado

```js
const formulario = document.getElementById('breed-form');
const input = document.getElementById('breed');
const result = document.getElementById('result');

formulario.addEventListener('submit', async (event) => {
	event.preventDefault(); // evita recarregar pagina
	
	const raca = input.value.trim().toLowerCase(); // pega valor e limpa
	
	if (!raca) { // valida se vazio
		alert('Digite uma raça!');
		return;
	}
	
	const url = `https://dog.ceo/api/breed/${raca}/images/random`;
	const resposta = await fetch(url); // chama API
	const dados = await resposta.json(); // converte resposta em JSON
	
	if (dados.status === 'success') {
		// se sucesso, exibe imagem
		const image = `<img id="dog-image" alt="Imagem da raca pesquisada" src=${dados.message}>`;
		result.innerHTML = image;
	} else {
		// se erro, mostra alerta
		alert('Raça não encontrada!');
	}
});
```

### Explicacao linha por linha

#### 1. Capturar elementos do HTML

```js
const formulario = document.getElementById('breed-form');
const input = document.getElementById('breed');
const result = document.getElementById('result');
```

1. `formulario` pega o elemento `<form>`.
2. `input` pega o campo onde usuario digita a raca.
3. `result` pega a area onde imagem sera exibida.

**Fluxo:**
```
getElementById encontra elementos no HTML
         ↓
Armazena referencias para usar depois
         ↓
formulario, input, result ficam disponiveis
```

#### 2. Escutar clique do botao (submit do formulario)

```js
formulario.addEventListener('submit', async (event) => {
```

1. `addEventListener` aguarda usuario clicar botao de envio.
2. `async` permite usar `await` dentro da funcao.
3. `event` e o objeto de evento do clique.

**Fluxo:**
```
addEventListener aguarda submit do formulario
         ↓
Usuario clica botao "Buscar"
         ↓
Funcao async e disparada
         ↓
event contem informacoes do clique
```

#### 3. Evitar recarregar pagina

```js
	event.preventDefault();
```

1. Normalmente, ao clicar botao em form, pagina recarrega.
2. `preventDefault()` cancela isso.
3. Deixa JavaScript controlar o fluxo.

**Fluxo:**
```
form tentaria recarregar pagina (comportamento padrao)
         ↓
preventDefault() bloqueia isso
         ↓
JavaScript continua executando a funcao
```

#### 4. Pegar valor do input e limpar

```js
	const raca = input.value.trim().toLowerCase();
```

1. `input.value` pega texto que usuario digitou.
2. `.trim()` remove espacos em branco no inicio/fim.
3. `.toLowerCase()` transforma em minuscula (API espera assim).

**Fluxo:**
```
input.value pega o que usuario digitou
         ↓
.trim() remove espacos: "  HUSKY  " → "HUSKY"
         ↓
.toLowerCase() minuscula: "HUSKY" → "husky"
         ↓
raca = "husky" (pronto para API)
```

#### 5. Validar se nao esta vazio

```js
	if (!raca) {
		alert('Digite uma raça!');
		return;
	}
```

1. `!raca` e `true` se raca estiver vazia.
2. Se vazio, mostra alerta e sai da funcao com `return`.
3. Evita fazer requisicao desnecessaria.

**Fluxo:**
```
if (!raca) verifica: campo esta vazio?
         ↓
Se SIM → alert mostra erro e return sai
         ↓
Se NAO → codigo continua normalmente
```

#### 6. Montar URL com template string

```js
	const url = `https://dog.ceo/api/breed/${raca}/images/random`;
```

1. Template string usa `${}` para inserir variavel.
2. Se raca = `husky`, URL fica: `.../breed/husky/images/random`.

**Fluxo:**
```
Template string pega valor de raca
         ↓
Insere na URL no lugar de ${}
         ↓
Resultado: https://dog.ceo/api/breed/husky/images/random
```

#### 7. Chamar API com fetch

```js
	const resposta = await fetch(url);
```

1. `fetch(url)` faz requisicao HTTP (metodo `GET` por padrao).
2. `await` espera resposta chegar.
3. `resposta` e um objeto com status, headers, corpo, etc.

**Fluxo:**
```
fetch(url) envia requisicao para API
         ↓
await pausa o codigo ate resposta chegar
         ↓
resposta contem dados retornados pela API
```

#### 8. Converter resposta em JSON

```js
	const dados = await resposta.json();
```

1. `resposta.json()` le o corpo como JSON.
2. Retorna objeto JavaScript com `message` e `status`.
3. `await` aguarda conversao terminar.

**Fluxo:**
```
resposta.json() converte texto em objeto
         ↓
await aguarda conversao terminar
         ↓
dados = {status: "success", message: "https://..."}
```

#### 9. Verificar se sucesso e exibir

```js
	if (dados.status === 'success') {
		const image = `<img id="dog-image" alt="Imagem da raca pesquisada" src=${dados.message}>`;
		result.innerHTML = image;
	} else {
		alert('Raça não encontrada!');
	}
```

1. `dados.status` vem na resposta JSON.
2. Se for `'success'`, API retornou imagem valida.
3. `dados.message` contem URL da imagem.
4. Criamos tag `<img>` como texto e jogamos em `innerHTML`.
5. Se nao sucesso, mostra alerta de erro.

**Fluxo:**
```
if (dados.status === 'success') verifica resposta
         ↓
Se SIM → monta tag <img> com URL da imagem
         ↓
innerHTML coloca tag no HTML
         ↓
Imagem aparece na tela
         ↓
Se NAO → alert mostra "Raça não encontrada!"
```

### Por que `innerHTML` aqui e nao `innerText`?

- `innerText` coloca apenas texto dentro do elemento.
- `innerHTML` coloca texto + tags HTML e depois renderiza.

Se usasse `innerText`, mostraria: `<img id="dog-image" ... >` como texto.
Com `innerHTML`, a tag e interpretada e imagem aparece na tela.

### Entendendo `+=` vs `=` em innerHTML

```js
// isso substitui tudo que tinha antes
result.innerHTML = '<img src="...">';

// isso adiciona no final do que ja existia
result.innerHTML += '<img src="...">';
```

No codigo, usamos `=` para substituir (limpar antes de mostrar nova imagem).

### Conceitos praticados neste exercicio

1. **Fetch**: requisicao HTTP para API externa.
2. **Async/await**: esperar requisicao terminar.
3. **JSON**: converter resposta em objeto JavaScript.
4. **Validacao**: verificar se entrada e valida.
5. **Template string**: inserir variavel em texto com `${}`.
6. **DOM**: acessar e modificar HTML com JavaScript.
7. **Tratamento basico de erro**: `if/else` para sucesso/falha.

### Fluxo Completo do Exercicio 05

```
Usuario abre pagina
         ↓
Usuario digita raca (ex: "husky")
         ↓
Usuario clica botao "Buscar"
         ↓
event.preventDefault() evita recarregar
         ↓
trim().toLowerCase() limpa e minuscula
         ↓
Valida: campo preenchido? Se nao → alerta
         ↓
Monta URL parametrizada
         ↓
fetch(url) chama API
         ↓
resposta.json() converte em objeto
         ↓
Verifica: status = 'success'?
         ↓
Se SIM → <img> montada com URL
         ↓
innerHTML renderiza imagem
         ↓
Imagem aparece na tela
         ↓
Se NAO → alerta "Raça não encontrada"
```

### Resumo do exercicio 05

1. Usuario digita raca e clica botao.
2. JavaScript pega o valor e valida.
3. JavaScript chama API com URL parametrizada.
4. API retorna JSON com URL da imagem.
5. JavaScript exibe imagem no HTML.
6. Se erro, mostra alerta simples.

## Exercicio 06 - APIs do navegador: mensagem, notificacao e fala

### Objetivo do exercicio

Aprender a usar APIs do navegador no frontend para mostrar mensagem na pagina, disparar notificacao e reproduzir fala com voz sintetizada.

### O que foi feito

1. Criado um botao para exibir uma mensagem dentro da propria pagina.
2. Mantido um botao separado para acionar a fala com `SpeechSynthesisUtterance`.
3. Verificado suporte a `Notification` no navegador.
4. Solicitada permissao de notificacao somente quando necessario.
5. Exibida uma notificacao do navegador quando a permissao e concedida.

### Codigo 1 - Estrutura HTML usada

```html
<button id="btn2">Clica em mim</button>

<button id="btn">Falar</button>

<p id="mensagem"></p>
```

Explicacao:

1. `btn2` e o botao principal do exercicio 06.
2. `btn` dispara apenas a fala.
3. `mensagem` e a area onde o texto aparece na pagina.

**Fluxo:**
```
Usuario clica no botao
         ↓
JavaScript pega o elemento <p id="mensagem">
         ↓
textContent escreve a mensagem na pagina
         ↓
O usuario ve o resultado no navegador
```

### Codigo 2 - Mostrar mensagem e tentar notificar

```js
button2.addEventListener("click", () => {
  mensagem.textContent = "exercicio 06 - APIs JavaScript do Navegador.";

  if ("Notification" in window) {
    const mostrar = () => mostrarNotificacao("Mensagem", "Isto veio da Notification API!");

    if (Notification.permission === "granted") {
      mostrar();
      return;
    }

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        mostrar();
      }
    });
  }
});
```

Explicacao:

1. O clique no botao dispara a funcao.
2. A mensagem aparece na pagina com `textContent`.
3. O codigo verifica se o navegador suporta `Notification`.
4. Se a permissao ja existe, a notificacao aparece na hora.
5. Se nao existe, o navegador pede permissao ao usuario.
6. Se o usuario permitir, a notificacao e exibida.

**Fluxo:**
```
Usuario clica em "Clica em mim"
         ↓
Mensagem aparece no paragrafo da pagina
         ↓
Verifica se o navegador suporta Notification
         ↓
Se a permissao ja foi aceita → mostra a notificacao
         ↓
Se a permissao ainda nao existe → pede permissao
         ↓
Se o usuario aceitar → mostra a notificacao
```

### Codigo 3 - Fala com Web Speech API

```js
button.addEventListener("click", () => {
  falar("Olá! Isto é uma demonstração.");
});

function falar(texto) {
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = "pt-PT";
  speechSynthesis.speak(utterance);
}
```

Explicacao:

1. O clique no botao `Falar` chama a funcao `falar`.
2. `SpeechSynthesisUtterance` cria o texto que sera falado.
3. `utterance.lang` define o idioma da voz.
4. `speechSynthesis.speak()` reproduz a fala no navegador.

**Fluxo:**
```
Usuario clica em "Falar"
         ↓
falar() cria o texto da fala
         ↓
SpeechSynthesisUtterance prepara a voz
         ↓
speechSynthesis.speak() executa a fala
         ↓
O navegador fala o texto em voz alta
```

### Codigo 4 - Criar a notificacao

```js
function mostrarNotificacao(titulo, corpo) {
  if (Notification.permission === "granted") {
    new Notification(titulo, {
      body: corpo,
      icon: "https://cdn-icons-png.flaticon.com/512/1827/1827504.png",
    });
  }
}
```

Explicacao:

1. A funcao recebe titulo e corpo da notificacao.
2. Ela so cria a notificacao se a permissao estiver liberada.
3. O `icon` define uma imagem pequena para aparecer na notificacao.

### Observacao importante para iniciante

1. A Notification API precisa de permissao do usuario.
2. Em alguns casos, ela funciona melhor em `localhost` ou `https`.
3. A fala com voz sintetizada depende do suporte do navegador.

### Resumo do exercicio 06

1. O usuario clica no botao e ve uma mensagem na pagina.
2. O navegador pode pedir permissao para notificacao.
3. Se a permissao for aceita, a notificacao aparece.
4. O botao "Falar" continua executando apenas a fala.
