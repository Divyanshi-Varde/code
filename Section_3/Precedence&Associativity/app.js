var a = 3 + 4 * 5; // precedence comes into picture
console.log(a);

var b = 2;
var c = 3;
var d = 4;

b = c = d; // associativity is used here
// = operator has right-to-left associativity

console.log(b);
console.log(c);
console.log(d);
