/**
 * 함수 타입 표현식
 */

type Opration = (a : number, b : number) => number;

const add : (a : number, b : number) => number = (a, b) => a + b;
const sub : Opration = (a, b) => a - b;
const multiply : Opration = (a , b) => a*b;
const divide : Opration = (a , b) => a / b;

/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 */

type Operation2 = {
    (a: number, b: number) : number;
    name : string;
}

function func(a : number): void{}

const add2 : Operation2 = (a, b) => a + b;
const sub2 : Operation2 = (a, b) => a - b;
const multiply2 : Operation2 = (a , b) => a*b;
const divide2 : Operation2 = (a , b) => a / b;

// add2();
add2.name;