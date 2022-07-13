const showLog = (message: string): void => {
  console.log(message);
  return;
}
showLog('test void');

function showLogAndException(message: string): never {
  console.log(message);

  throw new Error("Example never");
}
showLogAndException('test never');
