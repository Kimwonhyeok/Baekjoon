let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let hour = parseInt(input[0].split(" ")[0]);
let minute = parseInt(input[0].split(" ")[1]);
let makeTime = parseInt(input[1]);

let hourPlus = parseInt(makeTime / 60);
let minutePlus = parseInt(makeTime % 60);
minute += minutePlus;
if (minute >= 60) {
    hour++;
    minute -= 60;
}
hour += hourPlus;
if (hour >= 24) {
    hour -= 24;
}
console.log(hour, minute);
