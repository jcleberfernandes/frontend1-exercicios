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

### Codigo 2 - Converter objeto para JSON string

```js
let parser = JSON.stringify(object);
console.log(parser);
```

Explicacao:

1. `JSON.stringify(object)` transforma objeto em texto JSON.
2. Esse texto pode ser salvo, enviado para API ou armazenado.
3. `console.log(parser)` mostra no console como ficou o JSON em texto.

### Codigo 3 - Converter JSON string para objeto de novo

```js
let object2 = JSON.parse(parser);
console.log(object2);
```

Explicacao:

1. `JSON.parse(parser)` pega o texto JSON e volta para objeto JavaScript.
2. `object2` volta a ter propriedades acessiveis com ponto, por exemplo `object2.nome`.

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

### Codigo 3 - Aplicar tema escuro ao carregar a pagina

```js
if (theme == 'dark') {
  document.body.classList.add('dark');
}
```

Explicacao:

1. Se o tema salvo for `dark`, adiciona classe `dark` no `body`.
2. O CSS da classe `dark` muda as cores da pagina.

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