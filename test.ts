var num: Number = 1;
var bool: boolean = true;
var str: string = "bob";
let arr: number[] = [1, 2, 3];
function plus(num1, num2: Number) {
    let sum = num1 + num2;
    return sum;
}
plus(1, 3);
function MakeObj(name, age) {
    this.name = name;
    this.age = age
}

var obj = new MakeObj("laoxie", 19);
class MakeObj2 {
    name: string;
    age:Number;
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}
//plus('1',3);