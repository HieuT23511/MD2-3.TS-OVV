import {Employee} from "./Employee";

export class ManagerEmployee {
    ManagerEmployee: Employee[] = [];

    constructor() {
    }

    getInfo(employee: Employee) {
        return employee;
    }

    addEmployee(newEpl: Employee) {
        this.ManagerEmployee.push(newEpl)
    }

    // findEmployee(employee: Employee) {
    //     let i = -1;
    //     this.ManagerEmployee.forEach(
    //         (employee1, index) => {
    //             if (employee1 == employee) {
    //                 i = index;
    //             }
    //         }
    //     )
    //     return i;
    // }
    //
    // deleteEmployee(deleteEpl: Employee) {
    //     let indexEmployeeDelete = this.findEmployee(deleteEpl);
    //     if(indexEmployeeDelete !== -1){
    //         this.ManagerEmployee.splice(indexEmployeeDelete,1)
    //     } else {
    //         throw new Error(`This employee has existed`)
    //     }
    // }
    deleteEmployee(index: number) {
        if (index >= 0 && index < this.ManagerEmployee.length) {
            this.ManagerEmployee.splice(index, 1)
        } else {
            throw new Error(`Delete error. pls enter again index < list Employee`)
        }

    }

    showListEmployee() {
        return this.ManagerEmployee;
    }
}

