// 다양한 숫자 표현 지원
let integer = 10;
let hex = 0xa;
let binary = 0b1010; // 2진수
let octal = 0o12; // 8진수

console.log(integer, hex, binary, octal)
// 출력시 10진수로 출력

let negative = -10;
let indice = 1.0e1; // 차수
let double = 10.12; // 소수

console.log(negative, double, indices)

let IsInfinity = 10 / 0;
let IsNaN = 10 / "칠";

console.log(IsInfinity, IsNaN)

// 자주 겪는 오류
let sum = 0.1 + 0.2;
console.log(sum); 
// 2진수로 변환시 0.1은 무한한 값
// 소수점 연산시 근사치가 나올 때가 있음