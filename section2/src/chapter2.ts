// 배열 
let numArr : number []= [1, 2, 3];

let strArr : string[] = ["hello", "im", "ryuseonwoo"];

let boolArr : Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우 
let multiArr : (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr : number [][]= [
    [1, 2, 3],
    [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열(자바스크립트에서는 존재하지 않고 오로지 타입스크립트에서만 존재)
let tup1 : [number,number] = [1, 2];

let tup2 : [number, string, boolean]= [1, "2", true];

const users : [String, number] []= [
    ["이정환", 1],
    ["김정환", 2],
    ["박정환", 3],
    ["윤정환", 4]
]