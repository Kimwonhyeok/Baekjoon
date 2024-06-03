let fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n").map(Number);
let result = 0;
if(input[0]<0){
    result = (input[1]<0)?3:2;
}else{
    result = (input[1]<0)?4:1;
}
console.log(result);
