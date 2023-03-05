// 함수

function add(num1: number, num2: number): void {
    console.log(num1 + num2);
}

function isAdult(age: number): boolean {
    return age > 19;
}

// 선택적 매개변수
function hello(name?: string) {
    return `Hello, ${name || "World"}`;
}

const result = hello();
const result2 = hello("Sam");
// const result3 = hello(123); // error

// 선택적 매개변수의 위치 : 선택적 매개변수가 아닌 변수의 오른쪽에 위치해야함
function helloNameAge(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${name}. You age ${age}`;
    } else {
        return `Hello, ${name}`;
    }
}

console.log(helloNameAge("Sam", 30)); // Hello, Sam. You age 30
console.log(helloNameAge("Sam")); // Hello, Sam

// 선택적 매개변수를 앞쪽으로 두기
// undefined로 타입 허용하기
function helloNameAgeUndefined(age: number | undefined, name: string): string {
    if (age !== undefined) {
        return `Hello, ${name}. You age ${age}`;
    } else {
        return `Hello, ${name}`;
    }
}

console.log(helloNameAgeUndefined(30, "Sam")); // Hello, Sam. You age 30
console.log(helloNameAgeUndefined(undefined, "Sam")); // Hello, Sam

// 나머지 매개변수의 타입
function addRest(...nums: number[]) {
    return nums.reduce((result, num) => result + num, 0);
}

console.log(addRest(1, 2, 3)); // 6

// this 타입 지정

interface User {
    name: String;
}

const Sam: User = {name:'Sam'}

function showName(this:User, age:number, gender:'m'|'f') {
    console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a();


// 함수 오버로드
// 타입에 따라 다르게 동작하도록 하기

interface UserWithAge {
    name: string;
    age: number;
}

function join(name: string, age: number): UserWithAge;
function join(name: string, age: string): string;
function join(name: string, age: number | string): UserWithAge | string {
    if (typeof age === "number") {
        return {
            name,
            age,
        };
    } else {
        return "나이는 숫자로 입력해주세요."
    }
}

const s: User = join("Sam", 30);
const J: string = join("Jane", "30");
