    const audio = document.getElementById('myAudio');
    const button = document.getElementById('playBtn');
    button.onclick = function() {
        audio.muted = false;
        audio.play();
    };