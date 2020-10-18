"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(25, 100);
var myCircle = new Circle_1.Circle(50, 50, 100);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 25, 75);
// declare an array of shapes
var theFigure = [];
// add the Shapes an the array
theFigure.push(myShape);
theFigure.push(myCircle);
theFigure.push(myRectangle);
for (var _i = 0, theFigure_1 = theFigure; _i < theFigure_1.length; _i++) {
    var temFigure = theFigure_1[_i];
    console.log(temFigure.getInfo());
}
