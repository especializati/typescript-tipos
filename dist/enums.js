"use strict";
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["Published"] = 0] = "Published";
    StatusEnum[StatusEnum["Draft"] = 1] = "Draft";
})(StatusEnum || (StatusEnum = {}));
console.log(StatusEnum);
function changeStatus(status) {
    console.log(status);
}
changeStatus(StatusEnum.Published);
var OptionsEnum;
(function (OptionsEnum) {
    OptionsEnum["op1"] = "OP1";
    OptionsEnum["op2"] = "OP2";
    OptionsEnum[OptionsEnum["op3"] = 12] = "op3";
})(OptionsEnum || (OptionsEnum = {}));
const changeOptions = (option) => console.log(option);
changeOptions(OptionsEnum.op2);
