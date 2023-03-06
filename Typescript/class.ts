// 접근 제한자 - public, private, protected

abstract class Car {
    readonly name: string = "car";
    color: string;
    static wheels = 4;
    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }
    abstract start(): void;
}


class Bmw extends Car {
    constructor(color: string, name: string) {
        super(color, name);
    }
    showName() {
        console.log(super.name);
    }
    start(): void {
        console.log("start!");
    }
}

const z4 = new Bmw("black", "zzzz4");
console.log(z4.name);
console.log(Car.wheels);

// 수정 권한 - readonly

// 정적 멤버 변수 - static

// 추상 클래스