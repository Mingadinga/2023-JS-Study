// 생성자 vs 클래스
const User = function(name, age) {
    this.name = name;
    this.age = age;
    // this.showName = function() {
    //     console.log(this.name);
    // }
}
User.prototype.showName = function() {
    console.log(this.name);
}

const mike = new User("Mike", 30);
for(const p in mike) {
    console.log(p);
}
/**
 * name
 * age
 * showName
 */

class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}

const tom = new User2("Tom", 19);
for(const p in tom) {
    console.log(p);
}

/**
 * name
 * age
 */


// extends
class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive..");
    }
    stop() {
        console.log("stop!");
    }
}

class Bmw extends Car {
    constructor(color) {
        super(color);
        this.navigation = 1;
    }
    park() {
        console.log("park");
    }
    // 오버라이딩
    stop() {
        super.stop();
        console.log("off");
    }
}

const z4 = new Bmw("blue");

console.log(z4.color); // blue
console.log(z4.navigation); // 1
z4.drive(); // drive..
z4.stop(); // stop!\noff!
z4.park(); // park

