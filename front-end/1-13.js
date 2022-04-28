// return

// return 없는 함수
function sum1(num1, num2){
    console.log(num1 + num2);
};
sum1(10, 20);

// return 사용
function sum2(num1, num2){
    return num1 + num2;
};
const result1 = sum2(10, 20);
const result2 = sum2(20, 30);
const result = result1 + result2;
console.log("총 합은 "+result+"입니다.");

function printReturn(){
    console.log("return 실행 전");
    return;
    console.log("return 실행 후");
};
printReturn();