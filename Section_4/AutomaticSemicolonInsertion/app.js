function getPerson() {
  return {
    // return always get semicolon at the end by the js engine which can cause loss of required output
    firstname: "Fukra Insaan",
  };
}

console.log(getPerson());
