let fs =require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = parseInt(input);
let str = "";
for(let i = 1; i<=input;i++){
    str +=i+" ";
    if(i==input) break;
    if(i%6==0) str +="Go! ";
}
console.log(str+"Go!");
