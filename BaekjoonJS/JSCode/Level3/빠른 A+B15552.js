let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let answer = "";
for(let i = 1;i<=parseInt(input[0]);i++){
    let arr = input[i].split(" ");
    answer+=Number(arr[0])+Number(arr[1])+"\n";
}
console.log(answer);
