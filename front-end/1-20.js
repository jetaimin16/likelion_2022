// switch 조건문
let animal = 'Dog';

switch (animal) { // 일치하는 케이스부터 break를 만날때까지 코드 실행
    case 'Cat':
        console.log("야옹");
        break;
    case 'Dog':
        console.log("멍멍");
        break; // 해당 break가 없다면 음메까지 출력됨
    case 'Cow':
        console.log("음메");
        break;
    default: // 생략 가능
        console.log("일치하는 동물 소리가 없습니다.");
        break;
}