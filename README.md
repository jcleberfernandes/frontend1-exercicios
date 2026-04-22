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
- `exercicio-07`: introducao a `Canvas API` (conceitos e planejamento de pratica).
- `exercicio-08`: introducao a `Web Components` (Custom Elements e Shadow DOM).

## Exercicio 01 - JSON e leitura de arquivo

### Objetivo do exercicio

Aprender o basico de JSON: criar objeto, converter para JSON, converter de volta para objeto e ler um arquivo JSON local.

### O que foi feito

1. Criado um objeto JavaScript com nome, idade e email.
2. Convertido objeto para JSON string com `JSON.stringify`.
3. Convertido JSON string para objeto com `JSON.parse`.
4. Lido o arquivo local `data.json` com `fetch`.
5. Mostrados os dados no HTML usando `textContent`.

### Componentes do exercicio 01 (o que cada um faz)

1. `index.html`: fornece os elementos de tela (`nome`, `idade`, `email`) onde os dados aparecem.
2. `exercicio-01.js`: contem a logica de criar objeto, converter JSON e preencher a pagina.
3. `data.json`: arquivo local com dados estruturados para teste de leitura.
4. `JSON.stringify`: converte objeto JavaScript em texto JSON.
5. `JSON.parse`: converte texto JSON de volta para objeto JavaScript.
6. `fetch`: busca o arquivo `data.json` para uso no frontend.
7. `textContent`: escreve os valores no HTML sem interpretar tags.

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

### Componentes do exercicio 02 (o que cada um faz)

1. `index.html`: contem formulario, campos de entrada e botao de tema.
2. `script.js`: captura valores, salva dados e alterna tema da interface.
3. `localStorage`: guarda dados e tema no navegador para manter entre sessoes.
4. `theme-button`: botao que dispara a mudanca entre claro e escuro.
5. `classList` no `body`: aplica ou remove a classe `dark` para trocar visual.
6. `style.css`: define como o layout fica no modo normal e no modo escuro.

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

### Componentes do exercicio 03 (o que cada um faz)

1. `input#password`: recebe a senha digitada pelo usuario.
2. `button#password-button`: inicia o processo de criptografar e descriptografar.
3. `p#resultado`: mostra mensagem de validacao e resultado final.
4. `CryptoJS` (CDN): biblioteca que fornece `AES.encrypt` e `AES.decrypt`.
5. `secretKey`: chave usada para criptografar e descriptografar o valor.
6. `localStorage`: armazena temporariamente a senha criptografada para estudo.

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

### Componentes do exercicio 04 (o que cada um faz)

1. `fetch`: faz chamadas HTTP para buscar dados de API.
2. `JSONPlaceholder`: API de teste para praticar `GET`, `POST`, `PUT` e `DELETE`.
3. `then/catch`: trata sucesso e erro com encadeamento de promises.
4. `async/await`: organiza fluxo assincrono com leitura mais simples.
5. `AbortController`: permite cancelar requisicoes em andamento.
6. `innerText`, `innerHTML`, `appendChild`: exibem e montam conteudo no DOM.
7. `data-id` e `dataset`: guardam e recuperam identificadores em elementos HTML.

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

### Componentes do exercicio 05 (o que cada um faz)

1. `form#breed-form`: dispara o envio ao clicar no botao de busca.
2. `input#breed`: recebe a raca digitada pelo usuario.
3. `div#result`: area onde a imagem retornada sera renderizada.
4. `fetch` + Dog CEO API: busca uma imagem aleatoria da raca informada.
5. `await resposta.json()`: transforma resposta da API em objeto JavaScript.
6. `innerHTML`: injeta a tag `<img>` para mostrar a imagem na tela.
7. `if (!raca)` e `if (dados.status === 'success')`: validam entrada e retorno da API.

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

### Componentes do exercicio 06 (o que cada um faz)

1. `button#btn2`: aciona exibicao de mensagem e tentativa de notificacao.
2. `button#btn`: aciona a leitura em voz alta (fala sintetizada).
3. `p#mensagem`: mostra texto na interface apos clique.
4. `Notification API`: cria notificacoes nativas do navegador.
5. `Notification.requestPermission()`: solicita autorizacao do usuario.
6. `SpeechSynthesisUtterance`: cria o conteudo de voz para o navegador falar.
7. `speechSynthesis.speak()`: reproduz o texto com voz sintetizada.

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


## Exercicio 07 - Canvas API

### Objetivo do exercicio

Entender os fundamentos da `Canvas API`: como criar uma area de desenho, obter o contexto `2d`, desenhar formas basicas, aplicar estilos e preparar animacoes simples.

### O que foi feito

1. Registradas anotacoes de introducao sobre o elemento `<canvas>`.
2. Revisado o papel do `getContext('2d')` para desenhar via JavaScript.
3. Mapeados topicos essenciais para estudo: formas, cores e animacao.
4. Anotado uso de `clearRect` e `requestAnimationFrame` para animacoes.
5. Preparado o exercicio para implementacao pratica no proximo passo.

### Componentes do exercicio 07 (o que cada um faz)

1. `<canvas id="tela">`: area onde os desenhos sao renderizados.
2. `ctx = canvas.getContext('2d')`: objeto com metodos de desenho 2D.
3. `xCoord` e `yCoord`: controlam posicao de elementos desenhados.
4. `fillRect`, `strokeRect`, `arc`, `ellipse`: desenham formas geometricas.
5. `keydown` + `switch (e.code)`: controla movimento por teclado.
6. `clearRect`: limpa o quadro anterior para evitar rastro visual.
7. `requestAnimationFrame`: cria loop de animacao sincronizado com a tela.

### Estado atual dos arquivos do exercicio 07


1. `index.html` foi criado, mas ainda sem conteudo.
2. `script.js` foi criado, mas ainda sem conteudo.
3. `style.css` foi criado, mas ainda sem conteudo.

### Codigo 1 - Estrutura base do Canvas (exemplo de estudo)

```html
<canvas id="tela" width="500" height="300"></canvas>
```

```js
const canvas = document.getElementById('tela');
const ctx = canvas.getContext('2d');
```

Explicacao:

1. `<canvas>` cria uma area de desenho na pagina.
2. `width` e `height` definem o tamanho da area.
3. `getContext('2d')` libera as funcoes para desenhar formas, linhas e textos.

**Fluxo:**
```
HTML cria elemento canvas
         ↓
JavaScript pega o elemento com getElementById
         ↓
getContext('2d') cria contexto de desenho
         ↓
ctx fica pronto para desenhar
```

### Coordenadas no Canvas - xCoord e yCoord

No Canvas, quase tudo depende de coordenadas.

1. `xCoord` controla horizontal (esquerda e direita).
2. `yCoord` controla vertical (cima e baixo).
3. Quando voce altera `xCoord` e `yCoord`, o desenho muda de lugar na tela.

Exemplo rapido:

```js
let xCoord = 30;
let yCoord = 60;

ctx.fillStyle = '#2563eb';
ctx.fillRect(xCoord, yCoord, 80, 50);
```

Explicacao:

1. `fillRect(xCoord, yCoord, largura, altura)` usa `xCoord` e `yCoord` como ponto inicial.
2. Se `xCoord` aumentar, o retangulo vai para a direita.
3. Se `yCoord` aumentar, o retangulo desce na tela.

**Fluxo:**
```
Define xCoord e yCoord
         ↓
fillRect usa coordenadas para posicionar desenho
         ↓
Alterar coordenadas muda a posicao no canvas
```

### Posicoes, medidas e angulos no Canvas

Para desenhar com precisao, pense em 3 partes: posicao, medida e angulo.

1. Posicao: `x` e `y` dizem onde o desenho comeca.
2. Medida: largura, altura e raio dizem o tamanho do desenho.
3. Angulo: define direcao de linha, rotacao e trechos de circulo.

#### 1. Posicoes no eixo X e Y

1. No canvas, o ponto `(0, 0)` fica no canto superior esquerdo.
2. `x` aumenta para a direita.
3. `y` aumenta para baixo.

Exemplo:

```js
const x = 120;
const y = 80;

ctx.fillStyle = '#2563eb';
ctx.fillRect(x, y, 60, 40);
```

Nesse caso, o retangulo comeca no ponto `(120, 80)`.

#### 2. Medidas de cada forma

1. `fillRect(x, y, largura, altura)` usa largura e altura em pixels.
2. `arc(x, y, raio, inicio, fim)` usa raio em pixels.
3. Quanto maior a medida, maior o desenho na tela.

Exemplo:

```js
ctx.fillRect(20, 30, 100, 50); // largura 100, altura 50

ctx.beginPath();
ctx.arc(220, 60, 30, 0, Math.PI * 2); // raio 30
ctx.fill();
```

#### 3. Angulos para linhas e circulos

No Canvas, angulos normalmente usam radianos.

1. `0` rad = direita.
2. `Math.PI / 2` = baixo.
3. `Math.PI` = esquerda.
4. `Math.PI * 2` = volta completa (360 graus).

Conversao util:

1. Graus para radianos: rad = graus * (Math.PI / 180)

Exemplo com arco:

```js
const inicio = 0;
const fim = 90 * (Math.PI / 180); // 90 graus

ctx.beginPath();
ctx.arc(320, 80, 40, inicio, fim);
ctx.stroke();
```

Exemplo com direcao entre dois pontos:

```js
const x1 = 60;
const y1 = 60;
const x2 = 180;
const y2 = 120;

const angulo = Math.atan2(y2 - y1, x2 - x1);
```

`Math.atan2` ajuda a calcular o angulo de direcao de um ponto para outro.

#### 4. Assinaturas do arc()

No Canvas, voce vai ver estas duas formas de usar:

```js
arc(x, y, radius, startAngle, endAngle)
arc(x, y, radius, startAngle, endAngle, counterclockwise)
```

Explicacao de cada parametro:

1. `x`: coordenada horizontal do centro do circulo/arco.
2. `y`: coordenada vertical do centro do circulo/arco.
3. `radius`: raio do circulo/arco em pixels.
4. `startAngle`: angulo inicial em radianos.
5. `endAngle`: angulo final em radianos.
6. `counterclockwise` (opcional):
7. `false` (padrao) desenha no sentido horario.
8. `true` desenha no sentido anti-horario.

Exemplo 1 - sem `counterclockwise` (padrao horario):

```js
ctx.beginPath();
ctx.arc(150, 100, 40, 0, Math.PI); // meia volta superior
ctx.stroke();
```

Exemplo 2 - com `counterclockwise = true`:

```js
ctx.beginPath();
ctx.arc(280, 100, 40, 0, Math.PI, true); // meia volta no sentido oposto
ctx.stroke();
```

Resumo rapido:

1. Os 5 primeiros parametros definem centro, tamanho e faixa de angulo.
2. O ultimo parametro so define o sentido do desenho do arco.

### Codigo 2 - Formas basicas e cores (exemplo de estudo)

```js
ctx.fillStyle = '#2ecc71';
ctx.fillRect(20, 20, 120, 80);

ctx.strokeStyle = '#1f2937';
ctx.lineWidth = 3;
ctx.strokeRect(170, 20, 120, 80);
```

Explicacao:

1. `fillStyle` define a cor de preenchimento.
2. `fillRect(x, y, largura, altura)` desenha um retangulo preenchido.
3. `strokeStyle` define a cor da borda.
4. `strokeRect(...)` desenha apenas o contorno.

Outros exemplos uteis alem de `fillRect`:

```js
ctx.clearRect(20, 20, 120, 80); // limpa uma area

ctx.fillStyle = '#f59e0b';
ctx.fillRect(40, 120, 100, 60); // retangulo preenchido

ctx.strokeStyle = '#111827';
ctx.strokeRect(180, 120, 100, 60); // retangulo com borda

ctx.beginPath();
ctx.arc(340, 150, 30, 0, Math.PI * 2); // circulo
ctx.fillStyle = '#ef4444';
ctx.fill();

ctx.font = '18px sans-serif';
ctx.fillStyle = '#1f2937';
ctx.fillText('Canvas API', 20, 240); // texto no canvas
```

Explicacao dos extras:

1. `clearRect` apaga uma area especifica.
2. `arc` desenha circulo/arco (com `beginPath` antes).
3. `fillText` escreve texto na tela do canvas.

### Formas geometricas no Canvas (passo a passo)

Aqui esta um guia direto para criar as formas mais usadas.

#### 1. Quadrado e Retangulo com fillStyle

```js
ctx.fillStyle = '#22c55e'; // cor de preenchimento
ctx.fillRect(40, 40, 80, 80); // quadrado (largura = altura)

ctx.fillStyle = '#3b82f6';
ctx.fillRect(150, 40, 140, 80); // retangulo
```

Explicacao:

1. `fillStyle` define a cor da proxima forma preenchida.
2. `fillRect(x, y, largura, altura)` desenha a forma preenchida.
3. Se largura e altura forem iguais, voce tem um quadrado.

#### 2. Circle (circulo) com beginPath + arc + fillStyle

```js
ctx.beginPath();
ctx.fillStyle = '#f97316';
ctx.arc(110, 180, 45, 0, Math.PI * 2);
ctx.fill();
```

Explicacao:

1. `beginPath()` inicia um novo caminho (evita misturar com formas anteriores).
2. `arc(x, y, raio, inicio, fim)` define o circulo.
3. `fillStyle` define a cor interna do circulo.
4. `fill()` pinta o interior da forma.

#### 3. Triangulo com beginPath

```js
ctx.beginPath();
ctx.moveTo(220, 220); // ponto 1
ctx.lineTo(280, 140); // ponto 2
ctx.lineTo(340, 220); // ponto 3
ctx.closePath();
ctx.fillStyle = '#ef4444';
ctx.fill();
```

Explicacao:

1. `moveTo` posiciona o inicio do desenho.
2. `lineTo` cria as arestas do triangulo.
3. `closePath` fecha a forma ligando ultimo ponto ao primeiro.
4. `fill()` preenche o triangulo com a cor definida em `fillStyle`.

#### 4. Linha com strokeStyle

```js
ctx.beginPath();
ctx.moveTo(30, 280);
ctx.lineTo(350, 280);
ctx.lineWidth = 4;
ctx.strokeStyle = '#111827';
ctx.stroke();
```

Explicacao:

1. `strokeStyle` define a cor da borda/linha.
2. `lineWidth` define espessura da linha.
3. `stroke()` desenha somente o contorno do caminho.

#### 5. Elipse com ellipse

```js
ctx.beginPath();
ctx.ellipse(430, 90, 70, 40, 0, 0, Math.PI * 2);
ctx.fillStyle = '#a855f7';
ctx.fill();
```

Explicacao:

1. `ellipse(x, y, raioX, raioY, rotacao, inicio, fim)` cria uma elipse.
2. `raioX` e `raioY` controlam largura e altura da elipse.

#### 6. Poligono (exemplo: pentagono)

```js
ctx.beginPath();
ctx.moveTo(430, 180);
ctx.lineTo(470, 150);
ctx.lineTo(510, 180);
ctx.lineTo(495, 225);
ctx.lineTo(445, 225);
ctx.closePath();
ctx.fillStyle = '#14b8a6';
ctx.fill();
```

Explicacao:

1. Poligono e uma forma com varios lados.
2. Voce monta o poligono criando pontos com `moveTo` e `lineTo`.
3. `closePath` fecha a ultima aresta.

#### 7. Diferenca rapida: fillStyle vs strokeStyle

1. `fillStyle`: cor de preenchimento (parte interna).
2. `strokeStyle`: cor de contorno (borda/linha).

#### 8. Quando usar beginPath

1. Use `beginPath()` antes de uma nova forma baseada em caminho (`arc`, `lineTo`, `ellipse`).
2. Isso evita que o desenho atual conecte com o caminho da forma anterior.

**Fluxo geral para desenhar qualquer forma:**
```
Escolher tipo de forma
         ↓
Definir posicao (x, y)
         ↓
Definir medidas (largura, altura, raio)
         ↓
Definir estilo (fillStyle ou strokeStyle)
         ↓
Desenhar (fillRect, arc, lineTo, ellipse...)
         ↓
Finalizar com fill() ou stroke()
```

### Codigo 3 - Interacao com teclado (ArrowRight, ArrowLeft, switch/case, e.code e e.key)

```js
let xCoord = 50;
let yCoord = 120;

function desenharJogador() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#2563eb';
  ctx.fillRect(xCoord, yCoord, 50, 50);
}

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowRight':
      xCoord += 10;
      break;
    case 'ArrowLeft':
      xCoord -= 10;
      break;
    case 'ArrowUp':
      yCoord -= 10;
      break;
    case 'ArrowDown':
      yCoord += 10;
      break;
  }

  desenharJogador();
});

desenharJogador();
```

Explicacao:

1. `document.addEventListener('keydown', ...)` escuta tecla pressionada.
2. `e.code` identifica qual tecla foi usada (`ArrowRight`, `ArrowLeft`, etc.).
3. `e.key` mostra o valor da tecla pressionada (exemplo: `ArrowRight`, `a`, `A`, `Enter`).
4. `switch/case` organiza a regra para cada tecla.
5. Cada seta altera `xCoord` ou `yCoord`.
6. Depois de alterar coordenadas, `desenharJogador()` redesenha na nova posicao.

Resumo rapido de diferenca:

1. `e.code`: identifica a tecla fisica (posicao no teclado).
2. `e.key`: identifica o valor digitado da tecla.

**Fluxo:**
```
Usuario pressiona seta do teclado
         ↓
keydown captura evento
         ↓
switch(e.code) identifica tecla
         ↓
Atualiza xCoord/yCoord
         ↓
clearRect limpa quadro antigo
         ↓
fillRect desenha objeto na nova posicao
```

### Codigo 4 - Animacao simples com requestAnimationFrame (exemplo de estudo)

```js
let x = 0;

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = '#2563eb';
  
  ctx.fillRect(x, 120, 50, 50);

  x += 2;
  if (x > canvas.width) x = -50;

  requestAnimationFrame(animar);
}

animar();
```

Explicacao:

1. `clearRect(0, 0, canvas.width, canvas.height)` limpa o quadro anterior para evitar rastro.
2. Os dois zeros significam o ponto inicial da limpeza: `x = 0` e `y = 0`.
3. Esse ponto `(0, 0)` e o canto superior esquerdo do canvas.
4. Como a largura e altura usadas sao `canvas.width` e `canvas.height`, a limpeza cobre o canvas inteiro.
5. O quadrado e redesenhado em nova posicao a cada frame.
6. `requestAnimationFrame` chama a funcao de novo no proximo frame.
7. Esse ciclo cria uma animacao suave no navegador.

**Fluxo:**
```
animar() inicia
         ↓
clearRect limpa quadro anterior
         ↓
fillRect desenha objeto na nova posicao
         ↓
atualiza coordenada x
         ↓
requestAnimationFrame agenda proximo frame
         ↓
loop continuo de animacao
```

### Conceitos do exercicio 07

- `canvas`: area desenhavel controlada por JavaScript.
- `ctx` (contexto 2d): objeto com metodos de desenho.
- `xCoord` e `yCoord`: coordenadas para posicionar e mover elementos.
- `x` e `y`: eixos de posicao (origem no canto superior esquerdo).
- medidas: largura, altura e raio para definir tamanho.
- angulos: usados em arcos, rotacoes e direcao de movimento.
- `e.code`: identifica a tecla pressionada no teclado.
- `e.key`: identifica o valor da tecla pressionada no evento.
- `switch/case`: ajuda a separar a acao de cada tecla.
- `clearRect`: limpa parte da tela.
- `requestAnimationFrame`: atualiza animacao com sincronismo de tela.

### Resumo do exercicio 07

1. O foco de hoje foi consolidar a base teorica da Canvas API.
2. Foram definidos os principais comandos para desenhar, mover e animar.
3. A estrutura do exercicio 07 ja existe na pasta.
4. As novas anotacoes de teclado, coordenadas e interacao foram explicadas com exemplos.
5. O proximo passo e preencher `index.html`, `script.js` e `style.css` com a pratica.

## Exercicio 08 - Web Components

### Objetivo do exercicio

Entender o conceito de Web Components e como criar componentes reutilizaveis no navegador usando JavaScript puro, sem framework.

### O que foi feito

1. Registradas anotacoes sobre o que sao Web Components.
2. Iniciado exemplo de classe com `extends HTMLElement`.
3. Revisado ciclo de vida basico dos Custom Elements.
4. Mapeadas as partes principais: `Custom Elements` e `Shadow DOM`.

### Componentes do exercicio 08 (o que cada um faz)

1. `class ... extends HTMLElement`: define um novo tipo de elemento HTML.
2. `customElements.define(...)`: registra a nova tag para uso no HTML.
3. `connectedCallback()`: executa quando o componente entra no DOM.
4. `attributeChangedCallback()`: reage a mudanca de atributos observados.
5. `attachShadow({ mode: 'open' })`: cria DOM encapsulado para estrutura e estilos.
6. `shadow.innerHTML`: renderiza o conteudo interno do componente.
7. Tag customizada (ex.: `<my-element>`): ponto de uso do componente na pagina.

### Introducao: o que sao Web Components

Web Components sao uma forma nativa de criar componentes reutilizaveis com HTML, CSS e JS.

Vantagens principais:

1. Reutilizacao: voce cria um componente e usa em varias paginas.
2. Encapsulamento: estilo e estrutura podem ficar isolados.
3. Independencia: nao depende de React, Vue ou Angular para funcionar.

### Partes principais dos Web Components

1. `Custom Elements`: permite criar novas tags HTML personalizadas (exemplo: `<meu-card></meu-card>`).
2. `Shadow DOM`: cria um DOM interno encapsulado para o componente.
3. `HTML Template` (uso comum): ajuda a definir estrutura reutilizavel.

### Codigo 1 - Estrutura inicial do componente

```js
class MyElement extends HTMLElement {
  connectedCallback() {}
}
```

Explicacao:

1. `class MyElement extends HTMLElement` cria um novo tipo de elemento HTML.
2. `connectedCallback()` e executado quando o componente entra na pagina.
3. Esse e o ponto de partida para renderizar conteudo e configurar eventos.

### Codigo 2 - Registrar o Custom Element

```js
customElements.define('my-element', MyElement);
```

Explicacao:

1. `customElements.define` registra o nome da nova tag.
2. O nome deve ter hifen (exemplo: `my-element`).
3. Depois disso, voce pode usar `<my-element></my-element>` no HTML.

### Codigo 3 - Exemplo com Shadow DOM

```js
class MyElement extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        p { color: #2563eb; font-weight: bold; }
      </style>
      <p>Componente com Shadow DOM</p>
    `;
  }
}

customElements.define('my-element', MyElement);
```

Explicacao:

1. `attachShadow({ mode: 'open' })` cria o DOM interno encapsulado.
2. O CSS dentro do shadow afeta somente o componente.
3. Isso evita conflito de estilo com o resto da pagina.

### Ciclo de vida dos Custom Elements

Metodos importantes:

1. `connectedCallback()`: roda quando o elemento e adicionado no DOM.
2. `disconnectedCallback()`: roda quando o elemento e removido do DOM.
3. `attributeChangedCallback()`: roda quando um atributo observado muda.

Exemplo curto:

```js
class UserCard extends HTMLElement {
  static get observedAttributes() {
    return ['name'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<p>Nome: ${this.getAttribute('name') || 'Sem nome'}</p>`;
  }
}

customElements.define('user-card', UserCard);
```

### Fluxo basico de uso

```
Criar classe com extends HTMLElement
         ↓
Registrar com customElements.define()
         ↓
Usar a nova tag no HTML
         ↓
connectedCallback executa ao entrar no DOM
         ↓
Componente renderiza conteudo
```

### Conclusao

1. Web Components sao ferramentas nativas e poderosas do browser.
2. Permitem criar interfaces modulares, reutilizaveis e encapsuladas.
3. Sao muito uteis para organizar projetos maiores no futuro.

### Resumo do exercicio 08

1. Foi iniciada a base teorica e pratica de Web Components.
2. O conceito de Custom Elements e Shadow DOM foi organizado no README.
3. Os exemplos estao baseados somente nas anotacoes adicionadas no README.
4. O proximo passo e transformar esses exemplos em implementacao pratica.

## Exercicio 09 - Galeria de imagens com Splide.js

### Objetivo do exercicio

Aprender, de forma simples, como usar uma biblioteca externa para criar um carrossel de imagens.

### O que foi feito

1. Incluida a biblioteca Splide.js via CDN.
2. Criada uma estrutura HTML com varias imagens.
3. Inicializado o carrossel com JavaScript.
4. Incluida uma segunda biblioteca, AOS, para animar o titulo.

### Componentes do exercicio 09 (o que cada um faz)

1. Estrutura `splide` no HTML: define o container do carrossel.
2. `splide__track`: area de movimento dos slides.
3. `splide__list` e `splide__slide`: lista de itens e cada slide individual.
4. CDN do `Splide` (CSS e JS): fornece estilo e comportamento do carrossel.
5. `new Splide(...).mount()`: inicializa e ativa a galeria.
6. Configuracoes (`loop`, `autoplay`, `arrows`, `pagination`): controlam comportamento visual.
7. CDN do `AOS` + `AOS.init()`: adiciona animacao ao titulo.

### Biblioteca 1 - Splide.js

Splide.js e uma biblioteca pronta para criar carrosseis.

Ela ajuda a mostrar imagens uma de cada vez, com botao de avancar, voltar e bolinhas de navegacao.

### Biblioteca 2 - AOS

AOS significa "Animate On Scroll".

No exercicio, ela e usada de forma simples para animar o titulo quando a pagina carrega.

### Codigo 1 - HTML da galeria

```html
<section class="splide" aria-label="Galeria de imagens">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide"><img src="https://picsum.photos/id/1015/1200/800" alt="Paisagem com montanhas"></li>
      <li class="splide__slide"><img src="https://picsum.photos/id/1025/1200/800" alt="Cachorro olhando para a camera"></li>
      <li class="splide__slide"><img src="https://picsum.photos/id/1035/1200/800" alt="Estrada entre arvores"></li>
      <li class="splide__slide"><img src="https://picsum.photos/id/1043/1200/800" alt="Vista do mar com pedras"></li>
    </ul>
  </div>
</section>
```

Explicacao:

1. `splide` e a classe principal do carrossel.
2. `splide__track` e a area que segura o conteudo.
3. `splide__list` e a lista das imagens.
4. `splide__slide` e cada imagem do carrossel.

### Codigo 2 - Incluir as bibliotecas via CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css">
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">

<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

Explicacao:

1. O primeiro `link` traz os estilos do carrossel.
2. O segundo `link` traz os estilos da animacao.
3. O primeiro `script` traz o JavaScript do carrossel.
4. O segundo `script` traz o JavaScript da animacao.

### Codigo 3 - Inicializar o carrossel

```js
document.addEventListener('DOMContentLoaded', () => {
  new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 2500,
    arrows: true,
    pagination: true,
    speed: 700,
  }).mount();

  AOS.init({
    duration: 800,
    once: true,
  });
});
```

Explicacao:

1. `DOMContentLoaded` espera o HTML carregar antes de rodar o JavaScript.
2. `new Splide('.splide', {...})` cria o carrossel.
3. `loop` faz a galeria voltar para o inicio.
4. `autoplay` faz as imagens passarem sozinhas.
5. `arrows` mostra os botoes de avancar e voltar.
6. `pagination` mostra as bolinhas embaixo.
7. `AOS.init()` ativa a animacao do titulo.

### Fluxo simples do exercicio 09

```
HTML cria a estrutura da galeria
         ↓
CDN carrega Splide.js e AOS
         ↓
JavaScript espera a pagina carregar
         ↓
Splide monta o carrossel
         ↓
AOS anima o titulo
         ↓
Usuario ve a galeria funcionando
```

### Resumo do exercicio 09

1. Foi criado um carrossel de imagens com Splide.js.
2. As imagens foram colocadas em uma estrutura HTML simples.
3. O JavaScript iniciou o carrossel automaticamente.
4. A biblioteca AOS foi incluida para mostrar uma segunda biblioteca no projeto.
5. O exercicio foi montado de forma simples para facilitar o entendimento.

## Exercicio 10 - Progressive Web Apps (PWA)

### Objetivo do exercicio

Entender a base de um PWA: por que usar, quais arquivos sao obrigatorios e como registrar o `Service Worker`.

### Por que usar PWA

1. Acesso offline: o app pode continuar funcionando sem internet (dependendo do cache configurado).
2. Instalacao: o usuario pode adicionar o app na tela inicial do celular ou desktop.
3. Performance: com cache bem configurado, o carregamento fica mais rapido.
4. Engajamento: notificacoes e acesso direto aumentam retorno do usuario.

### Componentes principais de um PWA

1. `Service Worker`: script em background para cache, estrategia offline e notificacoes.
2. `manifest.json`: arquivo com nome, icones e configuracao visual do app instalado.
3. `HTTPS`: exigencia de seguranca para funcionar em ambiente real (localhost e excecao no desenvolvimento).

### Requisitos minimos

1. Ter um `Service Worker` registrado no navegador.
2. Ter um `manifest.json` valido.
3. Servir a aplicacao com `HTTPS` (ou `localhost` durante desenvolvimento).

### Componentes do exercicio 10 (o que cada um faz)

1. `manifest.json`: define nome, icones, cores e modo de exibicao do app instalado.
2. `<link rel="manifest" ...>`: conecta o manifest ao HTML.
3. `service-worker.js`: executa em background para cache e estrategia offline.
4. `navigator.serviceWorker.register(...)`: registra o Service Worker no navegador.
5. `HTTPS` (ou localhost): requisito de seguranca para recursos de PWA.
6. `icons` do manifest: imagens usadas na instalacao e atalho do app.

### Codigo 1 - Exemplo de manifest.json comentado

```json
{
  "name": "Meu PWA",
  "short_name": "PWA",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2563eb",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

Explicacao dos campos do manifest:

1. `name`: nome completo do app (exibido em tela de instalacao e configuracoes).
2. `short_name`: nome curto para locais com pouco espaco (icone na tela inicial).
3. `start_url`: rota inicial aberta quando o app e iniciado.
4. `display: "standalone"`: abre como app instalado, sem barra tradicional do navegador.
5. `background_color`: cor de fundo usada durante carregamento inicial do app.
6. `theme_color`: cor principal de interface (barra superior e elementos do sistema).
7. `icons`: lista de icones que o sistema usa ao instalar o app.
8. `icons[].src`: caminho do arquivo da imagem do icone.
9. `icons[].sizes`: tamanho do icone em pixels (`192x192`, `512x512`, etc.).
10. `icons[].type`: tipo do arquivo da imagem (exemplo: `image/png`).

### Codigo 2 - Referenciar manifest no HTML

```html
<link rel="manifest" href="/manifest.json">
```

Explicacao:

1. Esse `link` conecta o arquivo `manifest.json` ao HTML.
2. Sem essa referencia, o navegador nao reconhece a configuracao de instalacao do app.

### Introducao ao Service Worker

Service Worker e um script que roda em background, separado da pagina.

Ele permite:

1. Interceptar requisicoes de rede.
2. Guardar arquivos no cache para uso offline.
3. Melhorar performance com estrategias de cache.
4. Suportar recursos como notificacoes.

### Codigo 3 - Registrar Service Worker

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker registrado com sucesso:', registration);
    })
    .catch((error) => {
      console.error('Falha ao registrar o Service Worker:', error);
    });
}
```

Explicacao de cada parte:

1. `if ('serviceWorker' in navigator)`: verifica se o navegador suporta Service Worker.
2. `navigator.serviceWorker.register('/service-worker.js')`: pede o registro do arquivo do worker.
3. `.then((registration) => { ... })`: executa quando o registro funciona.
4. `registration`: objeto com informacoes do worker registrado.
5. `.catch((error) => { ... })`: executa se houver erro no registro.
6. `console.error(...)`: mostra no console o motivo da falha.

**Fluxo:**
```
Pagina carrega
         ↓
Verifica suporte a Service Worker
         ↓
Se suportar → tenta registrar /service-worker.js
         ↓
Se sucesso → log de confirmacao
         ↓
Se falha → log de erro
```

### Resumo do exercicio 10

1. PWA melhora experiencia com offline, instalacao e desempenho.
2. `manifest.json` define identidade visual e comportamento do app instalado.
3. `Service Worker` e a base tecnica para cache e funcionamento offline.
4. Registro do worker deve ter verificacao de suporte e tratamento de erro.


## Exercicio 11 - Lighthouse, acessibilidade e SEO

### Objetivo do exercicio

Aprender a usar o Lighthouse para analisar um site e identificar melhorias de acessibilidade, SEO e performance.

### O que foi feito

1. Organizado o passo a passo para gerar relatorio no Chrome DevTools.
2. Separados os principais pontos de acessibilidade avaliados pelo Lighthouse.
3. Separados os principais pontos basicos de SEO avaliados no relatorio.
4. Revisadas as metricas de performance mais importantes (FCP, LCP, TTI, CLS).
5. Criado um checklist de melhoria para aplicar apos cada analise.

### Componentes do exercicio 11 (o que cada um faz)

1. Aba `Lighthouse` no Chrome DevTools: gera relatorio automatico do site.
2. Categoria `Performance`: mede velocidade e estabilidade visual.
3. Categoria `Accessibility`: avalia inclusao e usabilidade para todas as pessoas.
4. Categoria `SEO`: valida requisitos tecnicos para motores de busca.
5. Categoria `Best Practices`: aponta boas praticas de seguranca e qualidade.
6. Categoria `PWA`: verifica criterios para Progressive Web App.

### Introducao ao Lighthouse

Lighthouse e uma ferramenta integrada no Chrome DevTools.

Ela permite analisar automaticamente:

1. Performance.
2. Acessibilidade.
3. SEO.
4. Boas praticas.
5. PWA (Progressive Web App).

### Como usar o Lighthouse

1. Abrir o site no Chrome.
2. Clicar com botao direito e escolher `Inspecionar`.
3. Ir ao separador `Lighthouse`.
4. Escolher as categorias que deseja analisar.
5. Clicar em `Generate report`.

### Metricas principais de performance

1. `First Contentful Paint (FCP)`: tempo ate o primeiro conteudo ficar visivel.
2. `Largest Contentful Paint (LCP)`: tempo ate o maior elemento principal aparecer.
3. `Time to Interactive (TTI)`: tempo ate a pagina responder bem a interacoes.
4. `Cumulative Layout Shift (CLS)`: quantidade de mudancas inesperadas de layout.

### Acessibilidade (o que o Lighthouse avalia)

1. Contraste de cores suficiente entre texto e fundo.
2. Uso correto de `label` em campos de formulario.
3. Uso de `alt` em imagens informativas.
4. Uso de atributos `aria-*` quando necessario.
5. Navegacao por teclado (tab, foco visivel, ordem correta).
6. Tamanhos de texto legiveis.

Boas praticas de acessibilidade tornam o site mais inclusivo.

### SEO basico (o que o Lighthouse avalia)

1. Presenca de `title` na pagina.
2. Presenca de `meta description`.
3. Uso correto de hierarquia de titulos (`h1`, `h2`, etc.).
4. Links com texto claro e compreensivel.
5. `robots.txt` acessivel.
6. `sitemap.xml` detectado.

Esses pontos ajudam motores de busca a entender e indexar melhor o site.

### Codigo 1 - Base minima de SEO e acessibilidade no HTML

```html
<!doctype html>
<html lang="pt-PT">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercicio 11 - Lighthouse</title>
    <meta name="description" content="Analise de acessibilidade, SEO e performance com Lighthouse." />
  </head>
  <body>
    <header>
      <h1>Lighthouse, Acessibilidade e SEO</h1>
    </header>
  </body>
</html>
```

Explicacao:

1. `lang="pt-PT"` ajuda leitores de tela e mecanismos de busca.
2. `title` e `meta description` ajudam no SEO.
3. `h1` define o titulo principal da pagina.
4. `meta viewport` melhora leitura em dispositivos moveis.

### Codigo 2 - Exemplo de acessibilidade em imagem e formulario

```html
<img src="./img/dashboard.png" alt="Grafico de desempenho com barras por mes" />

<label for="email">Email</label>
<input id="email" name="email" type="email" aria-describedby="email-help" />
<small id="email-help">Digite um email valido para contato.</small>
```

Explicacao:

1. `alt` descreve imagem para quem usa leitor de tela.
2. `label` vinculado ao `input` melhora usabilidade e acessibilidade.
3. `aria-describedby` conecta instrucoes ao campo.

### Codigo 3 - Exemplo simples de melhoria de performance

```html
<img src="./img/banner.jpg" alt="Banner principal" loading="lazy" width="1200" height="600" />

<script src="./script.js" defer></script>
```

Explicacao:

1. `loading="lazy"` adia carregamento de imagem fora da area inicial.
2. `width` e `height` ajudam a reduzir `CLS` (saltos de layout).
3. `defer` evita bloquear renderizacao do HTML.

### Melhorias com base no Lighthouse

Apos gerar o relatorio, e possivel:

1. Identificar problemas de cada categoria.
2. Ver sugestoes automaticas da ferramenta.
3. Ajustar codigo para melhorar pontuacao e experiencia real.

Importante:

1. Nao precisa atingir 100 em tudo.
2. O foco e garantir boa experiencia para usuarios reais.

### Fluxo recomendado do exercicio 11

```
Abrir pagina no Chrome
         ↓
Gerar relatorio no Lighthouse
         ↓
Analisar acessibilidade (contraste, labels, alt, foco)
         ↓
Analisar SEO (title, description, headings, links)
         ↓
Analisar performance (FCP, LCP, TTI, CLS)
         ↓
Aplicar melhorias no codigo
         ↓
Gerar novo relatorio e comparar evolucao
```

### Exercicio (pratica guiada)

Gerar um relatorio com o Lighthouse e identificar:

1. Problemas de acessibilidade.
2. Melhorias possiveis de SEO.
3. Otimizacoes de performance.

Checklist rapido:

1. A pagina possui `title` e `meta description`?
2. As imagens possuem `alt` adequado?
3. Formularios possuem `label` associado?
4. Existe apenas um `h1` principal?
5. O layout evita saltos (CLS)?
6. O carregamento principal esta rapido (FCP/LCP aceitaveis)?

### Conclusao

O Lighthouse e uma ferramenta poderosa e gratuita.

Testar acessibilidade e SEO desde o inicio do desenvolvimento reduz retrabalho e melhora qualidade final do site.

### Resumo do exercicio 11

1. Lighthouse ajuda a medir qualidade tecnica da pagina.
2. Acessibilidade melhora inclusao e usabilidade.
3. SEO ajuda motores de busca a entender melhor o conteudo.
4. Performance melhora velocidade e experiencia do usuario.
5. O mais importante e evolucao continua, nao apenas nota final.
