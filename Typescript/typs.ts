// 기본 자료형
let car:string = 'bmw';
car = 'benz';

let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

let week1: string[] = ['mon', 'tue', 'wed'];
let week2: Array<string> = ['mon', 'tue', 'wed'];

// week1.push(3);

// Tuple
let b:[string, number];

b = ['z', 1];
// b = [1, 'z']; // error

b[0].toLowerCase();
// b[1].toLowerCase(); // error

// void : 반환값 없음
function sayHello():void{
    console.log('hello');
}

// never : 항상 에러를 반환하거나 영원히 끝나지 않는 함수의 타입
function showError(){
    throw new Error();
}

function infLoop(): never {
    while(true) {
        // do something
    }
}

// enum : 양방향으로 값을 탐색할 수 있다
enum Os {
    Window = 3,
    Ios = 10,
    Android // 11
}

console.log(Os.Window); // 3
console.log(Os[10]); // Ios
console.log(Os['Android']); // 11

enum OsString {
    Window = 'win',
    Ios = 'ios',
    Android = 'and'
}

let myOs:OsString;
myOs = OsString.Window;

// null, undefined
let n:null = null;
let u:undefined = undefined;