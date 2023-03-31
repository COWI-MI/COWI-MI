function countdownTimer() {
    const eventTime = new Date();
    eventTime.setUTCHours(13, 15, 0, 0);

    const now = new Date();
    const timeDiff = eventTime - now;

    if (timeDiff < 0) {
        eventTime.setDate(eventTime.getDate() + 7 - eventTime.getDay());
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(countdownTimer, 1000);
