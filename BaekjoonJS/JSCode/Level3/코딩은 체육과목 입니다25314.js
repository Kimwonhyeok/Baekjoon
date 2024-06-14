const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
let str = "";
for(let i=0; i<parseInt(input/4);i++){
    str+="long "
}
console.log(str+"int");


//Bronze 5
