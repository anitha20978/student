let numbers =[10,20,30,40];
let sum = numbers.reduce(function(total, num) {
    return total + num;
});
console.log(sum);