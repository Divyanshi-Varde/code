// initialization...

var person = [
  {
    firstname: "Hetvi",
    lastname: "Varde",
    greet: function () {
      return "Hi" + this.firstname + "!";
    },
  },
  {
    firstname: "Meet",
    lastname: "Kher",
    address: "67,Ganesh garden",
  },
];

console.log(person);

//typeof , instanceof uses

var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d);
console.log(Object.prototype.toString.call(d));

function Person(name) {
  this.name = name;
}

var e = new Person("Jane");
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined);
console.log(typeof null); // object...its a bug of javascript since forever
