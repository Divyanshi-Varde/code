const arr = [43, 56, 23, 1, 66, 106, 89, 68, 2];

a = Math.max(43, 56, 23, 1, 66, 106, 89, 68, 2);
b = Math.min(43, 56, 23, 1, 66, 106, 89, 68, 2);

for (i = 0; i <= arr.length; i++) {
  if (arr[i] == a) {
    arr[i] = b;
  } else if (arr[i] == b) {
    arr[i] = a;
  }
}
console.log(arr);
