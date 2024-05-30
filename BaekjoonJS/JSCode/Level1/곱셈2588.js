let fs = require("fs");
let input = fs.readFileSync("inputTxt/problem2588ex1.txt").toString().trim().split("\n").map(Number); 
let units = input[1]%10;  
let tens = ((input[1]%100)-units)/10;
let hundreds = (input[1]-(tens*10+units))/100;
console.log(
    input[0]*units+"\n"+
    input[0]*tens+"\n"+
    input[0]*hundreds+"\n"+
    input[0]*input[1]
);

/*
**  units = 385%10 = 5 일의자리  
**  tens = ((385%100)-5)/10 = 80/10 = 8 십의 자리
**  hundreds = (385-(8*10+5))/100 = (385-85)/100 = 3 백의자리 
*/