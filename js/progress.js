document.addEventListener("DOMContentLoaded", function() {
  var progressBar = document.getElementById("progressBar").firstElementChild;
  
  function updateProgressBar(percentage) {
      progressBar.style.width = percentage + '%';
  }

  // Simula o carregamento
  var percentageLoaded = 0;
  var interval = setInterval(function() {
      percentageLoaded++;
      updateProgressBar(percentageLoaded);
      if (percentageLoaded >= 100) {
          clearInterval(interval);
          // Após a página carregar completamente, esconde a tela de carregamento
          document.getElementById('loadingScreen').style.display = 'none';
      }
  }, 350); // Ajuste este valor conforme necessário para simular a velocidade de carregamento

  // Detecta quando a página completa o carregamento
  window.onload = function() {
      percentageLoaded = 100;
      updateProgressBar(percentageLoaded);
      setTimeout(function() { // Pequeno delay para garantir a visualização da barra cheia antes de desaparecer
          document.getElementById('loadingScreen').style.display = 'none';
      }, 1500); // Ajuste este delay conforme desejado
  };
});