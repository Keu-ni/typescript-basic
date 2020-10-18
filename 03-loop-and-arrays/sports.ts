let sportsOne: string[] = ["Golf", "Cricket", "Baseball", "Tennis"];

/*
for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
*/

// Let's use the simplied for loop

for (const temSport of sportsOne) {

    if (temSport === "Cricket") {
        console.log(temSport + " << My favorite!");
    } else {
        console.log(temSport);
    }
}