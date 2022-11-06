function foodDelivery(input){
    let chickenMenu = Number(input[0] * 10.35);
    let fishMenu = Number(input[1] * 12.40 );
    let vegMenu = Number(input[2] * 8.15);
    let delivery = 2.50;
    let totalSum = chickenMenu + fishMenu + vegMenu;
    let dessert = totalSum * 0.20;
    let totalSumWithDelivery = totalSum + dessert + delivery;
    console.log(totalSumWithDelivery);
}
foodDelivery(["2", "4","3"]);