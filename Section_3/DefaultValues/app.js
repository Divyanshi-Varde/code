function greet(name) {
  name = name || "Anonymous"; // if i want a default value in case of a missing parameter
  console.log("Hello " + name);
}

//greet("Divyanshi");
greet();

// "or" operator/function always tries to return true as ouptut:
// For example:
console.log(false || "hello"); // returns hello
console.log(0 || 1); // returns 1 because corecion returns true
