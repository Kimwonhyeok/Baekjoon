let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let numberArr = input[1].split(" ").map(Number);
let keyNum = Number(input[2]);
let checkNum = 0;
for (i in numberArr) {
    if (keyNum === numberArr[i]) {
        checkNum++;
    }
}

console.log(`${checkNum}`);
