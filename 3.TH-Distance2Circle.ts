class Circle {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
}
function distance (circle1:Circle,circle2:Circle, d:number){
    return Math.sqrt(Math.pow((circle1.radius-circle2.radius),2)+Math.pow(d,2));
}
let circle1 = new Circle(9);
let circle2 = new Circle(5);
console.log(distance(circle1,circle2,24))