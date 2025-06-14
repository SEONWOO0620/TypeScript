/**
 * 인터페이스 확장
 */

interface Animal {
    name : string;
    color : string;
};

interface Dog extends Animal{
    isBark : boolean;
};

const dog : Dog = {
    name : "",
    color : "",
    isBark : true,
}

interface Cat extends Animal {
    isScratech : boolean;
};

interface Chicken extends Animal {
    isFly : boolean;
};

interface DogCat extends Dog, Cat {

}

const dogCat : DogCat = {
    name : "",
    color : "",
    isBark : true,
    isScratech : true,
}