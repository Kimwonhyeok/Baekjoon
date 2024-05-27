let fs = require("fs");
let input = fs.readFileSync("inputTxt/problem10869ex1.txt").toString().trim().split(" ");
let A = parseInt(input[0]);
let B = parseInt(input[1]);
console.log(
    (A+B)+"\n"+
    (A-B)+"\n"+
    (A*B)+"\n"+
    parseInt((A/B))+"\n"+
    (A%B)
);
