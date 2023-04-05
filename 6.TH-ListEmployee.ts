enum Gender {
    FEMALE,
    MALE,
    OTHERS
}

class Employee {
    name: string;
    gender: Gender = Gender.OTHERS;
    birthday?: Date;
    email: string;
    phoneNumber: string;

    constructor(name: string, gender: Gender, birthday: Date, email: string, phoneNumber: string) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
let employeeList: Employee[] = [];
let employeee1 = new Employee('Chu Trong Hieu',Gender.MALE, new Date("1995-03-14"),'hieuct.work@gmail.com','0866511558')
let employeee2 = new Employee('Chu Tron Hieu',Gender.FEMALE, new Date("1996-03-14"),'hieuct1.work@gmail.com','086651156')
let employeee3 = new Employee('Chu Tro Hieu',Gender.OTHERS, new Date("1997-03-14"),'hieuct2.work@gmail.com','0866511554')
employeeList.push(employeee1,employeee2,employeee3);
employeeList.forEach((employee:Employee) =>{console.log(employee)});

