// By value
var a = 3;
var b;

b = a;
console.log(b);
a = 2;

console.log(a);
console.log(b);

//By reference
var c = { greeting: "Hi" };
var d;
d = c;
console.log(d);

c.greeting = "Hello";
console.log(c);
console.log(d);

//By reference(even as parameters)
function changeGreeting(obj) {
  obj.greeting = "Hola"; //mutating
}

changeGreeting(d);

console.log(c);
console.log(d);

// equals operator sets up new memory space
c = { greeting: "aloha" };
console.log(c);
console.log(d);
