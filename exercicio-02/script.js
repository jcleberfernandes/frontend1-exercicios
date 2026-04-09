function save(){
    let name = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;

    localStorage.setItem("nome", name);
    localStorage.setItem("idade", idade);
    localStorage.setItem("email", email);
}

let theme = localStorage.getItem("theme");
let themeButton = document.getElementById("theme-button");

theme ? (themeButton.innerText = theme) : (themeButton.innerText = "light");

if(theme == "dark"){
    document.body.classList.add("dark");
}

function toggleTheme(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
themeButton.addEventListener("click", () => {
    if (theme === "light") { 
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
        theme = "light";
        themeButton.innerText = "light";
    } 
});