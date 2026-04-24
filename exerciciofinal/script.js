const formatadorData = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short"
});

function mostrarToast(texto) {
    Swal.fire({
        icon: "success",
        title: texto,
        timer: 1400,
        showConfirmButton: false,
        toast: true,
        position: "top-end"
    });
}

function criarAppLista(config) {
    const form = document.getElementById(config.formId);
    const input = document.getElementById(config.inputId);
    const lista = document.getElementById(config.listId);
    const estadoVazio = document.getElementById(config.emptyId);

    if (!form || !input || !lista || !estadoVazio) {
        return;
    }

    let itens = carregarItens();

    function carregarItens() {
        const textoSalvo = localStorage.getItem(config.storageKey);
        if (!textoSalvo) {
            return [];
        }

        try {
            return JSON.parse(textoSalvo);
        } catch {
            return [];
        }
    }

    function salvarItens() {
        localStorage.setItem(config.storageKey, JSON.stringify(itens));
    }

    function atualizarTela() {
        lista.innerHTML = "";

        if (itens.length === 0) {
            estadoVazio.style.display = "block";
            return;
        }

        estadoVazio.style.display = "none";

        for (const item of itens) {
            const li = document.createElement("li");
            li.className = "todo-item";

            const conteudo = document.createElement("div");
            conteudo.className = "todo-content";

            const texto = document.createElement("p");
            texto.className = "todo-text";
            texto.textContent = item.texto;

            const data = document.createElement("small");
            data.className = "todo-meta";
            data.textContent = "Criado em: " + formatadorData.format(new Date(item.criadoEm));

            conteudo.appendChild(texto);
            conteudo.appendChild(data);

            const acoes = document.createElement("div");
            acoes.className = "todo-actions";

            const btnEditar = document.createElement("button");
            btnEditar.type = "button";
            btnEditar.className = "edit-action";
            btnEditar.dataset.id = item.id;

            const iconeEditar = document.createElement("i");
            iconeEditar.className = "bi bi-pencil-square";
            iconeEditar.setAttribute("aria-hidden", "true");

            const textoEditar = document.createElement("span");
            textoEditar.textContent = "Editar";

            btnEditar.appendChild(iconeEditar);
            btnEditar.appendChild(textoEditar);

            const btnApagar = document.createElement("button");
            btnApagar.type = "button";
            btnApagar.className = "delete-action";
            btnApagar.dataset.id = item.id;

            const iconeApagar = document.createElement("i");
            iconeApagar.className = "bi bi-trash3";
            iconeApagar.setAttribute("aria-hidden", "true");

            const textoApagar = document.createElement("span");
            textoApagar.textContent = "Apagar";

            btnApagar.appendChild(iconeApagar);
            btnApagar.appendChild(textoApagar);

            btnEditar.addEventListener("click", function () {
                editarItem(item.id);
            });

            btnApagar.addEventListener("click", function () {
                apagarItem(item.id);
            });

            acoes.appendChild(btnEditar);
            acoes.appendChild(btnApagar);

            li.appendChild(conteudo);
            li.appendChild(acoes);

            lista.appendChild(li);
        }
    }

    function adicionarItem(texto) {
        const novoItem = {
            id: crypto.randomUUID(),
            texto: texto,
            criadoEm: new Date().toISOString()
        };

        itens.unshift(novoItem);
        salvarItens();
        atualizarTela();
        mostrarToast(config.nome + " criado");
    }

    async function editarItem(id) {
        const item = itens.find(function (it) {
            return it.id === id;
        });

        if (!item) {
            return;
        }

        const resultado = await Swal.fire({
            title: "Editar " + config.nome,
            input: "text",
            inputValue: item.texto,
            inputLabel: "Novo texto",
            showCancelButton: true,
            confirmButtonText: "Salvar",
            cancelButtonText: "Cancelar",
            inputValidator: function (valor) {
                if (!valor || !valor.trim()) {
                    return "Digite um valor válido.";
                }
            }
        });

        if (!resultado.isConfirmed) {
            return;
        }

        item.texto = resultado.value.trim();
        salvarItens();
        atualizarTela();
        mostrarToast(config.nome + " editado");
    }

    async function apagarItem(id) {
        const resultado = await Swal.fire({
            title: "Apagar " + config.nome + "?",
            text: "Esta ação não pode ser desfeita.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Apagar",
            cancelButtonText: "Cancelar"
        });

        if (!resultado.isConfirmed) {
            return;
        }

        itens = itens.filter(function (it) {
            return it.id !== id;
        });

        salvarItens();
        atualizarTela();
        mostrarToast(config.nome + " apagado");
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const texto = input.value.trim();
        if (!texto) {
            return;
        }

        adicionarItem(texto);
        input.value = "";
        input.focus();
    });

    atualizarTela();
}

criarAppLista({
    storageKey: "tododledoodei.treinos.v1",
    formId: "todo-form",
    inputId: "todo-input",
    listId: "todo-list",
    emptyId: "empty-state",
    nome: "treino"
});

criarAppLista({
    storageKey: "tododledoodei.vitaminas.v1",
    formId: "todo-form-vt",
    inputId: "todo-input-vt",
    listId: "todo-list-vt",
    emptyId: "empty-state-vt",
    nome: "dia de vitamina"
});
