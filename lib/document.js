const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");

const createSvg = (shape, text, width, height, textColor, shapeColor) => {
    let newShape;
    switch (shape) {
        case "Triangle":
            newShape = new Triangle(text, width, height, textColor, shapeColor);
            break;

        case "Square":
            newShape = new Square(text, width, height, textColor, shapeColor);
            break;

        case "Circle":
            newShape = new Circle(text, width, height, textColor, shapeColor);
            break;
        default:
            console.error("Unkown shape");
    }
    return newShape.render();
};

module.exports = {createSvg};