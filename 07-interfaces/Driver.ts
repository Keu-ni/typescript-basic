import { Coach } from "./Coach";
import { HikingCoach } from "./HikingCoach";
import { LifeCoach } from "./LifeCoach";
import { SwimCoach } from "./SwimCoach";

let myHikingCoach = new HikingCoach();
let myLifeCoach = new LifeCoach();
let mySwimmingCoach = new SwimCoach();

// declare an array for coaches
let theCoaches: Coach[] = [];

// add the coached to the array
theCoaches.push(myHikingCoach);
theCoaches.push(myLifeCoach);
theCoaches.push(mySwimmingCoach);

for (const tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}