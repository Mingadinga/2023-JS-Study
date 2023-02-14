// 어떤게 key가 될지 모르는 객체를 만들 때 유용
let n = "name";
let a = "age";
const user = {
    [n]: 'Mike',
    [a]: 30,
    [1+4]: 5,
};
console.log(user);

function makeObj(key, val) {
    return {
        [key]: val
    };
}

const obj = makeObj('나이', 23);
