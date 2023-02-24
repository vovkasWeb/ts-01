"use strict";
const n = null;
const n1 = null;
function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: "вася"
        };
    }
}
const user = getUser();
const n55 = user === null || user === void 0 ? void 0 : user.name;
