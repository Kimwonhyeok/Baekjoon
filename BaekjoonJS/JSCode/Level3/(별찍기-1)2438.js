let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = parseInt(input);
for (let i = 0; i < input; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
        str+="*";
    }
    console.log(str);
}
