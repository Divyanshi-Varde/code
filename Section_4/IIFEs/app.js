//function statement
function greet(name) {
  console.log("Aloha " + name);
}
greet("div");

// using a function expression
var greetFunc = function greet(name) {
  console.log("Aloha " + name);
};
greetFunc("div");

//print star in pyramind format

// immediately invoked function expression
var greeting = (function greet(name) {
  console.log("Aloha " + name);
})("John");

var fname = "Parth";

(function (name) {
  var greeting = "Inside IIFE:Hello ";
  console.log(greeting + "" + name);
})(fname); // IIFE

//safe code for accessing the global object

(function (global, name) {
  var greeting = "Inside IIFE:Hello ";
  global.greeting = "Hello";
  console.log(greeting + "" + name);
})(window, fname);

console.log(greeting);
