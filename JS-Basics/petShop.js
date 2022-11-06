function petShop(input){
    let numberDogFood = Number(input[0] * 2.50);
    let numberCatFood = Number(input[1] * 4);
    let sum = numberDogFood + numberCatFood;
    console.log(`${sum} lv.`);
}
petShop(["13", "9"]);