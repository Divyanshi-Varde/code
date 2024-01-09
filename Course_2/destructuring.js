var expense = {
  type: "Business",
  amount: 4800,
};

// var type = expense.type;
// var amount = expense.amount;

// ES6............................................
const { type, amount } = expense;
console.log(type);
console.log(amount);

var savedFile = {
  extension: ".jpg",
  name: "file1",
  size: 256,
};

function fileSummary({ name, extension, size }) {
  return `${name} file has an extension ${extension} and a size of ${size} MB`;
}

console.log(fileSummary(savedFile));

const companies = ["Google", "Amazon", "Uber"];
//const {name1, name2, name3} = companies;
// console.log(name1);
// console.log(name2);
// console.log(name3);

const [name1, ...rest] = companies;
console.log(rest);

const Google = { locations: ["Park Avenue", "Mountain View", "London"] };
const {
  locations: [,,secondLocation],
} = Google;
console.log(secondLocation);

function signup(username,password,email,bday,city){

}

// var a=signup("John","1234","varde@gmail.com","12/2/2022" ,"Surat");
// console.log(a);

var points=[[10,1],[2,3],[19,28]];

var final=points.map(([x,y])=>{
    return {x,y};
})

console.log(final)