let input = require("fs").readFileSync("inputTxt/problem1008ex1.txt").toString().split(" ");
console.log(Out(input));
function Out(arr){
    return arr[0]/arr[1];
}

/*
let fs = require("fs");
let input = fs.readFileSync("inputTxt/problem1008ex1.txt").toString().split(" ");
let A = parseInt(input[0]);
let B = parseInt(input[1]);
console.log(A/B);
*/
