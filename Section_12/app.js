// function run(otherFn) {
//   console.log("Function is Running!");
//   otherFn();
// }

// run(() => {
//   console.log("Function 1!");
// });

// run(() => {
//   console.log("Function 2!");
// });

// Promises.......
// const pending = 0;
// const fulfilled = 1;
// const rejected = 2;
// a promise doesn't perform the tasks required it just waits for the other tasks to complete
// and when they get completed, promise will run the executor function!
// function customPromise(executor) {
//   let state = pending; // waiting for the work to complete
//   let value = null; // the value we are waiting for
//   let handlers = []; // more than one callback to run when the work is complete so array of handles
//   let catches = []; // more than one functions in case of the any error

//   function resolve(result) {
//     // this function will be called by the executor when the work is done and we have result
//     if (state !== pending) return;

//     state = fulfilled;
//     value = result;

//     handlers.forEach((h) => h(value));
//   }

//   function reject(err) {
//     if (state !== pending) return;

//     state = rejected;
//     value = err;

//     catches.forEach((c) => c(err));
//   }

//   this.then = function (callback) {
//     // takes the callback function and odes 2 things
//     if (state === fulfilled) {
//       callback(value);
//     } else {
//       handlers.push(callback); // add the callback to the array of callbacks that will be executed when its done
//     }
//   };

//   executor(resolve, reject);
// }

// creating a executor function
const doWork = (resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World!");
  }, 2000);
};

const AnotherWork = (resolve, reject) => {
  setTimeout(() => {
    resolve("How are you?");
  }, 5000);
};

async function doAllTheWork() {
  const someText = new Promise(doWork);
  const text1 = await someText;
  console.log(text1);

  const othertext = new Promise(AnotherWork);
  const text2 = await othertext;
  console.log(text2);
}
doAllTheWork();
console.log("Done!");

// let someText = new Promise(doWork);
// someText
//   .then((val) => {
//     console.log("1st log " + val);
//     return new Promise(AnotherWork);
//   })
//   .then((val) => {
//     // .then() always returns a promise
//     console.log(val);
//   });

// setTimeout(() => {
//   someText.then((val) => {
//     console.log("3rd log " + val);
//   });
// }, 3000);

//fetch returns a promise
// fetch("video.json") //fetch does the task of going out to the internet and fetches whatever is specified..
//   .then((response) => response.json())
//   .then((data) => console.log(data));
