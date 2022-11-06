function painting(input){
    let numberOfNylon = Number(input[0] * 1.50);
    let extraNylon = 3;
    let numberOfPaint = Number(input[1] * 14.50);
    let extraPaint = (numberOfPaint * 0.1);
    let paintThinner = Number(input[2] * 5);
    let numberOfHours = Number(input[3]);
    let bags = 0.40;
    let totalSumOfMaterials = numberOfNylon + extraNylon + numberOfPaint + extraPaint + paintThinner + bags;
    let craftsmanPay = (totalSumOfMaterials * 0.3) * numberOfHours;
    let totalSum = totalSumOfMaterials + craftsmanPay;
    console.log(totalSum);
}

painting(["10","11","4","8"]);