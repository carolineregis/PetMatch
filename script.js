/*<script>

function () {
    const elements = doc.querySelectorAll
}
  function fadeInSequence() {
     elements = document.querySelectorAll('.fade-in');
    let delay = 0;

    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, delay);

      delay += 300; // intervalo de 300ms entre cada elemento
    });
  }

  // Ativar ao carregar a página
  window.addEventListener('load', fadeInSequence);
</script> */


const carousel = document.querySelector('.carousel');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

/* Duplicar itens para loop infinito */
carousel.innerHTML += carousel.innerHTML;

/* Função para checar e resetar scroll */
function checkScroll() {
  const scrollWidth = carousel.scrollWidth / 2; /* metade original */
  if (carousel.scrollLeft >= scrollWidth) {
    carousel.scrollLeft -= scrollWidth;
  } else if (carousel.scrollLeft <= 0) {
    carousel.scrollLeft += scrollWidth;
  }
}

/* Avançar */
nextBtn.addEventListener('click', () => {
  const scrollAmount = carousel.offsetWidth; /* rola a largura visível */
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  setTimeout(checkScroll, 500);
});

/* Voltar */
prevBtn.addEventListener('click', () => {
  const scrollAmount = carousel.offsetWidth;
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  setTimeout(checkScroll, 500);
});

/* Scroll automático */
setInterval(() => {
  const scrollAmount = carousel.offsetWidth / 2; /* metade da largura visível*/
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  setTimeout(checkScroll, 500);
}, 3000);

/* Resetar scroll ao redimensionar*/
window.addEventListener('resize', () => {
  carousel.scrollLeft = 0;
});