var person = new Object();

person["firstname"] = "Divyanshi"; // computed member access- its an operator to access the value
person["lastname"] = "Varde";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

// Mmeber access operator
console.log(person.firstname); // . operator is used to access the value
console.log(person.lastname);

//primitive property
person.address = new Object();
person.address.street = "67, Ganesh garden";

console.log(person["address"]);
