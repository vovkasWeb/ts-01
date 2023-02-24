"use strict";
function dumpError() {
    while (true) { }
}
function rec() {
    return rec();
}
// const a: never =null;
const a = undefined;
// function processAction(action: paymentAction){
// 	switch(action){
// 		case 'refund':
// 			break;
// 		case 'checkout':
// 			break;
// 		default:
// 			const _: never = action;
// 			throw new Error('нет такого action');
// 	}
// }
function genereateError(message) {
    throw new Error(message);
}
function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    genereateError('error type');
}
console.log(isString(122));
