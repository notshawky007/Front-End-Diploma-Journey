//practice with promises
console.log("Start");
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("We are in the timeout");
    resolve();
  }, 500);
});
promise.then(() => {
  console.log("We are in the then");
});
console.log("End");

//practice with promises methods any , all , allSettled and race methods
// Example using Promise.any()
const promise1 = Promise.reject("Error 1");
const promise2 = Promise.resolve("Success 2");
const promise3 = Promise.resolve("Success 3");

Promise.any([promise1, promise2, promise3])
  .then((value) => console.log("Promise.any:", value))
  .catch((error) => console.log("Promise.any Error:", error));

// Example using Promise.all()
Promise.all([promise2, promise3])
  .then((values) => console.log("Promise.all:", values))
  .catch((error) => console.log("Promise.all Error:", error));

// Example using Promise.allSettled()
Promise.allSettled([promise1, promise2, promise3]).then((results) =>
  console.log("Promise.allSettled:", results)
);

// Example using Promise.race()
Promise.race([promise1, promise2, promise3])
  .then((value) => console.log("Promise.race:", value))
  .catch((error) => console.log("Promise.race Error:", error));
