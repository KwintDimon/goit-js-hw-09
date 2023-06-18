// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

//!!!!!!!!!Репета
const makeOrger = dish => {
  const DELAY = 1000;
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        resolve('your order')
      }
      reject('no finished your order')
    },DELAY)
  });
};
makeOrger('bake').then(onMakeOrderSuccess).catch(onMakeOrderError);

function onMakeOrderSuccess(result) {
  console.log('onMakeOrderSuccess');
  console.log(result);
}

function onMakeOrderError(error) {
  console.log('onMakeOrderError');
  console.log(error);
}

