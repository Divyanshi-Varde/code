function mapForEach(arr, fn) {
  var arr3 = [];
  for (var i = 0; i < arr.length; i++) {
    arr3.push(fn(arr[i]));
  }
  return arr3;
}

var arr1 = [1, 2, 3];
console.log(arr1);

// var arr2 = [];
// for (var i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i] * 2);
// }

var arr2 = mapForEach(arr1, function (item) {
  return item * 2; // each time a new task is assigned to the function whenever its invoked
});

console.log(arr2);

var arr4 = mapForEach(arr2, function (item) {
  return item > 3;
});

console.log(arr4);

var checkPastLimit = function (limiter, item) {
  return item > limiter;
};

var arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr5);

//simplified version of the above function
var checkPastLimitSimplified = function (limiter) {
  return function (limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

//invoking the above craeted function
var arr6 = mapForEach(arr2, checkPastLimitSimplified(2));
console.log(arr6);

var arr7 = _.map(arr1, function (item) {
  return item * 3;
});
console.log(arr7);
