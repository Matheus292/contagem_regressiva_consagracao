const secondsContainer = document.querySelector('#seconds');
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');

const consecrationDate = new Date(2024, 4, 31);

const updateCountdown = () => {
    const currentTime = new Date();

    const difference = consecrationDate - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24;
    const minutes = Math.floor(difference / 1000 / 60  ) % 60;
    const seconds = Math.floor(difference / 1000 ) % 60;

    secondsContainer.textContent = (seconds) < 10 ? '0' + seconds : seconds;
    minutesContainer.textContent = (minutes) < 10 ? '0' + minutes : minutes;
    daysContainer.textContent = (days) < 10 ? '0' + days : days;
    hoursContainer.textContent = (hours) < 10 ? '0' + hours : hours;
}

setInterval(updateCountdown, 1000);