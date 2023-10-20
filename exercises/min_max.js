var a = 10;
var b = 115;
var c = 300;
var smallest;

if (a <= b && a <= c) {
  smallest = a;
} else if (b <= a && b <= c) {
  smallest = c;
} else {
  smallest;
}

console.log(smallest);

var largest;

if (a >= b && a >= c) {
  largest = a;
} else if (b <= a && b <= c) {
  largest = b;
} else {
  largest = c;
}
console.log(largest);

