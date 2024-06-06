let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const A = BigInt(input[1]);
const B = BigInt(input[2]);
console.log((A*B).toString());


/*
브론즈5
문제
Write a program that computes a product of two non-negative integers A and B. The integers are represented in decimal notation and have N and M digits, respectively.

입력
The first line contains the lengths N and M, separated by a space. A is given on the second and B on the third line. The numbers will not have leading zeros.

출력
Output the product of A and B without leading zeros.
*/
