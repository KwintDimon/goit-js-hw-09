
//  const startBtn=document.querySelector('button')
//   const dateTimePicker=document.querySelector('input')
// console.log(startBtn,dateTimePicker)


// dateTimePicker.addEventListener('change', (e) => {
//   const date = new Date(e.target.value)
//   if (date.getTime() > Date.now()) {
//   alert();
//   }
//   console.log(e.target.value)
// })


// const timer = {
//   start() {
//     const startTime = Date.now();
//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const  { hours, mins, secs }=getTimeComponents(deltaTime)
//       // console.log(startTime)
//       // console.log(currentTime)
//       // console.log(currentTime - startTime);
//       console.log(`${hours}:${mins}:${secs}`)
      
//     }, 1000);
//   }
// };
// timer.start();

// startBtn.addEventListener('click', () => {
//   timer.start();
// });

// function updateClockface({ hours, mins, secs }) {
//   refs.updateClockface.textContent=`${hours}:${mins}:${secs}`
// };
// function pad(value) {
//   return String(value).padStart(2, '0');
// };
// function getTimeComponents(time) {
//   const hours =
//     pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   ;
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60 )));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   return { hours, mins, secs };
// }

//!!!Практика
let counter = 0
function showTime() {
  
 let timeId= setTimeout(() => {
   const date = new Date()
   counter +=1
    showTime()
    console.log(date.toLocaleTimeString())
    
  }, 1000)
    if (counter === 5) {
      clearTimeout(timeId)
     
  }
}

showTime()