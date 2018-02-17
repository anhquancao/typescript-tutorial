var globalNum = 12;
class Numbers {
    numVal = 13;
    static sval = 10;
    storeNum(): void {
        var localNum = 14;
    }
}

console.log("Global Num: " + globalNum);
console.log(Numbers.sval);

var obj2 = new Numbers();
console.log(obj2.numVal);
