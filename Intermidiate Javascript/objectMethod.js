const user = {
    name: 'Mike',
    age: 30
};

// 참조값 복사
const user2 = user;
user2.name = "Tom";
console.log(user); // { name: 'Tom', age: 30 }
console.log(user2); // { name: 'Tom', age: 30 }

// 객체 복사
const user3 = Object.assign({}, user);
user3.name = "Tom"
user.name = "Mike"
console.log(user); // { name: 'Mike', age: 30 }
console.log(user3); // { name: 'Tom', age: 30 }

// 키 배열
const keys = Object.keys(user);
console.log(keys); // [ 'name', 'age' ]

// 값 배열
const values = Object.values(user);
console.log(values); // [ 'Mike', 30 ]

// 키값 배열
const result = Object.entries(user);
console.log(result); // [ [ 'name', 'Mike' ], [ 'age', 30 ] ]

// 배열을 객체로 반환
let arr = [
    ['mon', '월'],
    ['tue', '화'],
];

const obj = Object.fromEntries(arr);
console.log(result); // [ [ 'name', 'Mike' ], [ 'age', 30 ] ]