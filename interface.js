var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "hi there"; }
};
console.log("Customer Object");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi);
//commandline as string
var options = { program: "test1", commandLine: "Hello" };
console.log(options.commandLine);
//commandline as a string array
options = { program: "test1", commandLine: ["Hello", "World"] };
console.log(options.commandLine[0]);
console.log(options.commandLine[1]);
//commandline as a function expression
options = {
    program: "test1",
    commandLine: function () {
        return "**Hello World**";
    }
};
var fn = options.commandLine;
console.log(fn());
var list2 = ["1", "2"];
var ages = {};
ages["a"] = 1;
console.log(ages);
var drummer = {};
drummer.age = 27;
drummer.instrument = "drum";
var IObj = { v1: 12, v2: 23 };
console.log(IObj.v1);
