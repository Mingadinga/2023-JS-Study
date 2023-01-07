// var vs let vs const

// 1. 재선언 가능 여부
// var는 한번 선언된 변수를 다시 선언할 수 있다
var name = 'Mike';
console.log(name);

var name = 'Jane';
console.log(name);

// let은 한번 선언된 변수를 다시 선언할 수 없다
let name2 = 'Mike';
console.log(name);

// let name2 = 'Jane'; // 불가능
console.log(name);

// 2. 호이스팅 여부
// var는 선언하기 전에 사용할 수 있다. 초기화가 된 상태이기 때문.
console.log(name3);
var name3 = 'Mike';

// let은 선언하기 전에 사용할 수 없다. 초기화가 안된 상태이기 때문.
console.log(name3);
var name4 = 'Mike';

// TDZ는 
// 코드를 예측 가능하게 하고 잠재적인 버그를 제거할 수 있다.
let age = 30;
function showAge() {
    console.log(age); // TDZ - age 초기화 안됨
    let age = 20;
}

// 스코프
// var : 함수 스코프
// let, const : 블록 스코프

// 함수 스코프 지역변수 var
const age2 = 30;
if(age2 > 19) {
    var txt = '성인';
}
console.log(txt); // 같은 함수 안에 있으므로 var 사용 가능

// 함수 스코프
function add(num1, num2) {
    var result = num1 + num2;
}
add(2, 3);
console.log(result); // Reference Error
