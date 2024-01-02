// Hoisting
var a = "Hello World!";

function b() {
  console.log("Called b!");
}

b();
console.log(a);

// Undefined
var a;
console.log(a);

if (a === undefined) {
  console.log("a is undefined!");
} else {
  console.log("a is defined!");
}

// Execution (functions)
function b() {
  console.log("Called b!");
}
b();

console.log(a);

var a = "Hello World!";
console.log(a);

// Execution
function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
  console.log(myVar);
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

// Variable environment
function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

// Scope chain
function a() {
  function b() {
    console.log(myVar);
  }

  b();
}

var myVar = 1;
a();

// Global environment
var a = "Hello World!";

function b() {}

// Asynchronous callbacks
// long running function
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log("finished function");
}

function clickHandler() {
  console.log("click event!");
}

// listen for the click event
document.addEventListener("click", clickHandler);

waitThreeSeconds();
console.log("finished execution");
