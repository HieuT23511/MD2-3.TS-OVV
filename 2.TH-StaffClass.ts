class Staff {
    public name: string;
    public email: string;
    public age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }
    getEmail(){
        return this.email;
    }
    setEmail(email:string){
        this.email = email;
    }
    getAge(){
        return this.age;
    }
    setAge(age:number){
        this.age = age;
    }
}
let staff1 = new Staff('HieuGG','hieugg@gmail.com',28);
console.log(staff1.getName());
console.log(staff1.getAge());
console.log(staff1.getEmail());
staff1.setName('HieuT');
staff1.setEmail('hieut@gmail.com');
staff1.setAge(27)
console.log(staff1);