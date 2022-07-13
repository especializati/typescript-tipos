// type alias_name = existingType;
type ID = string | number;

let id: ID = 'dfsd';
console.log(id);

function findById(id: ID): ID {
  return id;
}
console.log(findById(1));

export {}
