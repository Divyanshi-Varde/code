var fruits = ["apple", "banana", "kiwi"];

var arr = [
  1,
  true,
  {
    name: "Hetvi",
    address: "67,Valia",
  },
  function (name) {
    var greeting = "Hi ";
    console.log(greeting + name);
  },
  "Array",
];

console.log(fruits);
console.log(arr);
arr[3](arr[2].name);
