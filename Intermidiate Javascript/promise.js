// 프로미스 생성과 사용
const pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('OK')
    }, 3000)
});

pr.then(
    // function(result) {}
    (result) => console.log("성공")
).catch(
    // function(err) {}
    (error) => console.log("실패!")
);

// 콜백 지옥
let f1 = (callback) => {
    setTimeout(function () {
        console.log("1번 주문 완료");
        callback();
    }, 1000);
};

let f2 = (callback) => {
    setTimeout(function () {
        console.log("2번 주문 완료");
        callback();
    }, 3000);
};

let f3 = (callback) => {
    setTimeout(function () {
        console.log("3번 주문 완료");
        callback();
    }, 2000);
};

console.log("시작");
f1(function() {
    f2(function() {
        f3(function() {
            console.log("끝");
        })
    })
});

// 프로미스 체이닝 사용
f1 = (message) => {
    console.log(message);
    return new Promise((res, rej => {
        setTimeout(function () {
            res("1번 주문 완료");
        }, 1000);
    }))
};

f2 = (message) => {
    console.log(message);
    return new Promise((res, rej => {
        setTimeout(function () {
            res("2번 주문 완료");
        }, 3000);
    }))
};

f3 = (message) => {
    console.log(message);
    return new Promise((res, rej => {
        setTimeout(function () {
            res("3번 주문 완료");
        }, 2000);
    }))
};

// 프로미스 체이닝
console.log("시작");
res = console.log;
f1()   
    .then((res) => f2(res))
    .then((res) => f3(res))
    .then((res) => console.log(res))
    .catch(console.log)
    .finally(() => {
        console.log("끝");
    });

// 프로미스 all
console.time("x");
Promise.all([f1(), f2(), f3()]).catch((res) => {
    console.log(res);
    console.timeEnd("x");
});

// 프로미스 race
console.time("x");
Promise.race([f1(), f2(), f3()]).catch((res) => {
    console.log(res);
    console.timeEnd("x");
});
