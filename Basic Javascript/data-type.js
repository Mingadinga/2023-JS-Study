const name = "Mike";

// 문자열
const name1 = "Mike"
const name2 = 'Mike'
const name3 = `Mike`

const message = "I'm a boy"
const message2 = 'I\'m a boy'

const message3 = `My name is ${name}`;

const message4 = "나는 ${30+1}살 입니다.";
console.log(message4);

const a = "나는 ";
const b = " 입니다."
console.log(a + age + "살" + b);


// 숫자형
const age = 20;
const PI = 3.14;

const x = 1/0;
console.log(x); // Infinity

const y = name/2;
console.log(y); // NaN

// 논리형
const t = true;
const f = false;
console.log(name == "Mike");
console.log(age > 40);

// null과 undefined
// null - 존재하지 않는 값
// undefined - 할당하지 않은 상태
let number;
console.log(number) // undefined

let user = null;
console.log(user) // null

// typeof
console.log(typeof 3);      // "number"
console.log(typeof name);   // "string"
console.log(typeof true);   // "boolean"
console.log(typeof "xxx");  // "string"
console.log(typeof null);   // "object"
console.log(typeof undefined); // "undefined"

// null의 타입은 object(객체형)이지만
// null은 객체 타입이 아니다. JS 초기의 오류
