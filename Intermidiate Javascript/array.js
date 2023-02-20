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