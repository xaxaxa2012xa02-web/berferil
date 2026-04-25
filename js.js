const music = document.getElementById('music-track');
const playBtn = document.getElementById('play-btn');
const engineerGif = document.getElementById('engineer-gif');
const allButtons = document.querySelectorAll('.btn-universal, .btn');

let isPlaying = false;

// Функція для "хаосу", коли грає музика
function applyChaos() {
    if (isPlaying) {
        allButtons.forEach(btn => {
            const randomRot = Math.random() * 10 - 5; // Випадковий поворот
            btn.style.transform = `rotate(${randomRot}deg) scale(${1 + Math.random() * 0.1})`;
        });
        // Змушуємо інженера "стрибати" по екрану, якщо він є
        if (engineerGif) {
            engineerGif.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        }
        requestAnimationFrame(applyChaos);
    } else {
        // Скидаємо стилі, коли музика стоп
        allButtons.forEach(btn => {
            btn.style.transform = '';
            btn.style.filter = '';
        });
        if (engineerGif) engineerGif.style.filter = '';
    }
}

function togglePlay() {
    if (isPlaying) {
        music.pause();
        playBtn.textContent = 'Play';
        isPlaying = false;
    } else {
        music.play();
        playBtn.textContent = 'Pause';
        isPlaying = true;
        applyChaos(); // Запускаємо хаос
    }
}

playBtn.addEventListener('click', togglePlay);

// Сюрприз: кнопка реєстрації тікає від курсора
const regBtn = document.getElementById('reg-btn');
regBtn.addEventListener('mouseover', () => {
    const x = Math.random() * 500 - 500;
    const y = Math.random() * 800 - 500;
    regBtn.style.transform = `translate(${x}px, ${y}px)`;
});

music.onended = () => {
    isPlaying = false;
    playBtn.textContent = 'Play';
};