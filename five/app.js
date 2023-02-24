"use strict";
const arr = ['sdf', 1];
function logId(id) {
    if (typeof id === 'string') {
        console.log(id);
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ('a' in obj) {
        obj.a;
    }
    else {
        obj.b;
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
    }
    else {
        console.log(a);
    }
}
logId(1);
logId('sfsfgg');
logId(true);
function fetchWithAuyt(url, method) {
    return 1;
}
fetchWithAuyt('s', 'post');
fetchWithAuyt('s', 'get');
const user = {
    login: '@rfrr',
    password: '1'
};
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
multiply(5);
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
}
var PaymantStatus;
(function (PaymantStatus) {
    PaymantStatus["Success"] = "success";
    PaymantStatus["Failed"] = "failed";
})(PaymantStatus || (PaymantStatus = {}));
