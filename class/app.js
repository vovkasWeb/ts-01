"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User('vovka');
console.log(user);
user.name = 'slavik';
console.log(user);
