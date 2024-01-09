// rest...............................................
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

var result = addNumbers(56, 90, 34, 23, 11);
console.log(result);

// spread.................................................
const defaultColors = ["red", "blue"];
const userFavColors = ["purple", "green"];
const fallColors = ["fire red", "fall orange"];

console.log(defaultColors.concat(userFavColors));

console.log(["magenta", ...defaultColors, ...userFavColors, ...fallColors]);

// Example...........................................................
function validateShoppingList(...items) {
  //rest operator
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items]; // spread operator
  }
}

const grocery = validateShoppingList("apple", "banana");
console.log(grocery);

const MathLib = {
  calculateProduct(...rest) {
    console.log("Please use the multiply method instead!");
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  },
};

console.log(MathLib);
