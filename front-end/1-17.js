// es6 템플릿 문자열

let str1 = '"시작이 반이다."';
console.log(str1);

let str2 = "I'm fine thank you";
console.log(str2);

let str3 = ' "여러분, ' + "'시작이 반이다.'라는 말" + '들어보셨죠?"'; 
console.log(str3);

let str4 = "\"여러분, '시작이 반이다.'라는 말 들어보셨죠?\"";
console.log(str4);

// 백틱(`) 사용
let str5 = `"여러분, '시작이 반이다.'라는 말 들어보셨죠?"`;
console.log(str5);

let name1 = '철수';
let name2 = '영희';

let string = `${name1}는 ${name2}를 좋아합니다.`;
console.log(string)