function multiply(x) {
  return function (y) {
    return x * y;
  };
}
result = multiply(3)(6);
console.log(result);
