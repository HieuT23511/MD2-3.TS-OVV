class Circle {
    public color: string;
    public radius: number;
    constructor(color:string, radius:number){
        this.color = color;
        this.radius = radius;
    }
}
let circleList : Circle[]=[];
let circle1 = new Circle('yellow',10);
let circle2 = new Circle('green',15);
let circle3 = new Circle('blue',20);
circleList.push(circle1,circle2,circle3);
function showCircle(circle:Circle){
    console.log(`This circle have color: ${circle.color} and Radius: ${circle.radius}`);
}
circleList.forEach(showCircle);
