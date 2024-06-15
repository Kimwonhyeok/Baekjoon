//case1
let fs = require("fs");
let input =fs.readFileSync("/dev/stdin").toString();
input = Number(input);
let star = 1;
let str = "";
for(let i=input;i>0;i--){
    if(i!==0){
        str+=" ".repeat(i-1);
    }
    str+="*".repeat(star++);
    str+="\n";
}
console.log(str);

//case2
let fs = require("fs");
let input =fs.readFileSync("/dev/stdin").toString();
input = Number(input);
let str = "";
for(let i=1;i<=input;i++){
    for(let j=input;j>0;j--){
        str+=j>i?" ":"*";
    }
    str+="\n";
}
console.log(str);

//Bronze4
