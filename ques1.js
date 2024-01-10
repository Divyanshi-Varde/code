function fibonacciSequence(input) {
  sequence = [0, 1];
  for (let i = 2; i < input; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}
var result = fibonacciSequence(5);
console.log(result);