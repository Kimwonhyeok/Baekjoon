let fs = require("fs");
let input = fs.readFileSync("inputTxt/problem11382ex1.txt").toString().split(" ").map(Number);
console.log(input[0]+input[1]+input[2]);