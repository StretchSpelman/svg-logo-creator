const Shape=require("./shape");

class Circle extends Shape{
    constructor(text,width,height,textColor,shapeColor){
        super(text,width,height,textColor,shapeColor);
    }

    render() {
        
        let centerX = this.width / 2;
        let centerY = this.height / 2;
        
        let radius = Math.min(centerX, centerY);
    
        return `<svg width="${this.width}" height="${this.height}">
            <circle cx="${centerX}" cy="${centerY}" r="${radius}" stroke="black" stroke-width="2" fill="${this.shapeColor}" />
            <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${this.textColor}" font-size="30" font-family="Arial">${this.text}</text>
        </svg>`;
    }
}
module.exports=Circle