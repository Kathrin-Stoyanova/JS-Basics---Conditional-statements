function isBigger(input){
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    if (numberOne > numberTwo){
        console.log(numberOne);
    } else {
        console.log(numberTwo);
    }
}
isBigger(["5", "3"]);