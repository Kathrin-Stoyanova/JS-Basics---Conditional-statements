function materials(input){
    let numberOfPens = Number(input[0] * 5.80);
    let numberOfMarkers = Number(input[1] * 7.20);
    let cleaner = Number(input[2] * 1.20);
    let discount = Number(input[3] / 100);
    let totalSum = (numberOfPens + numberOfMarkers + cleaner);
    let totalSumWithDiscount = totalSum - (totalSum * discount);
    console.log(totalSumWithDiscount);
}
materials(["2","3","4","25"]);