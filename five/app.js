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
