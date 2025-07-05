class onlyOneHello{
    private static hello:onlyOneHello;
    private constructor() {
        console.log("i will say hello only once");
    }  
    public static getHello(){
        if(!this.hello){
            this.hello=new onlyOneHello();
        }
        else {
            console.log("i wont say it again");
        }
        return onlyOneHello.hello;
    }
}

let one=onlyOneHello.getHello();
let two=onlyOneHello.getHello();