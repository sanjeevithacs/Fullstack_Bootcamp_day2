let count = 0;
let interval;

const counterElement = document.getElementById("counter");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

const startCounter = () => {
    interval = setInterval(() => {
        count++;
        counterElement.textContent = count;
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
};

const stopCounter = () => {
    clearInterval(interval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
};

const resetCounter = () => {
    clearInterval(interval);
    count = 0;
    counterElement.textContent = count;
    startBtn.disabled = false;
    stopBtn.disabled = true;
};

startBtn.addEventListener("click", startCounter);
stopBtn.addEventListener("click", stopCounter);
resetBtn.addEventListener("click", resetCounter);
