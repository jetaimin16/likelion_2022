var num = 3;
console.log(num);

var num = 20;
console.log(num); // 재선언 가능

// var: 변수 선언, 재선언 가능

let str = "a";
console.log(str);

str = "b";
console.log(str) // 데이터 변경 가능

// let str = "b";
// console.log(str); - 재선언 불가

// let: 변수 선언, 재선언 불가

const constant = 10;
console.log(constant);

// const constant = 20;
// console.log(constant); 
// 재선언 불가 & 변수에 할당된 데이터 변경 X

// const: 상수 선언, 재선언 불가

// < 변수 규칙 >
// 1. 변수명 - Camel case 사용
let userName = "sucoding"; // O
let user_name = "sucoding"; // X

// 2. 변수명은 _. $, 문자로만 시작

// let 12day = "월요일"  //X
// let @day12 = "월요일"; // X

let day12 = "월요일";
let _day12 = "월요일"; 
let $day12 = "월요일";

// 3. 상수나 축약어 - 대문자와 snake case
const HTML = "Hyper Text Markup Language";
const MAX_LEVEL = "99";

// 4. 예약어 사용 불가
// const var = 10; // 변수 선언 키워드인 var 사용 불가