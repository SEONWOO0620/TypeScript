/**
 * 기본 타입간의 호환성
 */

let num1 : number = 10;
let num2 : 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name : string;
    color : string;
};

type Dog = {
    name : string;
    color : string;
    breed : string;
};

let animal : Animal = {
    name : "기린",
    color : "yellow"
};

let dog : Dog = {
    name : "돌돌이",
    color : "brown",
    breed : "진도"
};

animal = dog;

// dog = animal;

// type Book = {
//     name : string;
//     price : number;
// }

type ProgrammingBook = {
    name : string;
    price : number;
    skill : string;
}

let book : Book;
let programmingBook : ProgrammingBook = {
    name : "한 입 크기로 잘라먹는 리액트",
    price : 33000,
    skill : "reactjs",
}

book = programmingBook; // 업캐스팅
// programmingBook = book; // 다운캐스팅

/**
 *  초과 프로퍼티 검사
 */

type Book = {
    name : string;
    price : number;
}

let book2 : Book = {
    name : "한 입 크기로 잘라먹는 리액트",
    price : 33000,
    // skill : "reactjs",
};

let book3 : Book = programmingBook; // 초기화 할때 객체 리터럴 타입을 이용한 것은 아니기 때문에 초과 프로퍼티 검사를 피할 수 있다.

function func(book : Book){}
func({
    name : "한 입 크기로 잘라먹는 리액트",
    price : 33000,
    // skill : "reactjs",
});

func(programmingBook);