let fs = require("fs");
let input = fs.readFileSync("inputTxt/problem1001ex1.txt").toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a-b);