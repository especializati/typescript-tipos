"use strict";
const showLog = (message) => {
    console.log(message);
    return;
};
showLog('test void');
function showLogAndException(message) {
    console.log(message);
    throw new Error("Example never");
}
showLogAndException('test never');
