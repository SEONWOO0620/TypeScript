// any
// 특정 변수의 타입을 우리가 확실히 모를때 

let anyVar : any = 10;
anyVar = "hello";

let num : number = 10;
num = anyVar;

// unknown 타입
let unknownVar : unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if(typeof unknownVar === "number"){
    num = unknownVar;
}
