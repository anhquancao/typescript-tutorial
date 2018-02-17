class Car {
    engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }

    disp(): void {
        console.log("Engine: " + this.engine);
    }
}

let car = new Car("Engine 1");
car.disp();

class Shape {
    area: number;
    constructor(area: number) {
        this.area = area;
    }
}

class Circle extends Shape {
    disp(): void {
        console.log("Circle's area: " + this.area);
    }
}

let circle = new Circle(12);
circle.disp();

/**
 * Class Overriding
 */
class PrinterClass {
    private pr: string;
    doPrint(): void {
        console.log("doPrint() from Parent called…");
    }
}

class StringPrinter extends PrinterClass {
    doPrint(): void {
        super.doPrint();
        console.log("doPrint() is printing a string…");
    }
}

let printer = new StringPrinter();
printer.doPrint();

/**
 * instanceof operator
 */
const isStringPrinter = printer instanceof StringPrinter;
const isPrinter = printer instanceof PrinterClass;
console.log("isStringPrinter: " + isStringPrinter);
console.log("isPrinter: " + isPrinter);

/**
 * Class implements interface
 */
interface Loan {
    interest: number;
}

class AgriLoan implements Loan {
    interest: number;
    rebate: number;

    constructor(interest: number, rebate: number) {
        this.interest = interest;
        this.rebate = rebate;
    }
}

let loan = new AgriLoan(10, 1);
console.log("Interest: " + loan.interest + " Rebate: " + loan.rebate);
