let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split().map(Number);

for (let i = 0; i < 9; i++){
    console.log(input[0]+" * "+(i+1)+" = "+input[0]*(i+1));
}
