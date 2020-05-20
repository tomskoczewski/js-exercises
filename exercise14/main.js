const start = document.querySelector('.main');
const reset = document.querySelector('.reset');
const time = document.querySelector('.time div');

let flag = false;
let seconds = 0;
let interval;

function timer() {
    time.textContent = (++seconds / 100).toFixed(2);
}

function startStop() {
    if (!flag) {
        flag = !flag;
        start.textContent = "Pauza";
        interval = setInterval(timer, 10);
    } else {
        flag = !flag;
        start.textContent = "Start";
        clearInterval(interval);
    }
}

function resetTimer() {
    time.textContent = '---';
    start.textContent = "Start";
    seconds = 0;
    flag = false;
    clearInterval(interval);

}

start.addEventListener('click', startStop);
reset.addEventListener('click', resetTimer);