/// <reference path="IShape.ts" />
var Drawing;
(function (Drawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("Circle is drawn");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
/// <reference path="IShape.ts" />
var Drawing;
(function (Drawing) {
    var Rectangle = /** @class */ (function () {
        function Rectangle() {
        }
        Rectangle.prototype.draw = function () {
            console.log("Rect");
        };
        return Rectangle;
    }());
    Drawing.Rectangle = Rectangle;
})(Drawing || (Drawing = {}));
/// <reference path="Circle.ts" />
/// <reference path="IShape.ts" />
/// <reference path="Rectangle.ts" />
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Rectangle());
