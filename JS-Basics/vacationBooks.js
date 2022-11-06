function vacationBooks(input){
    let numberOfPages = Number(input[0]);
    let pages = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let totalReading = numberOfPages / pages;
    let numberOfHours = totalReading / numberOfDays;
    console.log(numberOfHours);
}
vacationBooks(["212","20","2"]);