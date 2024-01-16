let word = "Divyanshi";

// const a = word.split("");
if (word.length % 2 === 0) {
  res = Math.floor(word.length / 2);
  evenChar = word.slice(res-1, res + 1);
  console.log(evenChar);
} else {
  res1 = Math.floor(word.length / 2);
  oddChar = word.charAt(res1);
  console.log(oddChar);
}
