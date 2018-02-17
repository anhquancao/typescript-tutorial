var globalNum = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.numVal = 13;
    }
    Numbers.prototype.storeNum = function () {
        var localNum = 14;
    };
    Numbers.sval = 10;
    return Numbers;
}());
console.log("Global Num: " + globalNum);
console.log(Numbers.sval);
var obj2 = new Numbers();
console.log(obj2.numVal);
