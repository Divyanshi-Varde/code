// function makeCounter() {
//     let count = 0;
//     return () => count++;
//     }
//     let counter1 = makeCounter();
//     console.log(counter1());
//     console.log(counter1());
//     console.log(counter1());
//     console.log(counter1());

function privateCounter(count) {
  function increment() {
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
