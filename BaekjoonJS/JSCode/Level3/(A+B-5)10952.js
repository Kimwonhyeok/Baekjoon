let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let outStr = "";
let i = 0;
while(true){
    let calculate = input[i].split(" ").map(Number);
    if(calculate[0]+calculate[1]===0) break
    outStr+=(calculate[0]+calculate[1])+"\n";
    i++
}
console.log(outStr.trim());
