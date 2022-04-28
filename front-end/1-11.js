// 함수(function)

// 함수 선언식 방법
function gugudan(){
    console.log("3 * 1 = 3");
    console.log("3 * 2 = 6");
    console.log("3 * 3 = 9");
}; // 세미콜론 없이도 실행 O

gugudan();
gugudan();
gugudan();

// 함수 표현식 방법
const gugudan2 = function ggd(){
    console.log("3 * 1 = 3");
    console.log("3 * 2 = 6");
    console.log("3 * 3 = 9");
}; // 세미콜론 필수
gugudan(); // 변수명으로 함수 호출

// 함수명이 없는 익명함수
const gugudan3 = function (){
    console.log("3 * 1 = 3");
    console.log("3 * 2 = 6");
    console.log("3 * 3 = 9");
};
