var person = {
  fname: "Meet",
  lname: "Kher",
  greet: function () {
    return "HI " + this.fname + "!";
  },
};

var john = Object.create(person); // creates an empty object that points to the object provided to it
console.log(john);
console.log(john.greet());
john.fname = "John"; // over writing the default values
john.lname = "Doe";
console.log(john);
console.log(john.greet());
