let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
let A = input[0];
let B = input[1];

//case1 if else문.
if(A<B){
    console.log("<");
}else if(A>B){
    console.log(">");
}else{
    console.log("==");
}

//case2 ternary operator.
let str = A<B?"<":(A>B)?">":(A==B)?"==":" ";
console.log(str);
