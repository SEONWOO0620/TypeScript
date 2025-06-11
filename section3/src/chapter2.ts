/**
 *  Unknown 타입
 */

function UnknownExam(){
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;



    let unknownVar : unknown;

    // let num : number = unknownVaar;
    // let str : string = unknownVaar;
    // let bool : boolean = unknownVaar;

}

/**
 * Never 타입 --> 모든 집합의 공집합이다. 
 */

function neverExam(){

    function neverFunc() : never {
        while (true){}
    }

    let num : number = neverFunc();
    let str : string = neverFunc();
    let bool : boolean = neverFunc();

    // let never1 : never = 10;
    // let never2 : never = "hello";
    // let never3 : never = true;

}
/**
 * void 타입
 */
function voidExam(){
    function voidFunc() : void {
        console.log("hi");
        return undefined;
    }

    let voidVar : void = undefined;
}

/**
 * any 타입
 */

function anyExam(){
    let unknownVar : unknown;
    let anyVar : any;
    let undefinedVar : undefined;
    let neverVar : never

    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar;
}