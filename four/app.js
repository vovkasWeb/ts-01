"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'платеж успешнвый',
    statusCode: StatusCode.SUCCESS,
};
// 1 - успех
// 2  -в процессе
// 3 - отклонен
if (res.statusCode === StatusCode.SUCCESS) {
}
function action(status) {
}
action(StatusCode.SUCCESS);
action(1);
function compute() {
    return 3;
}
const res2 = 1 /* Roles.ADMIN */;

