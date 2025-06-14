// 타입 별칭
type User = {
    id : number;
    name : string;
    nickname : string;
    birth : string;
    bio : string;
    location : string;
}



let user : User = {
    id : 1,
    name : "유선우",
    nickname : "qwldnjs",
    birth : "1995.06.20",
    bio : "hello",
    location : "서울시",
};

let user2 : User = {
    id : 2,
    name : "박선우",
    nickname : "qwldnjs",
    birth : "1995.06.20",
    bio : "hello",
    location : "서울시",
};


// 인덱스 시그니처 
type CountryCodes = {
    [key : string] : string;
}

let CountryCodes : CountryCodes = {
    Korea : "ko",
    UnitedState : "us",
    UnitedKingdom : "uk",
}

type CountryNumberCodes = {
    [key : string] : number;
    Korea : number;
}

let countryNumberAndStringCodes : CountryNumberCodes = {
    Korea : 410, 
};