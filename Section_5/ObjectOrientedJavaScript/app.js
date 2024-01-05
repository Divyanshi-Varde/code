var person = {
  fname: "Parth",
  lname: "Desai",
  getFullName: function () {
    return this.fname + " " + this.lname;
  },
};

var John = {
  fname: "John",
  lname: "Doe",
};

John.__proto__ = person; // now john inherits from the person object
console.log(John.fname);
console.log(John.getFullName());

var Jane = {
  fname: "Jane",
};

Jane.__proto__ = person; // same memory location
console.log(Jane.getFullName()); // in case of the missing lname it takes the value from person object
console.log(Jane.lname);
