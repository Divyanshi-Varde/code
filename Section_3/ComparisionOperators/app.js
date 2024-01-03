var a = 1 < 2 < 3;
console.log(a); // true

console.log(3 < 2 < 1); // true
// "<" operator has left to right associativity
// 3<2 gives false so it will become false < 1
// now convwting fasle into number gives 0 so it becomes 0<1 which is true

// Equality operator(==) tries to corece the values when compared
// null and undefined are sort of an exception in this case because null==0 should return true and instead it returns false
console.log("" == 0); // true
console.log("  " == 0); // true
console.log(false == 0); // true
console.log(null == 0); // false
console.log(undefined == 0); // false

// Strict equality(===) doesn't try to corece the values

console.log("3" === 3); // false
console.log(false === 0); // false

var n = 0;
var m = false;

if (n === m) {
  console.log("Equal!");
} else {
  console.log("Nope, not equal");
}
