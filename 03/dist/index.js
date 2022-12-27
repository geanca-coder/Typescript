"use strict";
// class User
// {
//     //they are automatically public by default
//     public email : string
//     public name : string
//     private readonly city : string = ''
//     constructor(email : string, name : string ){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name, userId, _courseCount = 1) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = _courseCount;
        this.city = 'SJO';
    }
    get getAppleEmail() {
        return `email: ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseCount) {
        if (courseCount <= 1) {
            throw new Error('Course count shold be more than 1');
        }
        this._courseCount = courseCount;
    }
    deleteToken() {
        console.log('Token deleted');
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        //private mother class values cannot be accesed, the alternative is to make it protected so child classes can 
        //access it
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const geancarl = new User('geancarlo.com', 'geancarlo', 'snbsjkdl');
