// 배열 생성
let days = ['mon', 'tue', 'wed'];
console.log(days[2]);

days[1] = '화요일';
console.log(days);
console.log(days.length);

// 배열에 요소 추가 및 삭제
days.push("thu"); // 뒤에 추가
days.pop(); // 뒤에 요소 삭제
days.unshift("sun"); // 앞에 추가
days.shift(); // 앞에 요소 삭제
days.unshift('금', '토', '일'); // ['금', '토', '일', ... ]
days.shift(); // [ ... ]

// 반복
for(let index = 0; index < days.length; i++) {
    console.log(days[index]);
}

for(let day in days) {
    console.log(day);
}
