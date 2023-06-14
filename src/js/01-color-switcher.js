const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
btnStop.disabled = true;
const body = document.querySelector('body');
btnStart.addEventListener('click', onStart);


let timerId;
function onStart() {
  btnStart.disabled = true;
  btnStop.disabled = false;
  timerId = setInterval(() => {
    const bodyColor = getRandomHexColor();
    body.style.background = bodyColor;
  },1000)
}

btnStop.addEventListener('click', onStop);
function onStop(){
 btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(timerId)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
