// 함수 선언 vs 함수 표현
// 함수 선언 : 어디서든 호출 가능, 호이스팅 덕분에 호출과 선언의 순서 상관 없음
// 함수 표현 : 코드에 도달하면 호출 가능
// 호이스팅 : 컴파일러가 코드를 미리 읽어 선언된 함수를 미리 컴파일함. 따라서 함수를 선언하기 전에 호출하더라도 함수를 실행할 수 있음.


// 함수 표현 - 함수를 선언하고 변수에 할당

// showError(); // 여기서는 실행 안됨
let showError = function() {
    console.log('error');
}
showError();

// 함수 선언
showError(); // 여기서 실행 가능
function showError() {
    console.log('error');
}
showError();

// arrow 함수 - 매개변수 없음
showError();
showError = () => {
    console.log('error');
}

// arrow 함수 - 매개변수 하나
const sayHelloTo = (name) => {
    const msg = `Hello, ${name}`;
    console.log(msg);
}

// arrow 함수 - 매개변수 여러개, 반환값
const add = (num1, num2) => {
    num1 + num2; // result 생략 가능
}

// arrow 함수 - 매개변수 여러개, 반환값 있음
const add2 = (num1, num2) => (
    num1 + num2
)
const add3 = (num1, num2) => num1 + num2; 