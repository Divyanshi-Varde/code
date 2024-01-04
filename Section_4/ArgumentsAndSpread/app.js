function greet(fname, lname, lang, ...extra) {
  lang = lang || "en";

  if (arguments.length === 0) {
    console.log("Missing parameters!!");
  }

  console.log(fname); // undefined if the function is invoked without any parameters
  console.log(lname);
  console.log(lang);
  console.log(arguments); //contains a list of all the parameters that have been passed all along
  console.log("*************");
}
greet();
greet("Mia");
greet("Mia", "singh", "en");
greet("Mia", "singh", "es", 12, "street 2,washington");

// the arguments is a keyword like "this" and it acts like an array although its not
