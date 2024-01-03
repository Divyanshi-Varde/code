var a = {
  firstname: "Mary",
  interests: ["swimmimg", "playing"],
  followers: 200,
};

console.log(a);

{
  /* <object>
  <firstname>Mary</firstname>
  <interests>swimming,playing</interests>
  <followers>200</followers>
</object>; */
}

console.log(JSON.stringify(a));

var jsonValue = JSON.parse('{"firstname":"Mary", "followers":200}');
console.log(jsonValue);
