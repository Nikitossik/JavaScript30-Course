const hoursHand = document.querySelector('.clock__hand.clock__hand--hours');
const minutesHand = document.querySelector('.clock__hand.clock__hand--minutes');
const secondsHand = document.querySelector('.clock__hand.clock__hand--seconds');

function moveClock(){
    let time = new Date(),
        hours = time.getHours() % 12,
        minutes = time.getMinutes(),
        seconds = time.getSeconds();

    let hoursRad = (Math.PI*2 / 12) * hours,
        minutesRad = hoursRad + (Math.PI*2 / 3600) * minutes,
        secondsRad = (Math.PI*2 / 60) * seconds;

    hoursHand.style.transform = `rotate(${hoursRad}rad)`;
    minutesHand.style.transform = `rotate(${minutesRad}rad)`;
    secondsHand.style.transform = `rotate(${secondsRad}rad)`;

    setTimeout(moveClock, 1000);
}

moveClock();