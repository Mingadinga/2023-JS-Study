// arr1을 [4,5,6,1,2,3]으로 만들기

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// 배열 메소드만으로 만들기
// arr2.reverse().forEach((num) => {
//     arr1.unshift(num);
// })

// 전개구문 사용하기
arr1 = [...arr2, ...arr1];

console.log(arr1); // [ 4, 5, 6, 1, 2, 3 ]

// 정보들을 user 객체로 초기화하기
let user = {name: "Mike"};
let info = {age: 30};
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

// 객체 생성하고 하나씩 밀어넣기
// user = Object.assign({}, user, info, {
//     skills: [],
// });
// fe.forEach((item) => {
//     user.skills.push(item);
// })
// lang.forEach((item) => {
//     user.skills.push(item);
// })

user = {
    ...user,
    ...info,
    skills: [...fe, ...lang],
};

console.log(user);

/*
{
  name: 'Mike',
  age: 30,
  skills: [ 'JS', 'React', 'Korean', 'English' ]
}
*/