export class Actor {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    birthdate: Date;

    constructor(id: number, firstName: string, lastName: string, gender: string, birthDate: Date) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthdate = birthDate;
    }

}
