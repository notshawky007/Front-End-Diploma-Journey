//practice with async and sync functions

console.log("Start");

setTimeout(() => {
  console.log("We are in the timeout");
}, 500);

setTimeout(() => {
  console.log("We are in the second timeout");
}, 0);

console.log("End");
