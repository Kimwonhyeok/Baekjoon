let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = parseInt(input);
if((input%4===0&&input%100!=0)||input%400===0){
    console.log(1);
}else{
    console.log(0);
}




/*  (input,output)example
**  2000
**  1
**  1999
**  0
*/
