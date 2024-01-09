// ARRAY HEPLER METHODS........................

// forEach()............................................
// var colors = ["green", "blue", "yellow", "purple"];

// for (i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// console.log("--------------------");

// colors.forEach(function (color) {
//   console.log(color);
// });

// var numbers = [1, 2, 3, 4, 5];
// var sum = 0;
// numbers.forEach(function (number) {
//   sum += number;
//   console.log(number);
// });
// console.log("The sum of elements in the array is:" + sum);

// map()...............................................

// var numbers = [1, 2, 3, 4, 5];
// var doubleNumbers = [];

// for (i = 0; i < numbers.length; i++) {
//   doubleNumbers.push(numbers[i] * 2);
// }

// console.log(doubleNumbers);

// var doubled = numbers.map(function (number) {
//   return number * 2;
// });

// console.log(doubled);

// var cars=[
//     {model:"Buick", price:"cheap"},
//     {model:"Camaro",price:"expensive"}
// ]

// var prices=cars.map(function(car){
//     return car.price
// })
// console.log(prices)

// filter().......................................
// var products = [
//   { name: "celery", type: "vegetable", quantity: 30, price: 50 },
//   { name: "olive", type: "vegetable", quantity: 24, price: 200 },
//   { name: "banana", type: "fruit", quantity: 12, price: 350 },
//   { name: "cucumber", type: "vegetable", quantity: 10, price: 100 },
// ];

// var filteredProducts = [];
// for (i = 0; i < products.length; i++) {
//   if (products[i].type === "vegetable") {
//     filteredProducts.push(products[i]);
//   }
// }

// var filteredProducts = products.filter(function (product) {
//   return product.type === "vegetable";
// });
// console.log(filteredProducts);

// var filteredProducts = products.filter(function (product) {
//   return (
//     product.type === "vegetable" && product.price < 100 && product.quantity > 20
//   );
// });
// console.log(filteredProducts);

// var posts = { id: 4, title: "New post" };
// var comments = [
//   { postId: 4, content: "Nice!" },
//   { postId: 3, content: "Amazing" },
//   { postId: 4, content: "Woohooo" },
//   { postId: 2, content: "Prettyy!" },
// ];

// function commentsForPosts(posts, comments) {
//   return comments.filter(function (comment) {
//     return comment.postId === posts.id;
//   });
// }

// console.log(commentsForPosts(posts, comments));

// find().........................................
// var users = [
//   { name: "John", age: 35 },
//   { name: "Jane", age: 29 },
//   { name: "Sheera", age: 20 },
//   { name: "Sushi", age: 26 },
// ];

// for (i = 0; i < users.length; i++) {
//   if (users[i].name == "John") {
//     user = users[i];
//   }
// }
// console.log(user);

// var result = users.find(function (user) {
//   return user.name == "John";
// });
// console.log(result);

// function Car(model) {
//   this.model = model;
// }

// var cars = [new Car("Tesla"), new Car("BMW"), new Car("Volvo")];
// cars.find(function (car) {
//   return car.model === "Volvo";
// });

// var posts = [
//   { id: 1, title: "sunny side up" },
//   { id: 2, title: "sunkissed!" },
// ];

// var comments = { postId: 1, content: "Amazing Post!" };

// function postforComment(posts, comments) {
//   return posts.find(function (post) {
//     return post.id === comments.postId;
//   });
// }

// console.log(postforComment(posts, comments));

// every() and some()...................................
// var computers = [
//   { name: "Windows", ram: 8 },
//   { name: "Mac", ram: 64 },
//   { name: "Acer", ram: 128 },
// ];

// var allComputersCanRunProgram = true;
// var onlySomeComputersCanRunProgram = false;

// for (i = 0; i < computers.length; i++) {
//   var computer = computers[i];

//   if (computer.ram < 16) {
//     allComputersCanRunProgram = false;
//   } else {
//     onlySomeComputersCanRunProgram = true;
//   }
// }

// console.log(allComputersCanRunProgram);
// console.log(onlySomeComputersCanRunProgram);

// var value = computers.every(function (computer) {
//   return computer.ram > 16;
// });

// console.log(value);

// var result1 = computers.some(function (computer) {
//   return computer.ram > 16;
// });

// console.log(result1);

// var names = ["Div", "Hetvi", "Meet"];

// var a = names.every(function (name) {
//   return name.length > 4;
// });

// var b = names.some(function (name) {
//   return name.length > 4;
// });
// console.log(a);
// console.log(b);

// function field(value) {
//   this.value = value;
// }
// field.prototype.validate = function () {
//   return this.value.length > 0;
// };

// var username = new field("2cool");
// var password = new field("password");
// var birthdate = new field("10/10/12");

// // console.log(username.validate());

// var fields = [username, password, birthdate];

// var result = fields.every(function (field) {
//   return field.validate();
// });
// console.log(result);

// reduce().....................................................
var numbers = [1, 2, 3];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
// console.log(sum);

var a = numbers.reduce(function (number, sum) {
  return sum + number;
}, 0);
console.log(a);

var primaryColors = [{ color: "red" }, { color: "blue" }, { color: "green" }];
// [red,blue,green]

var arr = primaryColors.reduce(function (previous, primaryColor) {
  previous.push(primaryColor.color); //mutating the array
  return previous;
}, []);
console.log(arr);

//balanced paranthesis question
function balancedParens(string) {
  return !string.split("").reduce(function (previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    }
    if (char === ")") {
      return --previous;
    }
    return previous;
  }, 0);
}
var result = balancedParens(")(");
console.log(result);
