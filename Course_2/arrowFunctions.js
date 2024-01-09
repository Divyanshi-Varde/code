// const add = function (a, b) {
//   return a + b;
// };
// add(2, 3);

// const subtract = (a, b) => {
//   return a - b; // single js expression
// };
// const subtract=(a,b)=>a-b
// subtract(3, 2);

const double = (number1) => number1 * 2;
console.log(double(2));

var numbers = [1, 2, 3];
var value = numbers.map((number) => 2 * number);
console.log(value);

const team = {
  members: ["Jane", "Bill"],
  teamName: "Super Squad",
  teamSummary: function () {
    return this.members.map((member)=> {
        return `${member} is on the ${this.teamName}`;
      }
    );
  },
};

console.log(team.teamSummary());
