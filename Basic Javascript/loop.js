// for : 반복횟수 종료
for(let i = 0; i < 10; i++) {
    console.log(i);
}

// while : 조건 종료
let i = 0;

while(i < 10) {
    console.log(i);
    i++;
}

// do while : 적어도 한번 실행됨
do {
    console.log(i);
    i++;
} while(i < 10);

// break, continue : 반복문 제어
while(true) {
    let answer = confirm("계속 할까요?");
    if(!answer) {
        break;
    }
}

for(let i = 0; i < 10; i++) {
    if(i % 2) {
        continue;
    }
    console.log(i);
}