var Fan = /** @class */ (function () {
    function Fan() {
        this.SLOW = 1;
        this.MEDIUM = 2;
        this.FAST = 3;
        this.speed = 1;
        this.on = false;
        this.color = 'blue';
        this.radius = 5;
    }
    Fan.prototype.getStatus = function (fan) {
        if (this.on) {
            return console.log("".concat(fan, " is on"));
        }
        else {
            return console.log("".concat(fan, " is off"));
        }
    };
    // getSpeed(){
    //   return this.speed;
    // }
    // getRadius(){
    //   return this.radius;
    // }
    // getColor(){
    //   return this.color;
    // }
    Fan.prototype.setSpeed = function (speedF) {
        this.speed = speedF;
    };
    Fan.prototype.setRadius = function (radiusF) {
        this.radius = radiusF;
    };
    Fan.prototype.setColor = function (colorF) {
        this.color = colorF;
    };
    Fan.prototype.setOn = function (booleanF) {
        this.on = booleanF;
    };
    return Fan;
}());
var fan1 = new Fan;
var fan2 = new Fan;
fan1.setSpeed(fan1.FAST);
fan1.setRadius(10);
fan1.setColor('yellow');
fan1.setOn(true);
console.log(fan1);
fan1.getStatus('fan1');
fan2.setSpeed(fan2.MEDIUM);
fan2.setRadius(5);
fan2.setColor('blue');
fan2.setOn(false);
console.log(fan2);
fan2.getStatus('fan2');
