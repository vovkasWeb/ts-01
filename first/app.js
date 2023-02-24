"use strict";
let revenue = 1000;
let bonus = 500;
let c = 'str';
let d = true;
let res = revenue + bonus;
console.log(res);
function getFullName(firstname, surname) {
    // if(typeof firstname !=='string'){
    // 	throw new Error('!!!!!');
    // }
    return `${firstname} ${surname}`;
}
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
console.log(getFullName('vova', 'orlovsky'));
