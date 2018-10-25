var num = 1;
var bool = true;
var str = "bob";
var arr = [1, 2, 3];
function plus(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
plus(1, 3);
function MakeObj(name, age) {
    this.name = name;
    this.age = age;
}
var obj = new MakeObj("laoxie", 19);
var MakeObj2 = /** @class */ (function () {
    function MakeObj2(name, age) {
        this.name = name;
        this.age = age;
    }
    return MakeObj2;
}());
//plus('1',3);
