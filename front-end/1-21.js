// while/do=while 반복문
let i = 1;
while(i < 10) {
    console.log(i);
    i = i + 1;
}

let flag = false;
do{
    console.log('do-while'); // do 부분은 무조건 실행
}while(flag === true);