/*sort method를 사용한 코드*/
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const maxIndex = parseInt(input[0]);
const numberList = input[1].split(" ").map(Number);
if (maxIndex === 1) {
    console.log(numberList[0] + " " + numberList[0]);
} else {
    numberList.sort((a, b) => a - b);
    console.log(`${numberList[0]} ${numberList[maxIndex-1]}`);
}


/*Math.min과 Math.max 사용*/
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const maxIndex = parseInt(input[0]);
const numberList = input[1].split(" ").map(Number);
console.log(Math.min(...numberList),Math.max(...numberList));
