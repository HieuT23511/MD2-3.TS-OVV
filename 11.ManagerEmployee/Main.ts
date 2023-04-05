import {Employee, Gender} from "./Employee";
import {ManagerEmployee} from "./Manager-Employee";

let employee1 = new Employee('Chu Trong Hieu',Gender.MALE, new Date("1995-03-14"),'hieuct.work@gmail.com');
let employee2 = new Employee('Chu Tron Hieu',Gender.FEMALE, new Date("1996-03-14"),'hieuct1.work@gmail.com');
let employee3 = new Employee('Chu Tro Hieu',Gender.OTHERS, new Date("1997-03-14"),'hieuct2.work@gmail.com');
let managerEpl = new ManagerEmployee;
managerEpl.addEmployee(employee1);
managerEpl.addEmployee(employee2);
managerEpl.addEmployee(employee3);
console.log(managerEpl.getInfo(employee1));
managerEpl.deleteEmployee(employee1);
managerEpl.showListEmployee();