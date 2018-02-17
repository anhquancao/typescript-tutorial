/**
 * Optional Params
 * A parameter can be marked optional by appending a question mark to its name
 */
function displayDetails(id, name, mailId) {
    console.log("ID: " + id);
    console.log("Name: " + name);
    if (mailId != undefined) {
        console.log("Email ID" + mailId);
    }
}
displayDetails(123, "John");
displayDetails(111, "mary", "mary@xyz.com");
/**
 *  Rest Param
 */
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
console.log(addNumbers(1, 2, 3));
console.log(addNumbers(1, 2, 3, 4, 5, 6));
/**
 * Default params
 * A parameter cannot be declared optional and default at the same time
 */
function calculateDiscount(price, rate) {
    if (rate === void 0) { rate = 0.5; }
    var discount = price * rate;
    return discount;
}
console.log("discount: " + calculateDiscount(1000));
console.log("discount: " + calculateDiscount(1000, 0.3));
/**
 * Variables can be assigned an anonymous function.
 * Such an expression is called a function expression.
 *
 * Function Expression and Function Declaration ─ Are they synonymous?
 *
 * The fundamental difference between the two is that,
 * function declarations are parsed before their execution.
 * On the other hand, function expressions are parsed only
 * when the script engine encounters it during execution.
 *
 * When the JavaScript parser sees a function in the main code flow,
 * it assumes Function Declaration. When a function comes as a part of a statement,
 * it is a Function Expression.
 */
var msg = function () {
    return "hello world";
};
/**
 * the function invokes itself using a pair of parentheses ()
 */
(function () {
    var x = "Hello!!";
    console.log(x);
})();
/**
 * Lambda Expression
 * Anonymous function expression that points to a single line of code
 */
var foo = function (x) { return x + 10; };
console.log(foo(100));
/**
 * Lambda Statement
 * Anonymous function declaration that points to a block of code.
 */
var bar = function (x) {
    x = 10 + x;
    console.log(x);
};
/**
 * Parameter type Inference
 * It is not mandatory to specify the data type of a parameter.
 * In such a case the data type of the parameter is any.
 */
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " is numeric");
    }
    else if (typeof x == "string") {
        console.log(x + " is a string");
    }
};
func(12);
func("Tom");
/**
 * Optional parentheses for a single parameter
 */
var display = function (x) {
    console.log("The function got " + x);
};
display(12);
function disp(x, y) {
    console.log(x);
    if (y) {
        console.log(y);
    }
}
disp("abc");
disp(1, "xyz");
