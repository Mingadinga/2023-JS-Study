// keyof
// 키 값을 유니온 타입으로 받기
interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'
const uk:UserKey = "name"; // 네임 타입 선택

// Partial<T>
// 프로퍼티를 모두 optional로 바꿔준다
let admin: Partial<User> = {
    id: 1,
    name: "Bob",
}

// Required<T>
let manager: Required<User> = {
    id: 2,
    name: "Alice",
    age: 30,
    gender: "f",
}

// Readonly <T>
let ceo: Readonly<User> = {
    id: 3,
    name: "Cassie",
    age: 40,
    gender: "f",
}

// ceo.id = 4; // error

// Record<K, T>
type Grade = '1' | '2' | '3' | '4';
type Score = 'A' | 'B' | 'C' | 'D'
const score: Record<Grade, Score> = {
    1: "A",
    2: "C",
    3: "B",
    4: "D"
};


function isValid(user:User) {
    const result: Record<keyof User, boolean> = {
        id: user.id > 0,
        name: user.name !== '',
        age: user.age > 0,
        gender: user.gender === 'f'
    }
    return result;
}

// Pick<T, K>
let pick: Pick<User, "id" | "name"> = {
    id: 0,
    name: "Bob",
};

// Omit<T, K>
let omit: Omit<User, "age" | "gender"> = {
    id: 0,
    name: "Bob",
};

// Exclude<T1, T2>
type T1 = string | number | boolean;
type T2 = Exclude<T1, number>;

// NonNullable<Type>
type t1 = string | null | undefined | void;
type t2 = NonNullable<t1>;
