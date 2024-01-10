const employees = [
  {
    id: 1,
    firstname: "Divyanshi",
    lastname: "Varde",
    mobile_number: 9887665433,
    email: "varde12@gmail.com",
    salary: 40000,
    address: {
      line1: 67,
      line2: "Ganesh garden society, Valia",
      area: "Valia",
      pincode: 393135,
      city: "Valia",
      state: "Gujarat",
    },
  },
  {
    id: 2,
    firstname: "Meet",
    lastname: "Kher",
    mobile_number: 9832445462,
    email: "meet2@gmail.com",
    salary: 30000,
    address: {
      line1: 112,
      line2: "Ganesh garden society, Valia",
      area: "Valia",
      pincode: 393135,
      city: "Valia",
      state: "Gujarat",
    },
  },
  {
    id: 3,
    firstname: "Hetvi",
    lastname: "Varde",
    mobile_number: 9822365433,
    email: "hetvi7@gmail.com",
    salary: 45000,
    address: {
      line1: 67,
      line2: "Ganesh garden society, Valia",
      area: "Valia",
      pincode: 393135,
      city: "Valia",
      state: "Gujarat",
    },
  },
];

var employee_details = new Set(employees);
console.log(employee_details);
// function updatedValue() {
//   if (employees.id === 1) {
//     firstname = "Div";
//   }
// }
// console.log(employees);

// function deleteEmployee() {
//   delete employees.id == 2;
// }

// console.log(employees);


