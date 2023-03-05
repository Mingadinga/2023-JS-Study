type Score = 'A' | 'B' | 'C' | 'F';

interface User {
    name: string;
    age: number;
    gender? : string;
    readonly birthYear: number;
    [grade:number] : Score; // key - value 쌍 여러개
}

let user : User = {
    name : 'xx',
    age: 30,
    birthYear : 2000,
    1 : 'A',
    2 : 'B',
    // 3 : 'Z' // error
};


// 함수 정의
interface Add {
    (num1: number, num2: number): number;
}

const add : Add = function(x, y) {
    return x + y;
}

add(10, 20);
// add(10, "30"); // error
// add(10, 20, 30); // error

interface IsAdult {
    (age:number):boolean;
}

const a : IsAdult = (age) => {
    return age > 19
}

a(33);

// 클래스 정의

interface Car {
    color: string;
    wheels: number;
    start(): void;
}

class Bmw implements Car {
    wheels = 4;
    color;
    constructor(c:string) {
        this.color = c;
    }
    start() {
        console.log('go..');
    }
}

const b = new Bmw('green');
console.log(b); // Bmw { wheels: 4, color: 'green' }
b.start(); // go..

// 확장

interface Car {
    color: string;
    wheels: number;
    start(): void;
}

interface Toy {
    name: string;
}

interface ToyCar extends Car, Toy {
    price : number;
}