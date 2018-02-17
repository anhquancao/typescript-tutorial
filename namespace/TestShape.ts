/// <reference path="Circle.ts" />
/// <reference path="IShape.ts" />
/// <reference path="Rectangle.ts" />

function drawAllShapes(shape: Drawing.IShape) {
    shape.draw();
}

drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Rectangle());
