// call

let mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName() {
    console.log(this.name);
}

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(mike, 1999, "singer");
console.log(mike); // { name: 'Mike', birthYear: 1999, occupation: 'singer' }

update.call(tom, 2002, "teacher");
console.log(tom); // { name: 'Tom', birthYear: 2002, occupation: 'teacher' }

// apply
const nums = [3, 10, 1, 6, 4];
// const minNum = Math.min(...nums); // spread
// const maxNum = Math.max(...nums); // spread
const minNum = Math.min.apply(null, nums);
const maxNum = Math.max.apply(null, nums);
console.log(minNum); // 1
console.log(maxNum); // 10

// bind

// this 지정
mike = {
    name: "Mike",
};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

const updateMike = update.bind(mike);
updateMike(1980, "police");
console.log(mike);

// 내부함수의 this 지정
const user = {
    name: "Mike",
    showName: function() {
        console.log(`hello, ${this.name}`);
    },
};

let fn = user.showName;
fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);
boundFn(); // hello, Mike