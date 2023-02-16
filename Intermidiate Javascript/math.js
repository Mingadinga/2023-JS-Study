// toString() : 숫자를 문자로
let num = 10;
num.toString(); // "10"
num.toString(2); // "1010"

let num2 = 255;
num2.toString(16); // "ff"

// Math

// ceil() : 올림
let s1 = 5.1;
let s2 = 5.7;
Math.ceil(s1); // 6
Math.ceil(s2); // 6

// floor() : 내림
Math.floor(s1); // 5
Math.floor(s2); // 5

// round() : 반올림
Math.round(s1);
Math.round(s2);

// toPrefix() : 소수점 자릿수까지 반올림하여 문자열 반환
let userRate = 30.12345;
userRate.toFixed(2); // "30.12"
userRate.toFixed(6); // "30.123450"

// Number() : 문자열을 숫자로 변환
Number(userRate.toFixed(2)); // 30.12

// isNaN(): NaN인지 검사
let x = Number('x'); // NaN
x == NaN // false
isNaN(x) // true

// parseInt() : 문자가 포함된 숫자 문자열도 숫자로 변환, 읽을 수 있는 곳까지
let margin = '10px';
parseInt(margin); // 10
Number(margin); // NaN

let redColor = 'f3';
parseInt(redColor); // NaN
parseInt(redColor, 16); // 243

// parseFloat() : 문자가 포함된 소수 문자열도 소수로 변환, 부동소수점 사용
let padding = '18.5%';
parseInt(padding); // 18
parseFloat(padding); // 18.5

// random() : [0, 1) 소수 뽑기
Math.floor(Math.random() * 100) + 1 // 1 ~ 100

// max(), min()
Math.max([1, 4, 5, 2, 4]); // 5
Math.min([1, 4, 5, 2, 4]); // 1

// abs() : 절대값
Math.abs(-1) // 1

// pow(n, m) : n^m
Math.pow(2, 10); // 1024

// sqrt() : 제곱근
Math.sqrt(16);