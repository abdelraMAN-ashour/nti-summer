export class Shape{
    constructor(sides){
        if(this.constructor==Shape){
            throw "invaliad object";
        }
        this.sides=sides;
        this.area;
        this.parameter;
    }
    findArea(){
    }
    findParameter(){
    }
    toString(){
    }
}