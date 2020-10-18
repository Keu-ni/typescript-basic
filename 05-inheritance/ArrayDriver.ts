import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(25, 100);
let myCircle = new Circle(50, 50, 100);
let myRectangle = new Rectangle(0, 0, 25, 75);


// declare an array of shapes
let theFigure: Shape[] = [];

// add the Shapes an the array
theFigure.push(myShape);
theFigure.push(myCircle);
theFigure.push(myRectangle);

for (const temFigure of theFigure) {
    console.log(temFigure.getInfo());
}
