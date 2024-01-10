function sortedArray(data) {
  let sortedData = data.sort((a, b) => a.age - b.age);
  console.log(sortedData);
}

sortedArray([
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
]);
