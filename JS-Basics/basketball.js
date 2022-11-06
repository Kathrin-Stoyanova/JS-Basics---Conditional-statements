function basketballEquipment(input){
    let annualTax = Number(input[0]);
    let sneakers = annualTax - (annualTax * 0.4);
    let outfit = sneakers - (sneakers * 0.2);
    let basketballBall = outfit * 0.25;
    let accessories = basketballBall * 0.20;
    let totalValueOfEquipment = annualTax + sneakers + outfit + basketballBall + accessories;
    console.log(totalValueOfEquipment);
}
basketballEquipment(["365 "]);