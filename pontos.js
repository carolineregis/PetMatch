window.addEventListener("gmp-load", () => {
      const mapElement = document.getElementById("meuMapa");
      const scriptURL = "https://script.google.com/macros/s/AKfycbyx8QpyggK8AyzR1y6_gVTHVzJrvyBvsGZoDi0aTpkEPvDeQTCZk24OpdyBfJWMj_L1/exec";

      fetch(scriptURL)
        .then((response) => response.json())
        .then((data) => {
          data.forEach((item) => {
            const lat = -12.146657595047884 + Math.random() * 0.02;
            const lng = -44.97558771720186 + Math.random() * 0.02;

            const marker = document.createElement("gmp-advanced-marker");
            marker.setAttribute("position", `${lat}, ${lng}`);
            marker.setAttribute("title", item["Status"]);

            const img = document.createElement("img");
            img.src = "images/image-removebg-preview (1).png";
            img.classList.add("pins");
            marker.appendChild(img);

            // Card de informações
            const popupCard = document.createElement("div");
            popupCard.className = "popup-card";
            popupCard.innerHTML = `
              <h3>Ponto de Apoio</h3>
              <p><b>Data:</b> ${item["Carimbo de data/hora"]}</p>
              <p><b>Nível de ração:</b> ${item["Nível de ração"]}</p>
              <p><b>Água disponível:</b> ${item["Água disponível"]}</p>
              <p><b>Status:</b> ${item["Status"]}</p>
              <p><b>Avaria:</b> ${item["O comedouro apresenta alguma avaria? Se sim, qual?"] || "—"}</p>
              ${item["Tire uma foto do ponto de apoio"] ? `<img src="${item["Tire uma foto do ponto de apoio"]}" width="180" style="border-radius:10px;margin-top:10px;">` : ""}
              <button class="fecharCard">Fechar</button>
            `;

            // evento pra abrir o card
            marker.addEventListener("click", () => {
              document.body.appendChild(popupCard);
              setTimeout(() => popupCard.classList.add("show"), 10);
            });

            // botão de fechar
            popupCard.querySelector(".fecharCard").addEventListener("click", () => {
              popupCard.classList.remove("show");
              setTimeout(() => popupCard.remove(), 300);
            });

            mapElement.appendChild(marker);
          });
        })
        .catch((err) => console.error("Erro ao carregar dados:", err));
    });

    const wrapper = document.querySelector(".slides-wrapper");
const next = document.querySelector(".next-btn");
const prev = document.querySelector(".prev-btn");

let scrollAmount = 0;

next.addEventListener("click", () => {
  wrapper.scrollBy({ left: 320, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  wrapper.scrollBy({ left: -320, behavior: "smooth" });
});
