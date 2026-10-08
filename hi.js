let a = 10;
let b = 20;
console.log("10 == '10' :", a == "10");
console.log("10 === '10' :", a === "10");
console.log("10 != '10' :", a != "10");
console.log("10 != 20 :", a != "b");
console.log("10 !== '10' :", a !== "10");
console.log("20 > 10 :", b > a);
console.log("10 < 20 :", a < b);
let age = 25;
let hasLicense = true;
console.log(age >= 18 && hasLicense);
let age1 = 16;
let hasPermission = true;
console.log(age >= 18 || hasPermission);
let isLoggedIn = true;
console.log(!isLoggedIn);
let marks = 75;
if(marks >= 90){
    console.log("A+");
}else if (marks >= 75){
    console.log("A");
}else if (marks >= 60){
    console.log("B");
}else{
    console.log("C");
}