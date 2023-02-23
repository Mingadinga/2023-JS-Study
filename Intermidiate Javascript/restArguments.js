// arguments
function showName(name) {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showName('Mike', 'Tom');

// rest parameters
function showName(...names) {
    console.log(names);
}

showName(); // []
showName('Mike'); // [ 'Mike' ]
showName('Mike', 'Tom'); // [ 'Mike', 'Tom' ]

/******************************************
 * 나머지 매개변수
 * 매개변수로 넘어오는 인자의 수가 매번 다를 때 유용
 * 전달 받은 모든 수를 더하는 함수
 ******************************************/

function add(...numbers) {
    let result = 0;
    numbers.forEach((num) => (result += num));
    console.log(result);
}
add(1, 2, 3); // 6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55


/******************************************
 * 나머지 매개변수
 * user 객체를 생성하는 생성자 함수
 * 나머지 매개변수는 항상 마지막에 위치해야한다.
 ******************************************/
function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "JS", "React");
const user3 = new User("Jane", 10, "English");

console.log(user1); // User { name: 'Mike', age: 30, skills: [ 'html', 'css' ] }
console.log(user2); // User { name: 'Tom', age: 20, skills: [ 'JS', 'React' ] }
console.log(user3); // User { name: 'Jane', age: 10, skills: [ 'English' ] }