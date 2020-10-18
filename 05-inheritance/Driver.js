"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var myShape = new Shape_1.Shape(25, 100);
console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(50, 50, 100);
console.log(myCircle.getInfo());
