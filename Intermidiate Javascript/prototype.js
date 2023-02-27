// __proto__
const user = {
    name: "Mike",
}
console.log(user.hasOwnProperty('name')); // true
console.log(user.hasOwnProperty('age')); // false

// user는 hasOwnProperty라는 함수를 따로 가지지 않는데, 어떻게 동작하는 것일까?
// user의 __proto__ 속성에서 hasOwnProperty 함수를 찾을 수 있다.


// 상속과 프로퍼티 체이닝
var car = {
    wheels: 4,
    drive() {
        console.log("drive..");
    }
}

var bmw = {
    color: "red",
    navigation: 1,
}

var benz = {
    color: "black",
}

var audi = {
    color: "blue",
}

bmw.__proto__ = car; // 상속
benz.__proto__ = car; // 상속
audi.__proto__ = car; // 상속

console.log(bmw.color); // red
console.log(bmw.wheels); // 4
// 객체에 원하는 프로퍼티가 없는 경우 __proto__가 가리키는 객체에 해당 프로퍼티가 있는지 찾아본다.
// 이를 프로토타입 체인이라고 한다.

// 객체 프로퍼티 순회하기

var x5 = {
    color: "white",
    name: "x5",
};
x5.__proto__ = bmw;

for(p in x5) {
    console.log(p); // 상위 객체까지 모두 출력됨
    /*
    color
    name
    navigation
    wheels
    drive
    */
}

for(p in x5) {
    if(x5.hasOwnProperty(p)) {
        console.log('o', p);
    } else{
        console.log('x', p);
    }
    /*
    o color
    o name
    x navigation
    x wheels
    x drive
    */
}


// 생성자 이용하기
// 생성자로부터 만들어지는 모든 객체의 공통 속성을 정의할 수 있다.
car = {
    wheels: 4,
    drive() {
        console.log("drive..");
    }
}

const Bmw = function(color) {
    this.color = color;
}
Bmw.prototype.wheels = 5; // 생성 객체의 __proto__에 해당 프로퍼티를 설정한다
Bmw.prototype.drive = function() {
    console.log("drive..");
}

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

console.log(x5.wheels);
console.log(z4.drive());

// instanceOf
// 객체가 특정 생성자로부터 만들어진 것인지 확인한다
console.log(z4 instanceof Bmw); // true
console.log(z4.constuctor === Bmw); // true
// 생성자로부터 만들어진 객체는 constructor 참조를 가진다. 생성자를 가리킨다.

Bmw.prototype = {
    wheels: 5,
    drive() {
        console.log("drive..");
    },
    navigation: 1,
    stop() {
        console.log("stop!");
    }
}

const r5 = new Bmw("red");
console.log(r5.constuctor === Bmw); // false
// 프로토타입을 덮어쓰는 방식의 생성자에서 만들어진 객체는 constructor 참조를 가지지 않는다.
// 따라서 프로토타입을 하나씩 추가해주거나
// 수동으로 constructor를 명시한다.

Bmw.prototype = {
    constuctor: Bmw,
    wheels: 5,
    drive() {
        console.log("drive..");
    },
    navigation: 1,
    stop() {
        console.log("stop!");
    }
}

const b4 = new Bmw("blue");
console.log(b4.constuctor === Bmw); // true

// 생성자에 은닉화 사용하기
Bmw = function(color) {
    const c = color;
    this.getColor = function() {
        console.log(c);
    }
}

const x5 = new Bmw("red");
// color는 초기화한 값으로 유지되며, 중간에 수정할 수 없다.
