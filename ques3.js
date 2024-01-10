count = 0;
function privateCounter(count) {
  function increment() {    // inner function is accessing the outer function's variable
    count++;
    console.log(count);
  }
  function decrement() {
    count--;
    console.log(count);
  }
  increment();
  decrement();
}

 privateCounter(6);
// let result1 = increment();
// console.log(result1);
// decrement();
