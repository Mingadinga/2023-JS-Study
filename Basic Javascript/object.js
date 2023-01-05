// 객체
const superman = {
    name : 'clark',
    age : 30,
}

console.log(superman.name)
console.log(superman['name'])
console.log(superman)

// 프로퍼티 추가
superman.hairColor = 'black';
superman['hobby'] = 'football';
console.log(superman)

// 프로퍼티 삭제
delete superman.age;
console.log(superman)

// 객체 반환 함수(생성자)
function makeObject(name, age) {
    return {
        name, // 축약형, 실제로는 name : name
        age : age,
        hobby : 'football'
    }
}

const Mike = makeObject('Mike', age);
console.log(Mike);

// 프로퍼티 확인
console.log('age' in Mike);
console.log('birthday' in Mike);

function isAdult(user) {
    if(!'age' in user || user.age < 20) {
        return false;
    }
    return true;
}

const Jane = { // Jane의 age는 undefined
    name : 'Jane'
};

console.log(isAdult(Mike));
console.log(isAdult(Jane)); 

// 객체의 프로퍼티 순회
for(x in Mike) {
    console.log(x); // key 이름
    console.log(Mike[x]); // value
}

// 객체에 메소드 추가하기
let boy = {
    name : "Mike",
    showName : function() {
        console.log(this.name)
    }
};

let man = boy; // 참조 할당
man.name = "Tom"; 
console.log(boy.name); // Tom
man.showName(); // Tom

// 화살표 함수 사용하기
let girl = {
    name : "Jane",
    showName : () => {
        console.log(this.name)
    }
};

// 화살표 함수에서 this는 전역객체를 가리킨다.
// 전역객체는 브라우저 환경에서 window, Node js 환경에서 global이다.
// 객체의 자기참조를 사용하려면 화살표 함수는 사용하지 않는 것이 좋다.

