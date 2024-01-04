console.log(this); // points to the window object of the browser i.e. the global object

function a() {
  console.log(this); // here it does th same
  this.variable = "hola!";
}

var b = function () {
  console.log(this);
};

a(); // whenever function is invoked this keyword will point to the gloabl object
console.log(variable);
b();

var c = {
  name: "Het",
  log: function () {
    var self = this;
    self.name = "Updated name!";
    console.log(self); // here it points to this newly created object only(the one that contains it)

    var setname = function (newname) {
      self.name = newname;
    };
    setname("Updated again!!");
    console.log(self);
  },
};

c.log(); // to invoke the function created in the c object

var d = {
  name: "Divyanshi",
  log: function () {
    this.name = "Divyanshi Varde!";
    console.log(this);

    var getname = function (newname) {
      this.name = newname;
    };

    getname("Divyanshiiiiiii!!!!!");
    console.log(self);
  },
};

d.log();
