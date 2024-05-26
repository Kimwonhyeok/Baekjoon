let fs = require("fs");
let input = fs.readFileSync("inputTxt/problem10926ex2.txt").toString().trim();
const addStr = "??!";
console.log(input.concat(addStr));

//case2
//console.log(input+"??!");

//trim() method 사용이유는 문자열 좌우 공백 제거를 위해서이다.
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/trim
//referance
