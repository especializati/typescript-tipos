let id: (number | string);

id = 1;
console.log(id);

id = '2d72caf4-0219-11ed-b939-0242ac120002';
// id = true;
console.log(id);

// function findById(id: (string | number)): (string | number) {
//   return id;
// }
const findById = (id: (string | number)): (string | number) => id;
console.log(findById(id));
