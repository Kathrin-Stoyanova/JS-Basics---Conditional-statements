function aquarium(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]) / 100;
    let aquariumVolume = length * width * height;
    let volumeInLiters = aquariumVolume / 1000;
    let litersNeeded = volumeInLiters - (volumeInLiters * percent);
    console.log(litersNeeded);
}
  
aquarium(["85","75","47","17"]);