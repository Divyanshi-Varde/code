var person = {};
var Div = {
  firstname: "Divyanshi",
  lastname: "Varde",
  address: {
    street: "Ganesh garden",
    town: "Valia",
    state: "Gujarat",
  },
};
// console.log(person);

function greet(person) {
  console.log("Hi " + person.firstname);
}

greet(Div);

greet({
  firstname: "Hetvi",
  lastname: "Varde",
});

Div.address2 = {
  street: "society",
};
