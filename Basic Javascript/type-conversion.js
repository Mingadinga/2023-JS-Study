// 문자열 타입의 덧셈
// "90" + "80" = "9080"

// 자동 형변환
// 문자열 타입이 숫자형으로 자동 형변환되는 경우 : 덧셈이 아닌 연산자 사용시 숫자형으로 자동 형변환
// 자동 형변환은 찾기 힘든 버그를 유발하므로 명시적 형변환을 사용해야 한다
// "9080" / 2 = 4540

// 문자열로 형변환
console.log(
    String(3),
    String(true),
    String(false),
    String(null),
    String(undefined)
)

// 숫자형으로 형변환
console.log(
    Number("1234"),
    Number("1234dsfsfsd"), // NaN
    Number(true),
    Number(false),
)

// 논리형으로 형변환
console.log(
    // false
    Boolean(0),
    Boolean(""),
    Boolean(null), // (프롬프트로 취소하고 논리형으로 형변환) 0
    Boolean(undefined), // NaN
    Boolean(NaN),
)