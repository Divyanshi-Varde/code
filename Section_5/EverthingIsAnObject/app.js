var a = {};
var b = function () {};
var c = [];

console.log(a.__proto__); // object
console.log(b.__proto__); // function
console.log(c.__proto__); // array
console.log(b.__proto__.__proto__); // object
