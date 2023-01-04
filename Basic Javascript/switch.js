let fruit = prompt("무슨 과일을 사고 싶나요?");

switch(fruit) {
    case '사과' : 
        console.log('사과입니다.');
        console.log('100원입니다.');
        break;
    case '바나나':
        console.log('바나나입니다.');
        console.log('200원입니다.');
        break;
    case '키위':
        console.log('키위입니다.');
        console.log('300원입니다.');
        break;
    case '멜론':
        console.log('멜론입니다.');
        console.log('300원입니다.');
        break;
    default:
        console.log('올바르지 않은 입력입니다.');
}
