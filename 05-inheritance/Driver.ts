import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(25, 100);
console.log(myShape.getInfo());

let myCircle = new Circle(50, 50, 100);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 25, 75);
console.log(myRectangle.getInfo());