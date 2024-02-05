const Shape = require("./shape");

class Square extends Shape {
    constructor(text, width, height, textColor, shapeColor) {
        super(text, width, height, textColor, shapeColor);
    }

    render() {
        return `<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="${this.shapeColor}" />
            <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${this.textColor}" font-size="60" font-family="Arial">${this.text}</text>
        </svg>`;
    }
}

module.exports = Square;