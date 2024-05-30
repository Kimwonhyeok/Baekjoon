let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
let patty = input[0];
let cheeze = input[1];
if(patty<cheeze||patty==cheeze){
    console.log(patty+(patty-1));
}
if(patty>cheeze){
    console.log((cheeze+cheeze)+1);
}



//

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
let patty = input[0];
let cheeze = input[1];
let loop_num = patty+cheeze;
let max_buger = 0;
let change = 0;
for(let i=0;i<loop_num;i++){
    if(patty>=1&&cheeze>0){
        if(change===0){
            patty--;
            max_buger++;
            change++;
        }else if(change===1){
            cheeze--;
            max_buger++;
            change--;
        }
    }
    if(change===0&&cheeze===0&&patty>=1){
        max_buger++;
        break;
    }
}
console.log(max_buger);


//0일때 패티
//1일때 치즈
