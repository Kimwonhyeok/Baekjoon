let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
for (i = 0; i < input.length; i++) {
    let calculate = input[i].split(" ").map(Number);
    console.log(calculate[0] + calculate[1]);
}


//Bronze5
