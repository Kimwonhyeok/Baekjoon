//처음제출
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
let hour = input[0];
let minute = input[1];
if(minute-45<0){
    if(hour===0) hour=23
    else{
        hour--;
    }
    minute=60+(minute-45);
    console.log(hour+" "+minute);
}else{
    minute-=45;
    console.log(hour+" "+minute);
}





//코드를 더 간략하게 줄이고 삼향연사자를 사용한 두번째코드
let fs = require("fs");
let input = fs.readFileSync("JSCode/test.txt").toString().split(" ").map(Number);
let hour = input[0];
let minute = input[1]-45;
if(minute<0){
    hour--;
    (hour<0)?console.log(23, 60+minute):console.log(hour, 60+minute);
}else console.log(hour, minute);
