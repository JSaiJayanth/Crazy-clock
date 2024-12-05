function updateClock() {
    const now = new Date();

    // Digital clock
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('digitalClock').textContent = `${hours}:${minutes}:${seconds}`;

    // Analog clock
    const hourDeg = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5;
    const minuteDeg = now.getMinutes() * 6;
    const secondDeg = now.getSeconds() * 6;

    document.getElementById('hourHand').style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('secondHand').style.transform = `rotate(${secondDeg}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock();
