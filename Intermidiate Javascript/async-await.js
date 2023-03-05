// await

// async function getName() {
//     return Promise.resolve("Tom");
// }

// getName().then((name) => {
//     console.log(name);
// })

// async function getName() {
//     return new Error('err');
// }

// getName().catch((err) => {
//     console.log(err);
// });

// await

function getName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(name);
        }, 1000);
    });
}

async function showName(){
    const result = getName("Tom");
}

// await 사용하기

res = console.log;
rej = console.log;

const f1 = () => {
    return new Promise((res, rej => {
        setTimeout(function () {
            res("1번 주문 완료");
        }, 1000);
    }))
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej => {
        setTimeout(function () {
            res("2번 주문 완료");
        }, 3000);
    }))
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej => {
        setTimeout(function () {
            res("3번 주문 완료");
        }, 2000);
    }))
};

console.log("시작");
async function order() {
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
    console.log("종료");
}
order();

// 예외 처리
console.log("시작");
async function order() {
    try {
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f3(result2);
        console.log(result3);
    } catch(e) {
        console.log("종료");
    }
}
order();

// Promise all 사용하기
console.log("시작");
async function order() {
    try {
        const result = await Promise.all([f1(), f2(), f3()]);
        console.log(result);
    } catch(e) {
        console.log(e);
    }
    console.log("종료");
}
order();
