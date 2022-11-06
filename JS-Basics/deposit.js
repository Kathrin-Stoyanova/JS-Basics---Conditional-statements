function deposit(input){
    let depositSum = Number(input[0]);
    let depositLength = Number(input[1]);
    let annualRate = Number(input[2] / 100);
    let totalSum = depositSum + depositLength * ((depositSum * annualRate) / 12);
    console.log(totalSum);
}
deposit(["200","3","5.7"]);