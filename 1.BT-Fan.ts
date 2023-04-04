class Fan {
  SLOW: number = 1;
  MEDIUM: number = 2;
  FAST: number = 3;
  private speed: number;
  private on: boolean;
  private radius: number;
  private color: string;
  constructor() {
    this.speed = 1;
    this.on = false;
    this.color = 'blue';
    this.radius = 5;
  }
  getStatus(fan:string){
    if(this.on){
     return console.log(`${fan} is on`);
    }
    else {
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
  setSpeed(speedF:number){
    this.speed = speedF;
  }
  setRadius(radiusF:number){
    this.radius = radiusF;
  }
  setColor(colorF:string){
    this.color = colorF;
  }
  setOn(booleanF:boolean){
    this.on = booleanF;
  }
}
let fan1 = new Fan;
let fan2 = new Fan;
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



