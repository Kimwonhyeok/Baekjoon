const fs = require("fs");
const input = fs.readFileSync("inputTxt/problem1000ex1.txt").toString().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
console.log(a+b);


/*
**  백준 사이트 제출시 2번라인을 
**  const input = fs.readFileSync("/dev/stdin").toString().split(" "); ->1줄입력
*/
