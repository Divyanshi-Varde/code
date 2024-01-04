var person = {
  firstname: "John",
  lastname: "Doe",
  getFullname: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var logName = function (lang1, lang2) {
  console.log("Logged:" + this.getFullname());
  console.log("Arguments:" + lang1 + " " + lang2);
  console.log("@@@@@@@@@@@@");
};
// .bind(person);

var logPerson = logName.bind(person);
logPerson("en", "es");

logPerson.call(person, "en", "es");
logPerson.apply(person, ["en", "es"]);

(function (lang1, lang2) {
  console.log("Logged:" + this.getFullname());
  console.log("Arguments:" + lang1 + " " + lang2);
  console.log("@@@@@@@@@@@@");
}).apply(person, ["es", "en"]); // iife

// function borrowing

var person2 = {
  firstname: "Divyanshi",
  lastname: "Sharma",
};

console.log(person.getFullname.apply(person2));

//function currying

function multiply(a, b) {
  return a * b;
}

// function multiplyByTwo(b) {
//   var a = 2;
//   return a * b;
// } // thats what this is doing in the bind() method

var multiplyByTwo = multiply.bind(this, 2, 7); // a will be always 2
console.log(multiplyByTwo());
