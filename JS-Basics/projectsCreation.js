function projectsCreation(input){
    let name = input[0];
    let numberOfProjects = Number(input[1]);
    let sum = numberOfProjects * 3;
    console.log(`The architect ${name} will need ${sum} hours to complete ${numberOfProjects} project/s.`);
}
projectsCreation(["Kathrin", 7]);