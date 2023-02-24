"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname} 0_0`;
}
const user = {
    firstname: 'Vova',
    surname: 'Orlovsky',
    city: 'Dnipro',
    age: 21,
    skills: {
        dev: true,
        devops: true,
    }
};
console.log(getFullName(user));
let info;
