const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const backetLength = input[0].split(" ").map(Number);
const arr = Array.from({length:backetLength[0]},()=>0);

for(i=1;i<=backetLength[1];i++){
    const ballInTheBasket = input[i].split(" ").map(Number);
    for(j = ballInTheBasket[0]; j<=ballInTheBasket[1];j++){
        arr[j-1] = ballInTheBasket[2];
    }
}
console.log(...arr);
