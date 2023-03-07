// generic
// 클래스나 함수, 인터페이스를 다양한 타입으로 재사용할 수 있다
// 선언 시점에서는 추상 타입으로 작성하고 생성 시점에 구체적인 타입을 지정한다

function getSize<T>(arr: T[]):number {
    return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number>(arr1);

const arr2 = ["a", "b", "c"];
getSize<string>(arr2);

const arr3 = [1, 2, "3"];
getSize<number | string>(arr3);

// interface generic

interface Mobile<T> {
    name: string;
    price: number;
    option: T;
}

const m1:Mobile<object> = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false,
    }
}

const m1_2:Mobile<{color: string; coupon: boolean}> = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false,
    }
}

const m2:Mobile<string> = {
    name: "s20",
    price: 900,
    option: "good",
}

// parameter generic
// 매개변수가 필수로 가지고 있어야하는 필드를 상속으로 명시한다

interface User {
    name: string;
    age: number;
}

interface Car {
    name: string;
    color: string;
}

interface Book {
    price: number;
}

const user: User = {name: "a", age: 10};
const car: Car = {name: "bmw", color: "red"};
const book: Book = {price: 3000};

function showName<T extends {name: string}>(data:T): string {
    return data.name;
}

showName(user);
showName(car);
// showName(book); // name 필드를 가지지 않으므로 error
