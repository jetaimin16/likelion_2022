// 객체(object)

// 배열로 구현시? -> 주석이 없다면 의미 파악 불가
let student1 = [90, 70, 80, 60];

console.log(student1[0]);
console.log(student1[1]);
console.log(student1[2]);
console.log(student1[3]);

// 객체로 구현시?
let student2 = {
    koreanScore:90,
    englishScore:70, 
    "mathScore":80,  // 문자열로 적어도 ok -> 공백 사용 가능
    "scienceScore":60
}; // 세미콜론 생략하는 경우가 많음

console.log(student2["koreanScore"]);
console.log(student2.englishScore); // 점 연산자 사용시 문자열로 표현 X