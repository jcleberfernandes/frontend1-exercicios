const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");
const mensagem = document.getElementById("mensagem");

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

button.addEventListener("click", () => {
  falar("Olá! Isto é uma demonstração.");
});


function falar(texto) {
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = "pt-PT";
  speechSynthesis.speak(utterance);
}


function mostrarNotificacao(titulo, corpo) {
  if (Notification.permission === "granted") {
    new Notification(titulo, {
      body: corpo,
      icon: "https://cdn-icons-png.flaticon.com/512/1827/1827504.png",
    });
  }
}