let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let totalCheck = 0;
for(let i=0;i<parseInt(input[1]);i++){
    let primeCount = input[i+2].split(" ");
    totalCheck+=primeCount[0]*primeCount[1];
}
(totalCheck===parseInt(input[0]))?console.log("Yes"):console.log("No");
