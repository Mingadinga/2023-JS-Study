// 슬라이싱
let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

let newList = [];

for(let i=0; i<list.length; i++){
    newList.push(
        list[i].slice(4)
    )
    console.log(newList[i])
}

/* 
들어가며
JS의 역사
자료형
함수
배열
*/

// indexOf로 금칙어 확인하기
function hasCola(str) {
    if(str.indexOf("콜라") > -1) {
        console.log("금칙어가 있습니다.");
    } else {
        console.log("통과");
    }
}

hasCola("와 사이다"); // 통과
hasCola("와 콜라다"); // 금칙어가 있습니다.
hasCola("콜라!!"); // 금칙어가 있습니다.