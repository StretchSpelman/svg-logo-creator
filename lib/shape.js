class Shape{
    constructor(text,width,height,textColor,shapeColor){
        this.width=width;
        this.height=height;
        this.textColor=textColor;
        this.shapeColor=shapeColor;
        this.text=text;
    }

    setColor(color){
        this.shapeColor=color;
    }

    render(){
        throw new Error("Not implemented");
    }
}


module.exports=Shape;