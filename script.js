<script>

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
</script>