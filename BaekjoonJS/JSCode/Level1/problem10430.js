let fs = require("fs");
let input = fs.readFileSync("inputTxt/problem10430ex1.txt").toString().split(" ");
let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);

console.log((A+B)%C+"\n"+ ((A%C)+(B%C))%C+"\n"+(A*B)%C+"\n"+ ((A%C) * (B%C))%C);
