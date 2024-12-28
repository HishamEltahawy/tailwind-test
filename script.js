
console.log("This is JavaScript");
let x = 10;
let y = 4;
let go = "hello"
let message = `First number is: ${x}\nSecond number is: ${y}\n=================\nsum operation is: ${
  x + y
}\nsub operation is: ${x - y}\nmulti operation is: ${
  x * y
}\ndiv operation is: ${x / y}\nmod operation is: ${x % y}`;
console.log(message);
console.log(go.length)
document.getElementById("output").innerHTML = message;

