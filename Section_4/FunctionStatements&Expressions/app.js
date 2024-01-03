//var a;
// a = 3;
// console.log(a);
// console.log(1 + 2); // expression
// a = { greeting: "hi" };
// console.log(a);

greet();
function greet() {
  console.log("hi!");
}

var anonymousGreet = function () {
  // function is assigned to a variable
  console.log("Hi!");
};

anonymousGreet();

function log(a) {
  a();
}

log(3);

var b = "Hello";
log(b);

log(function () {
  console.log("hi");
});
