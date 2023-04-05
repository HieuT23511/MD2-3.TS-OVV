export enum Gender {
    FEMALE = 'Female',
    MALE = 'Male',
    OTHERS = 'Others'
}

export class Employee {
    name: string;
    gender: Gender = Gender.OTHERS;
    birthday: Date;
    email: string;
    phoneNumber: string;

    constructor(name: string, gender: Gender, birthday: Date, email: string, phoneNumber ?: string) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}