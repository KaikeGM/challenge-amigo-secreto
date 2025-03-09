//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = [];

// Adiciona um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    amigos.push(nome);

    // Atualiza a lista na interface
    atualizarLista();

    // Limpa o campo de entrada
    inputAmigo.value = "";
    inputAmigo.focus();
}

// Atualiza a lista visível na página
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista

    amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(item);
    });
}

// Realiza o sorteio de um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 Amigo sorteado: ${amigoSorteado}! 🎉`;
}
