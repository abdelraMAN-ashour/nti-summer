import { Shape } from './Shape.js';
class Square extends Shape{
    constructor(type,l){
        super(type);
        this.l=l;
    }
    findArea(){
        this.area=this.l*this.l;
    }
    findParameter(){
        this.parameter=this.l*4;
    }
    toString(){
        return `the shape is square and it's area ${this.area} and it's parameter ${this.parameter}`;
    }
}
class rectangle extends Square{
    constructor(type,l,w){
        super(type,l);
        this.w=w;
    }
    findArea(){
        this.area=this.l*this.w;
    }
    findParameter(){
        this.parameter=this.l*2+this.w*2;
    }
    toString(){
        return `the rectangle is square and it's area ${this.area} and it's parameter ${this.parameter}`;
    }
}
class circle extends Shape{
    constructor(type,r){
        super(type);
        this.r=r;
    }
    findArea(){
        this.area=this.r*this.r*3.14;
    }
    findParameter(){
        this.parameter=this.r*2*3.14;
    }
    toString(){
        return `the circle is square and it's area ${this.area} and it's parameter ${this.parameter}`;
    }
}
// let o=new Shape();
let s=new rectangle(4,8,4);
s.findArea();
console.log(s.area);
s.findParameter()
console.log(s.parameter);
console.log(s.toString());