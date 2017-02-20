const daysDisplay = document.querySelector('.days__header__digit');
const hoursDisplay = document.querySelector('.hours__header__digit');
const minutesDisplay = document.querySelector('.minutes__header__digit');
const secondsDisplay = document.querySelector('.seconds__header__digit');
const startButton = document.querySelector('.countdown-form__start');

function getFormData() {
    const formData = document.forms[0].elements
    const date = formData[0].value;
    displayTimeLeft(date);
}

startButton.addEventListener('click', getFormData);

function getRemainingTime(endTime) {
    const timeRemaining = Date.parse(endTime) - Date.now();
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    const result = {
        'total': timeRemaining,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };

    return result;
}

function displayTimeLeft(endTime) {
    countdown = setInterval(() => {
        const timeLeft = getRemainingTime(endTime);
        if (timeLeft.total <= 0) {
            clearInterval(countdown);
            return;
        }
        daysDisplay.textContent = timeLeft.days;
        hoursDisplay.textContent = timeLeft.hours;
        minutesDisplay.textContent = timeLeft.minutes;
        secondsDisplay.textContent = timeLeft.seconds;
    }, 1000);
}
