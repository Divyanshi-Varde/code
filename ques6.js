let ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

var sortedAr = ar.sort((a, b) => b - a);
console.log(sortedAr);

var sortedAr1 = ar[3].sort((a, b) => b - a);
console.log(sortedAr1);

var sortedAr2 = ar[3][2].sort((a, b) => b - a);
console.log(sortedAr2);

var sortedAr3 = ar[4].sort((a, b) => b - a);
console.log(sortedAr3);
