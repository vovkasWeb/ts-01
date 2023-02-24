"use strict";
let a = 5;
let b = a.toString();
let e = new String(a).valueOf();
// let f: boolean = new String(a).valueOf();
let c = 'dffrf';
let d = parseInt(c);
const user = {
    name: "Вася",
    email: 'vasili@fghgh',
    login: 'vasia'
};
const admin = Object.assign(Object.assign({}, user), { role: 1 });
function userToAdmin(user) {
    return {
        name: user.login,
        role: 1
    };
}
