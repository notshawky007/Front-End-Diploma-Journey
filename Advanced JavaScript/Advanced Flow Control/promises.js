//practice with promises
// console.log("Start");
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("We are in the timeout");
//     resolve();
//   }, 500);
// });
// promise.then(() => {
//   console.log("We are in the then");
// });
// console.log("End");

// //practice with promises methods any , all , allSettled and race methods
// // Example using Promise.any()
// const promise1 = Promise.reject("Error 1");
// const promise2 = Promise.resolve("Success 2");
// const promise3 = Promise.resolve("Success 3");

// Promise.any([promise1, promise2, promise3])
//   .then((value) => console.log("Promise.any:", value))
//   .catch((error) => console.log("Promise.any Error:", error));

// // Example using Promise.all()
// Promise.all([promise2, promise3])
//   .then((values) => console.log("Promise.all:", values))
//   .catch((error) => console.log("Promise.all Error:", error));

// // Example using Promise.allSettled()
// Promise.allSettled([promise1, promise2, promise3]).then((results) =>
//   console.log("Promise.allSettled:", results)
// );

// // Example using Promise.race()
// Promise.race([promise1, promise2, promise3])
//   .then((value) => console.log("Promise.race:", value))
//   .catch((error) => console.log("Promise.race Error:", error));

//promises example

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// delay(2000).then(() => console.log("2 seconds"));
// delay(3000).then(() => console.log("3 seconds"));
// delay(4000).then(() => console.log("4 seconds"));
// delay(5000).then(() => console.log("5 seconds"));
// delay(6000).then(() => console.log("6 seconds"));
// delay(7000).then(() => console.log("7 seconds"));
// delay(8000).then(() => console.log("8 seconds"));

//refactor the above code using async and await
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const asyncFunction = async () => {
  await delay(2000);
  console.log("2 seconds");
  await delay(3000);
  console.log("3 seconds");
  await delay(4000);
  console.log("4 seconds");
  await delay(5000);
  console.log("5 seconds");
  await delay(6000);
  console.log("6 seconds");
  await delay(7000);
  console.log("7 seconds");
  await delay(8000);
  console.log("8 seconds");
};

asyncFunction();
