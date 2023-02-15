// 다른 개발자가 만들어 놓은 객체
const user = {
    name: "Mike",
    age: 30,
};

// 내가 작업
// 기존 객체 프로퍼티에 값이 덮어쓰이지 않는다
// 기존 객체 프로퍼티 대상으로 동작하던 함수에 영향을 미치지 않는다
// user.showName = function(){};
const showName = Symbol("show name");
user[showName] = function() {
    console.log(this.name);
}
user[showName]();

// 사용자가 접속하면 보는 메세지
for(let key in user) {
	console.log(`His ${key} id ${user[key]}.`);
}
