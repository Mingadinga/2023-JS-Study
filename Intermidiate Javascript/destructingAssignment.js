// 배열 구조 분해
let [x, y] = [1, 2];
console.log(x); // 1
console.log(y); // 2

// 순서대로 할당된다
let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;
console.log(user1); // 'Mike'
console.log(user2); // 'Tom'
console.log(user3); // 'Jane'

// split 함수 활용
let str = "Mike-Tom-Jane";
let [u1, u2, u3] = str.split('-');
console.log(u1); // 'Mike'
console.log(u2); // 'Tom'
console.log(u3); // 'Jane'

// 기본값 지정하기
let [a, b, c] = [1, 2];
console.log(c); // undefined

[a=3, b=4, c=5] = [1, 2];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 5

// 반환값 무시
[user1, , user2] = ['Mike', 'Tom', 'Jane', 'Tony'];
console.log(user1); // 'Mike'
console.log(user2); // 'Jane'

// swap
a = 1;
b = 2;
[a, b] = [b, a]; 

// 객체 구조 분해
let user = {name: 'Mike', age: 30};
let {name, age} = user; // let name = user.name; let age = user.age;
console.log(name); // 'Mike'
console.log(age); // 30

// 새로운 변수 이름으로 할당
user = {name: 'Mike', age: 30};
let {name: userName, age: userAge} = user;
console.log(userName); // 'Mike'
console.log(userAge); // 30

// 기본값 할당
user = {name: 'Mike', age: 30};
var {m_name, m_age, gender = 'male'} = user;
console.log(gender); // 'male'

user = {name: 'Jane', age: 18, gender: 'female'};
var {j_name, j_age, gender = 'male'} = user;
console.log(gender); // 'female'