// setTimeout

function showName(name) {
    console.log(name);
}
let tId = setTimeout(showName, 3000, "Mike");
clearTimeout(tId);

// setInterval

let num = 0;

function showTime() {
    console.log(`접속한지 ${num++}초가 지났습니다.`);
    if (num > 5) {
        clearInterval(tId);
    }
}
tId = setInterval(showTime, 1000);
