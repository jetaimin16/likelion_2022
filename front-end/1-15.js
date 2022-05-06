// 화살표 함수

// 함수 선언식 방법
function sum(num1, num2) {
    return num1 + num2;
}

// 화살표 함수
const sum = (num1, num2) => {
    return num1 + num2;
}

// 중괄호와 return 생략
const sum = (num1, num2) => num1 + num2;

const result = sum(10, 20);
console.log(result);

// 매개변수 하나일 때 소괄호 생략
const pow = x => x*x;

const result2 = pow(10);
console.log(result2);

// 매개변수 없을 경우 소괄호만 작성
const printPie = () => 3.14;

const result3 = printPie();
console.log(result3);

// 객체 반환할 경우
const getObject = () => ({
    name: "철수",
    age: 20
});

const obj = getObject();
console.log(obj.name);

// 내부함수 형태
const outer = x => () => x * x;