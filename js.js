const music = document.getElementById('music-track');
const playBtn = document.getElementById('play-btn');

let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        music.pause();
        playBtn.textContent = 'Play';
    } else {
        music.play();
        playBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

playBtn.addEventListener('click', togglePlay);

music.onended = () => {
    isPlaying = false;
    playBtn.textContent = 'Play';
};