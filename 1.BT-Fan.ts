enum speed {
    SLOW = 1,
    MEDIUM,
    FAST
}

class Fan {
    private speed: number;
    private on: boolean;
    private radius: number;
    private color: string;

    constructor() {
        this.speed = speed.SLOW;
        this.on = false;
        this.color = 'blue';
        this.radius = 5;
    }

    getStatus(fan: string) {
        if (this.on) {
            return console.log(`${fan} is on`);
        } else {
            return console.log(`${fan} is off`);
        }
    }

    // getSpeed(){
    //   return this.speed;
    // }
    // getRadius(){
    //   return this.radius;
    // }
    // getColor(){
    //   return this.color;
    // }
    setSpeed(speedF: number) {
        this.speed = speedF;
    }

    setRadius(radiusF: number) {
        this.radius = radiusF;
    }

    setColor(colorF: string) {
        this.color = colorF;
    }

    setOn(booleanF: boolean) {
        this.on = booleanF;
    }
}

let fan1 = new Fan;
let fan2 = new Fan;
fan1.setSpeed(speed.FAST);
fan1.setRadius(10);
fan1.setColor('yellow');
fan1.setOn(true);
console.log(fan1);
fan1.getStatus('fan1');
fan2.setSpeed(speed.MEDIUM);
fan2.setRadius(5);
fan2.setColor('blue');
fan2.setOn(false);
console.log(fan2);
fan2.getStatus('fan2');



