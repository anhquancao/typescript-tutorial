/**
 *  Union Type Variable
 */
var val;
val = 12;
console.log("numeric value of val: " + val);
val = "This is a string";
console.log("string value of val: " + val);
function disp(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i = void 0;
        for (i in name) {
            console.log(name[i]);
        }
    }
}
disp("Quan");
console.log("Printing names array....");
disp(["Mark", "Tom", "Mary", "John"]);
