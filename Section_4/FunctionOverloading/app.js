function address(name1, apt, street, city) {
  city = city || "valia";
  if (city === "valia") {
    console.log("Hello " + name1);
  } else {
    console.log("hi mate!");
  }
}
address("Parth", 12, "highway road");
address("Divyanshi", 45, "althan-panas", "ankleshwar");

function addressValia(name1, apt, street) {
  address(name1, apt, street, "valia");
}

function addressAnkleshwar(name1, apt, street) {
  address(name1, apt, street, "ankleshwar");
}

addressValia("Parth", 12, "highway road");
addressAnkleshwar("Divyanshi", 45, "althan-panas");
