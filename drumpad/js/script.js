document.addEventListener('keyup', function (e) {
    const code = e.keyCode;
    const audio = document.querySelector(`audio[data-key='${code}']`);
    const soundButton = document.querySelector(`.sound-button[data-key='${code}']`);
    playAudio(audio);
    soundButton.classList.add('sound-button__playing');
});

const soundButtons = document.querySelectorAll('.sound-button');

soundButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const code = e.target.dataset.key;
        const audio = document.querySelector(`audio[data-key='${code}']`);
        playAudio(audio);
        button.classList.add('sound-button__playing');
    });
});

soundButtons.forEach(function (button) {
    button.addEventListener('transitionend', function (e) {
        const prop = e.propertyName;
        if (prop == 'transform') button.classList.remove('sound-button__playing');
    });
});

function playAudio(audio) {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}
