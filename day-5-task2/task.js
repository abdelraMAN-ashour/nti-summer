var onlyOneHello = /** @class */ (function () {
    // private isDone=false;
    function onlyOneHello() {
        console.log("i will say hello only once");
    }
    onlyOneHello.getHello = function () {
        if (!this.hello) {
            this.hello = new onlyOneHello();
        }
        else {
            console.log("i wont say it again");
        }
        return onlyOneHello.hello;
    };
    return onlyOneHello;
}());
var one = onlyOneHello.getHello();
var two = onlyOneHello.getHello();
