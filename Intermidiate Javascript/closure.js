/**
 * Closure
 * 함수와 렉시컬 환경의 조합
 * 함수가 생성될 당시의 외부 변수를 렉시컬 환경에 기억한다
 * 따라서 함수가 생성된 이후에도 계속 접근 가능하다
 */

// 자바스크립트는 어휘적 환경을 제공한다

let one;
one = 1;

function addOne(num) {
    console.log(one + num); 
    // 내부 환경에서 num을 찾고
    // one은 전역 환경에서 찾는다
}

addOne(5);

/** 
 * 전역 Lexical 환경
 * - one : 초기화 x -> undefined(선언 시점) -> 1(초기화 시점)
 * - addOne : function
 * */

/**
 * 내부 addOne Lexical 환경
 * - num : 5
 */


// 내부 함수가 있는 경우의 어휘적 환경

function makeAdder(x) {
    return function(y) {
        return x + y;  // y는 익명함수, x는 makeAdder Lexical 환경에서 접근
    }
}

const add3 = makeAdder(3);
console.log(add3(2)); // add3 함수가 생성된 이후에도 상위함수인 makeAdder의 x에 접근 가능

const add10 = makeAdder(10); // add3와는 다른 렉시컬 환경을 가진다
console.log(add10(5)); // 15, add3와는 독립적이다
console.log(add3(1)); // 4 

/**
 * 전역 Lexical 환경
 * - makeAdder : function
 * - add3 : 초기화 x -> function(호출 시점)
 */

/**
 * makeAdder Lexical 환경
 * - x : 3
 */

/**
 * makeAdder Lexical 환경
 * - x : 10
 */

/**
 * 익명함수 Lexical 환경
 * - y : 2
 */


// 은닉
function makeCounter() {
    let num = 0;
    return function() {
        return num++; // 여기서 num은 외부함수의 변수
    }
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

// 내부함수에서 외부변수를 사용하고 있다.
// makeCounter 함수를 생성해서 사용하면 렉시컬 환경이 외부변수 값을 기억한다.
// 이 num을 외부에서 수정할 수 있는 방법은 없다. 오직 counter를 통해서만 접근 가능하다.