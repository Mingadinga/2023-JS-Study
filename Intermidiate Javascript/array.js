// find
let arr = [1, 2, 3, 4, 5];

const result = arr.find((item) => {
    return item % 2 === 0;
});

console.log(result);

// find, findIndex
let userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 10},
]

const teen = userList.find((user) => {
    if (user.age < 19) {
        return true;
    } 
    return false;
})
console.log(teen); // { name: 'Tom', age: 10 }

const teen_index = userList.findIndex((user) => {
    if (user.age < 19) {
        return true;
    } 
    return false;
})
console.log(teen_index); // 2


// isArray()
let user = {
    name: "Mike",
    age: 30,
};
let users = ["Mike", "Tom", "Jane"];

console.log(typeof user); // object
console.log(typeof users);  // object

console.log(Array.isArray(user)); // false
console.log(Array.isArray(users)); // true

// filter
arr = [1, 2, 3, 4, 5, 6];
filtered_array = arr.filter((item) => {
    return item % 2 === 0;
})
console.log(filtered_array); // [ 2, 4, 6 ]


// map
userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 10},
];

let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age > 19,
    })
});

console.log(newUserList);
/*
[
  { name: 'Mike', age: 30, id: 1, isAdult: true },
  { name: 'Jane', age: 27, id: 2, isAdult: true },
  { name: 'Tom', age: 10, id: 3, isAdult: false }
]
*/

/*************
arr.sort()
배열 재정렬
주의! 배열 자체가 변경됨
인수로 정렬 로직을 담은 함수를 받음
/*************/
let arr1 = [4, 6, 2, 3, 1];
let arr2 = ["a", "c", "d", "e", "b"];

arr1.sort();
arr2.sort();

console.log(arr1); // [ 1, 2, 3, 4, 6 ]
console.log(arr2); // [ 'a', 'b', 'c', 'd', 'e' ]

// 정렬 로직 전달
let arr3 = [27, 8, 5, 13];

// 8 27 5 13
// 5 8 27 13
// 5 8 13 27

function fn(a, b) {
    return a - b;
}

arr3.sort(fn);
console.log(arr3); // [ 5, 8, 13, 27 ]

/*************
arr.reverse()
인수로 함수를 받음
(누적 계산값, 현재값) => {return 계산값};
/*************/

// 배열 값 모두 더하기
arr = [1, 2, 3, 4, 5];
sum = arr.reduce((prev, cur) => {
    return prev + cur;
}, 100)
console.log(sum); // 115

// 성인만 골라내기
userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 10},
];

let adultList = userList.reduce((prev, cur) => {
    if (cur.age > 19) {
        prev.push(cur);
    }
    return prev;
}, []);

console.log(adultList); // [ { name: 'Mike', age: 30 }, { name: 'Jane', age: 27 } ]
