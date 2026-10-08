let age = 15;
try{
    if (age < 18) {
    throw new Error("Age must be 18 or older");
}
console.log("Eligible");

}catch(error){
    console.log(error.message);
}
