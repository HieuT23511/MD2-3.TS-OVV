"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerEmployee = void 0;
var ManagerEmployee = /** @class */ (function () {
    function ManagerEmployee() {
        this.ManagerEmployee = [];
    }
    ManagerEmployee.prototype.getInfo = function (employee) {
        return employee;
    };
    ManagerEmployee.prototype.addEmployee = function (newEpl) {
        this.ManagerEmployee.push(newEpl);
    };
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
    ManagerEmployee.prototype.deleteEmployee = function (index) {
        if (index >= 0 && index < this.ManagerEmployee.length) {
            this.ManagerEmployee.splice(index, 1);
        }
        else {
            throw new Error("Delete error. pls enter again index < list Employee");
        }
    };
    ManagerEmployee.prototype.showListEmployee = function () {
        return this.ManagerEmployee;
    };
    return ManagerEmployee;
}());
exports.ManagerEmployee = ManagerEmployee;
