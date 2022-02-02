const obj1 = {firstname: "Petar", lastname: "Peric", age: 30};
const obj2 = '{"firstname":"Ivan", "lastname":"Ivanovic", "age":30}'

const JSONobject = JSON.stringify(obj1);
console.log(JSONobject);

const JSobject = JSON.parse(obj2);
console.log(JSobject);

const carsJS=[1, 2, 3, 4];
const carsJSON = '[1, 2, 3, 4]';

const JScars = JSON.parse(carsJSON);
JScars.forEach(element => console.log(element));
console.log(JScars);

const JSONcars= JSON.stringify(carsJS);
console.log(JSONcars);