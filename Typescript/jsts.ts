// 동적 언어 : 런타입에 타입 결정, 오류가 발견됨
// function showItems(arr) {
//     arr.forEach((item) => {
//         console.log(item);
//     })
// }

showItems([1, 2, 3]);
// showItems(1, 2 ,3); // JS - Uncaught TypeError

// 정적 언어 : 컴파일타임에 타입 결정, 오류 발견
function add(num1:number, num2:number) {
    console.log(num1 + num2);
}

// add(1);
add(1, 2);
// add(3, 4, 5);
// add("Hello", "World");


function showItems(arr:number[]) {
    arr.forEach((item) => {
        console.log(item);
    })
}

showItems([1, 2, 3]);
// showItems(1, 2 ,3); // TS - Compile Error