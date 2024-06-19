let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
for(let i = 1; i<=input[0];i++){
    let calculator = input[i].split(" ").map(Number);
    console.log("Case #"+i+": "+calculator[0]+" + "+calculator[1]+" = "+(calculator[0]+calculator[1]));
}
