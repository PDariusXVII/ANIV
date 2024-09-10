document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');

    // Recuperar o tempo de reprodução salvo
    const savedTime = localStorage.getItem('audio-current-time');
    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }

    // Salvar o tempo de reprodução atual no LocalStorage
    audio.addEventListener('timeupdate', function() {
        localStorage.setItem('audio-current-time', audio.currentTime);
    });

    // Limpar o tempo salvo quando o áudio termina (opcional)
    audio.addEventListener('ended', function() {
        localStorage.removeItem('audio-current-time');
    });

    // Manter o tempo salvo ao reabrir a página (nova aba ou página reiniciada)
    window.addEventListener('beforeunload', function() {
        localStorage.setItem('audio-current-time', audio.currentTime);
    });
});
