// alert - 알려줌
alert("비밀번호는 필수로 입력해야 합니다!")

// prompt - 입력 받음
const name = prompt("이름을 입력하세요.")
// 값 입력 : 문자열 타입으로 name에 담긴다
// 취소 : null
alert("환영합니다, ${name} 님");

const date = prompt("예약일을 입력해주세요", "2022-10-21"); // 입력 필드에 default 값
alert("${date}에 예약되었습니다.");

// confirm - 확인 받음
const isAudult = confirm("당신은 성인입니까?");
console.log(isAudult); // true or false

// 단점
// 1. 스크립트 일시 정지
// 2. 스타일링 불가능