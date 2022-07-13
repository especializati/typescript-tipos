enum StatusEnum {
  Published,
  Draft
}
console.log(StatusEnum);

function changeStatus(status: StatusEnum) {
  console.log(status);
}
changeStatus(StatusEnum.Published);

enum OptionsEnum {
  op1 = 'OP1',
  op2 = 'OP2',
  op3 = 12,
}
const changeOptions = (option: OptionsEnum) => console.log(option)
changeOptions(OptionsEnum.op2);
