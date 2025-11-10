// URL original do App Script
const url = "https://script.google.com/macros/s/AKfycbyx8QpyggK8AyzR1y6_gVTHVzJrvyBvsGZoDi0aTpkEPvDeQTCZk24OpdyBfJWMj_L1/exec";

const urlOriginal = "https://script.google.com/macros/s/AKfycbyx8QpyggK8AyzR1y6_gVTHVzJrvyBvsGZoDi0aTpkEPvDeQTCZk24OpdyBfJWMj_L1/exec";


async function carregarPontos() {
  try {
    const resposta = await fetch(url);
    if (!resposta.ok) throw new Error("Erro ao buscar dados da planilha.");

    const dados = await resposta.json();
    const lista = document.getElementById("listaPontos");

    lista.innerHTML = ""; // limpa o conteúdo anterior

    dados.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>Ponto de Apoio</h3>
        <p><b>Data:</b> ${item["Carimbo de data/hora"]}</p>
        <p><b>Nível de ração:</b> ${item["Nível de ração"]}</p>
        <p><b>Água disponível:</b> ${item["Água disponível"]}</p>
        <p><b>Status:</b> ${item["Status"]}</p>
        <p><b>Avaria:</b> ${
          item["O comedouro apresenta alguma avaria? Se sim, qual?"] || "—"
        }</p>
      `;

      lista.appendChild(card);
    });
  } catch (erro) {
    console.error("Erro ao carregar pontos:", erro);
    document.getElementById("listaPontos").innerHTML =
      "<p>Não foi possível carregar os pontos de apoio.</p>";
  }
}

// Executa quando a página terminar de carregar
document.addEventListener("DOMContentLoaded", carregarPontos);
