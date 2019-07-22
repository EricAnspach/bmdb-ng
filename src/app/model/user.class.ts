export class User {
    id: number;
    userName: string;
    password: string;
    isAdmin: boolean;

    constructor(id: number = 0, userName: string = '', password: string = '', isAdmin: boolean = false) {
             this.id = id;
             this.userName = userName;
             this.password = password;
             this.isAdmin = isAdmin;
         }
}