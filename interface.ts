interface IPerson {
    firstName: string;
    lastName: string;
    sayHi: () => string;
}

let customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: () => "hi there",
};

console.log("Customer Object");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi);

interface RunOptions {
    program: string;
    commandLine: string[] | string | (() => string);
}

//commandline as string
var options: RunOptions = { program: "test1", commandLine: "Hello" };
console.log(options.commandLine);

//commandline as a string array
options = { program: "test1", commandLine: ["Hello", "World"] };
console.log(options.commandLine[0]);
console.log(options.commandLine[1]);

//commandline as a function expression
options = {
    program: "test1",
    commandLine: () => {
        return "**Hello World**";
    },
};

var fn: any = options.commandLine;
console.log(fn());

/**
 * Interface and Array
 */
// key is number and value is string
interface NameList {
    [index: number]: string;
}

let list2: NameList = ["1", "2"];

// key is string and value is number
interface Age {
    [index: string]: number;
}

let ages: Age = {};
ages["a"] = 1;
console.log(ages);

/**
 * Inheritance
 */
interface Person {
    age: number;
}

interface Musician extends Person {
    instrument: string;
}

let drummer = <Musician>{};
drummer.age = 27;
drummer.instrument = "drum";

/**
 * Multiple interface inheritance
 */

interface IParent1 {
    v1: number;
}

interface IParent2 {
    v2: number;
}

interface Child extends IParent1, IParent2 {}
var IObj: Child = { v1: 12, v2: 23 };
console.log(IObj.v1);
