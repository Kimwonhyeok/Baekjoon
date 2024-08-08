let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
const maxNumber = Math.max(...input);
console.log(`${maxNumber}\n${input.indexOf(maxNumber)+1}`);
