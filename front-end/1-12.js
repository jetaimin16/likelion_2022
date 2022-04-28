// 인수와 매개변수(parameter)

// 매개변수 사용 X
function printBanana(){
    console.log("banana");
};
printBanana();

function printApple(){
    console.log("apple");
};
printApple();

// 매개변수 사용 O
function printFruit(name){
    console.log(name)
};
printFruit("banana");
printFruit("apple");

function printFruit2(name, price){ // 매개변수 두 개
    console.log(name+"는 "+price+"원입니다.");
};
printFruit2("banana", 2000);

function printFruitsArr(arr){ // 배열 매개변수
    console.log(arr[0]+"는 "+arr[1]+"원입니다.");
};
printFruitsArr(['banana', 2000]);

function printFruitObj(obj){ // 객체 매개변수
    console.log(obj.name+'은 '+obj.price+"원입니다.");
};
printFruitObj({name:"apple", price:3000});