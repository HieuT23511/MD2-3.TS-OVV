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
    ManagerEmployee.prototype.findEmployee = function (employee) {
        var i = -1;
        this.ManagerEmployee.forEach(function (employee1, index) {
            if (employee1 == employee) {
                i = index;
            }
        });
        return i;
    };
    ManagerEmployee.prototype.deleteEmployee = function (deleteEpl) {
        var indexEmployeeDelete = this.findEmployee(deleteEpl);
        if (indexEmployeeDelete !== -1) {
            this.ManagerEmployee.splice(indexEmployeeDelete, 1);
        }
        else {
            throw new Error("This employee has existed");
        }
    };
    ManagerEmployee.prototype.showListEmployee = function () {
        this.ManagerEmployee.forEach(function (employee) {
            console.log(employee);
        });
    };
    return ManagerEmployee;
}());
exports.ManagerEmployee = ManagerEmployee;
