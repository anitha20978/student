/*
for (let i = 1; i <= 5; i++){

  console.log(i);
}

let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);
let fruits = ["Apple", "Banana", "Mango"];
for(let fruit of fruits) {
    console.log(fruit);
}*/

let student = {
    name : "chandan",
    age : 29,
    course : "Java script"
};
for(let key in student) {
    console.log(key, ":", student[key]);
}