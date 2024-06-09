let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
for(let i = 0; i<input[0];i++){
    let plusVar = input[i+1].split(" ").map(Number);
    console.log(plusVar[0]+plusVar[1]);
}
