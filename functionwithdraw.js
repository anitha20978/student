function withdraw(balance, amount){
    if(amount <= balance){
        return"Withdrawal Successful";
    }
    return "Insufficient Balance";
}
console.log(withdraw(10000, 3000));