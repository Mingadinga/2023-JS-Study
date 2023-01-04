// 매개변수가 없는 함수
function showError() {
    alert('에러가 발생했습니다. 다시 시도해주세요.');
}
showError();

// 매개변수가 있는 함수
function sayHelloTo(name = 'friend') {
    let msg = 'Hello, ${name}';
    console.log(msg);
}
sayHelloTo('Mike'); // 'Hello Mike'
sayHelloTo(); // 'Hello friend'
// console.log(msg); // Reference Error : msg는 sayHelloTo 내부에서 선언한 변수이므로 지역 변수

// 값을 반환하는 함수
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));

function showErrorWithReturn() {
    alert('에러가 발생했습니다. 다시 시도해주세요.');
    return; // undefined 반환
}
showErrorWithReturn();

// 함수 tip
// 함수는 하나의 책임만 수행
// 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍
