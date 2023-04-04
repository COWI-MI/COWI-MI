function countdownTimer() {
    const now = new Date();
    const eventTime = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    eventTime.setUTCHours(15, 15, 0, 0);

    const today = eventTime.getDay();
    const daysUntilNextFriday = (5 - today + 7) % 7;

    eventTime.setDate(eventTime.getDate() + daysUntilNextFriday);

    const timeDiff = eventTime - now;

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
