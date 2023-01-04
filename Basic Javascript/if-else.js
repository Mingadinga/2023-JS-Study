console.log(10>5);
console.log(10 == 5);
console.log(10 != 5);

// 동등 연산자
const a = 1;
const b = "1";
console.log(a == b); // 동등 연산자 이게 왜 참(짜증)
console.log(a === b); // 일치 연산자

// 조건문
const age = 20;

if(age > 19) { // 괄호 안에 조건 연산식
    console.log('환영합니다.');
}
else if(age == 19) {
    console.log('수능 잘 보세요.');
}
else {
    console.log('안녕히 가세요.');
}