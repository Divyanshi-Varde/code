// to convert the given object into array
let obj = {
  id: 1,
  name: "Siddharth",
  age: 23,
  role: "Full Stack Developer",
};

//console.log([...Object.values(obj)]);

let arr = Object.entries(obj);

//let arr = JSON.stringify(obj);
console.log(arr);
