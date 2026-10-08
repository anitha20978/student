//stringify:is used to convert javascript object into a json file
let student = {
    name:"anitha",
    age:20,
    course:"JavaScript"
};

let jsonData = JSON.stringify(student);
console.log(jsonData);
let student1 = JSON.parse(jsonData);
console.log(student1);