document.addEventListener("DOMContentLoaded", function () {
    var progressValue = document.getElementById("progressValue");
    var loadingScreen = document.getElementById("loadingScreen");
    var progress = 0;

    function simulateLoading() {
        if (progress < 100) {
            progress += Math.random() * 10; // Simula um carregamento irregular
            progress = Math.min(progress, 100); // Garante que não ultrapasse 100%
            progressValue.style.width = progress + "%";
            setTimeout(simulateLoading, 100);
        } else {
            setTimeout(function () {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.transition = 'opacity 0.5s ease';
                setTimeout(function () {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 500);
        }
    }

    simulateLoading();
});
