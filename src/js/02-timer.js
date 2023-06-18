import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputRef = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const timerDayRef = document.querySelector('span[data-days]');
const timerHoursRef = document.querySelector('span[data-hours]');
const timerMinutesRef = document.querySelector('span[data-minutes]');
const timerSecondsRef = document.querySelector('span[data-seconds]');

let selectedTimeMs = null;
let timerInterval;
btnStart.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onOpen() {
    timerInterval && clearInterval(timerInterval);

     timerDayRef.textContent = '00';
  timerHoursRef.textContent = '00';
  timerMinutesRef.textContent = '00';
    timerSecondsRef.textContent = '00';
       
  },
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      alert("Please choose a date in the future")
    }
    else {
      btnStart.disabled = false; 
      selectedTimeMs = selectedDates[0].getTime();
      console.log(selectedTimeMs);
    }
  
  },
};

let selectedDay = flatpickr(inputRef, options);
btnStart.addEventListener('click', onBtnStartClick);
function onBtnStartClick(event) {
  btnStart.disabled = true;


  let deltaTime =selectedTimeMs - Date.now();
 console.log(deltaTime);
  

  
  timerInterval = setInterval(() => {

const { days, hours, minutes, seconds } = convertMs(deltaTime);

  timerDayRef.textContent = addLeadingZero(days);
  timerHoursRef.textContent = addLeadingZero(hours);
  timerMinutesRef.textContent = addLeadingZero(minutes);
    timerSecondsRef.textContent = addLeadingZero(seconds);
    deltaTime -= 1000;
  }, 1000)
  console.log(timerInterval)
}


function addLeadingZero(value){
  return String(value).padStart(2, '0');
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

flatpickr(inputRef, options);