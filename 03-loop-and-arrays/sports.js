var sportsOne = ["Golf", "Cricket", "Baseball", "Tennis"];
/*
for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
*/
// Let's use the simplied for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var temSport = sportsOne_1[_i];
    if (temSport === "Cricket") {
        console.log(temSport + " << My favorite!");
    }
    else {
        console.log(temSport);
    }
}
