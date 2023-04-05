"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "Female";
    Gender["MALE"] = "Male";
    Gender["OTHERS"] = "Others";
})(Gender = exports.Gender || (exports.Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(name, gender, birthday, email, phoneNumber) {
        this.gender = Gender.OTHERS;
        this.name = name;
        this.gender = Gender.OTHERS;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
exports.Employee = Employee;
