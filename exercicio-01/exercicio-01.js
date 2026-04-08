
let object = {
  nome: "Jose Cleber",
  idade: 32,
  email: "cleberf64@gmail.com"
};
let parser = JSON.stringify(object);
console.log(parser);
let object2 = JSON.parse(parser);
console.log(object2);

fetch('./exercicio-01/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById('nome').textContent = data[0].nome;
    document.getElementById('idade').textContent = data[0].idade;
    document.getElementById('email').textContent = data[0].email;
  });