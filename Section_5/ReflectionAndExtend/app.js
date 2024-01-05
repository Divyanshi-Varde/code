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

for (var prop in John) {
  if (John.hasOwnProperty(prop)) {
    // only th eproperties of the john object
    console.log(prop + ": " + John[prop]); // loop over every object and property in this object
  }
} // loop over every member in the object
