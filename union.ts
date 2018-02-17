/**
 *  Union Type Variable
 */
let val: number | string;
val = 12;
console.log("numeric value of val: " + val);
val = "This is a string";
console.log("string value of val: " + val);

function disp(name: string | string[]) {
    if (typeof name == "string") {
        console.log(name);
    } else {
        let i;
        for (i in name) {
            console.log(name[i]);
        }
    }
}
disp("Quan");
console.log("Printing names array....");
disp(["Mark", "Tom", "Mary", "John"]);
