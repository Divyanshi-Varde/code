class person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  greet() {
    return "Hi" + this.fname;
  }
}

var john = new person("john", "Doe");

// sets  the prototype
class InformalPerson extends Person {}
