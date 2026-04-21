const cartaoTemplate = document.createElement('template');
cartaoTemplate.innerHTML = `
    <style>
        :host {
            display: block;
            font-family: Arial, sans-serif;
        }

        .card {
            border: 1px solid #d0d7de;
            border-radius: 12px;
            padding: 16px;
            background: #fff;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        h2 {
            margin: 0 0 8px;
            font-size: 1.1rem;
        }

        p {
            margin: 0;
            color: #444;
        }
    </style>
    <article class="card">
        <h2 class="nome"></h2>
        <p class="idade"></p>
    </article>
`;

class CartaoUtilizador extends HTMLElement {
    connectedCallback() {
        if (this.shadowRoot) {
            return;
        }

        const nome = this.getAttribute('nome') || 'Sem nome';
        const idade = this.getAttribute('idade') || '0';

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(cartaoTemplate.content.cloneNode(true));

        shadow.querySelector('.nome').textContent = nome;
        shadow.querySelector('.idade').textContent = `Age: ${idade} years`;
    }
}

customElements.define('cartao-utilizador', CartaoUtilizador);