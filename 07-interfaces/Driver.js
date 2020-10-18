"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HikingCoach_1 = require("./HikingCoach");
var LifeCoach_1 = require("./LifeCoach");
var SwimCoach_1 = require("./SwimCoach");
var myHikingCoach = new HikingCoach_1.HikingCoach();
var myLifeCoach = new LifeCoach_1.LifeCoach();
var mySwimmingCoach = new SwimCoach_1.SwimCoach();
// declare an array for coaches
var theCoaches = [];
// add the coached to the array
theCoaches.push(myHikingCoach);
theCoaches.push(myLifeCoach);
theCoaches.push(mySwimmingCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var tempCoach = theCoaches_1[_i];
    console.log(tempCoach.getDailyWorkout());
}
