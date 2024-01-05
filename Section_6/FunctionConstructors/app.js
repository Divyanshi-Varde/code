function Parent(fname, lname) {
  // this keyword points to the empty object created by new and gives these values in that object
  //   this.fname = "Manish";
  //   this.lname = "Varde";
  this.fname = fname;
  this.lname = lname;
}
// an empty object is created automatically whenever new is used
// new is an operator
var person = new Parent();
//console.log(person);

var person1 = new Parent();
//console.log(person1);

Parent.prototype.getFullName = function () {
  return this.fname + " " + this.lname;
};

var person2 = new Parent("Gayatri", "Varde");
console.log(person2);

var person3 = new Parent("Piya", "Singh");
console.log(person3);

Parent.prototype.getFormalFullName = function () {
  return this.fname + " , " + this.lname;
};

console.log(person2.getFormalFullName());

// Built-in Function constructor

// all the strings have access to this method
// because its in the prototype of the string
String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
};
console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function () {
  return this > 0;
};
