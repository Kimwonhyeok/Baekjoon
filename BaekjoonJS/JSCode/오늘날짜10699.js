let today = new Date().toISOString().split("T");
console.log(today[0]);

//let today = new Date().toISOString() 결과값은 ->2024-05-25T04:25:07.749Z
//결과값은 문자열이므로 split()로 잘라서 배열로 담기
//문자열 T기준으로 가르면 2024-05-25와 T가 잘려 04:25:07~~~로 나뉨
//today[0]출력시 T기준으로 잘린 앞 문자열 출력 (2024-05-25)
