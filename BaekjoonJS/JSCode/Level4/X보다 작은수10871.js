let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let firstInputNum = input[0].trim().split(" ").map(Number);
let numbers = input[1].split(" ").map(Number);
let outStr = "";
for(index in numbers){
    if(firstInputNum[1]>numbers[index]){
       outStr+=numbers[index]+" ";
    }
}

console.log(outStr.trim());
