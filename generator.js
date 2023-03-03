function* fn() {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    return "finish";
}

let a = fn();
console.log(a.next()); // { value: 1, done: false }
console.log(a.next()); // { value: 2, done: false }
console.log(a.next()); // { value: 3, done: false }
console.log(a.next()); // { value: 'finish', done: true }
console.log(a.next()); // { value: undefined, done: true }

a = fn();
console.log(a.next()); // { value: 1, done: false }
console.log(a.return('END')); // { value: 'END', done: true }

a = fn();
console.log(a.next()); // { value: 1, done: false }
// console.log(a.throw(new Error('err'))); // Error: err at Object.<anonymous>

// 입력 받기
function* fn() {
    const num1 = yield "첫번째 숫자를 입력해주세요";
    console.log(num1);

    const num2 = yield "두번째 숫자를 입력해주세요";
    console.log(num2);

    return num1 + num2;
}

console.log("시작");
a = fn(); 
result = a.next();
console.log(result); // { value: '첫번째 숫자를 입력해주세요', done: false }
result = a.next(2); // 2
console.log(result); // { value: '두번째 숫자를 입력해주세요', done: false }
result = a.next(3); // 3
console.log(result); // { value: 5, done: true }
// 값을 미리 만들어두지 않음. 계산을 지연할 수 있음
// 무한루프 돌아도 브라우저가 죽지 않음
function* fn() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

console.log("시작");
a = fn();
console.log(a.next()); // { value: 0, done: false }
console.log(a.next()); // { value: 1, done: false }
console.log(a.next()); // { value: 2, done: false }
console.log(a.next()); // { value: 3, done: false }