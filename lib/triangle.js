const Shape= require("./shape");

class Triangle extends Shape{
    constructor(text,width,height,textColor,shapeColor){
        super(text,width,height,textColor,shapeColor);
    }

    render() {
        const midpoint = parseInt(this.width) / 2;
        return `<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,${this.height} ${midpoint},0 ${this.width}, ${this.height}" fill="${this.shapeColor}" />
            <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${this.textColor}" font-size="30" font-family="Arial">${this.text}</text>
        </svg>`;
      }
}

module.exports=Triangle