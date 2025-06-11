/**
 * 인터페이스
 */

interface Person{
    readonly name : string;
    age? : number;
    sayHi() : void;
    sayHi(a:number, b: number):void;
};

type Type1 = number | string | Person;
type Type2 = number & string;

const person : Person = {
    name : "유선우",
    sayHi : function(){
        console.log("hi");
    },
};

person.sayHi();
person.sayHi(1,2);