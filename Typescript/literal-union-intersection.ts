// literal
const userName1 = "Bob"; // type : "Bob" 
let userName2: string | number = "Tom";
userName2 = 3;

// union
type Job = "police" | "developer" | "teacher"; // union 타입
interface User {
    name: String;
    job: Job;
}

const user:User = {
    name: "Bob",
    job: "developer",
    // job: "student" // error
}

// union types

interface Car {
    name: "car"; // 문자열 리터럴 타입
    color: string;
    start(): void;
}

interface Mobile {
    name: "mobile"; // 문자열 리터럴 타입
    color: string;
    call(): void;
}

function getGift(gift: Car | Mobile) {
    console.log(gift.color);
    if(gift.name === "car"){ // 식별 가능한 유니온 타입
        gift.start();
    } else {
        gift.call();
    }
}

// intersection types

// interface Car {
//     name: string; 
//     start(): void;
// }

// interface Toy {
//     name: string;
//     color: string;
//     price: number;
// }

// // 여러개 타입을 하나로 합쳐주는 역할
// // 필요한 모든 기능을 가진 하나의 타입이 만들어짐
// const toyCar: Toy & Car = {
//     name : "티요",
//     start(){},
//     color: "blue",
//     price: 1000,
// }