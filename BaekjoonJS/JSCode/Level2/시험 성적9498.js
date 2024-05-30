let fs = require("fs");
let input = fs.readFileSync("JSCode/test.txt").toString().split(" ").map(Number);

//if-else 사용
if(input[0]>=90){
    console.log("A");
}else if(input[0]>=80&&input[0]<90){
    console.log("B")
}else if(input[0]>=70&&input[0]<80){
    console.log("C")
}else if(input[0]>=60&&input[0]<70){
    console.log("D")
}else{
    console.log("F");
}

//switch 사용
let num = parseInt(input[0]/10);
switch(num){
    case 10:
    case 9:
        console.log("A");
        break;
    case 8:
        console.log("B");
        break;
    case 7:
        console.log("C");
        break;
    case 6:
        console.log("D");
        break;
    default:
        console.log("F");
}
