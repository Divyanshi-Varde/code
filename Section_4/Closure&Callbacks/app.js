// using closure
function sayHiLater() {
  var wishing = "hi!";

  setTimeout(function () {
    console.log(wishing);
  }, 4000);
}

sayHiLater();

//callback function
function TellMeWhenDone(callback) {
  var a = 1000;
  var b = 2000;

  callback(); // callback which runs the function it gets provided!
}

TellMeWhenDone(function () {
  console.log("I am done!");
});

TellMeWhenDone(function () {
  alert("I am done!");
});
