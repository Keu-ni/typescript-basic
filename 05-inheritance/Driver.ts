import { Shape } from './Shape';
import { Circle } from './Circle';

let myShape = new Shape(25, 100);
console.log(myShape.getInfo());

let myCircle = new Circle(50, 50, 100);
console.log(myCircle.getInfo());