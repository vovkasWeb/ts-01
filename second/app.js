"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname} 0_0`;
}
const user = {
    firstname: 'vova',
    surname: 'Orlovsky',
    city: 'Dnipro',
    age: 21,
};
console.log(getFullName(user));
