import { Coach } from "./Coach";

export class HikingCoach implements Coach {
    getDailyWorkout(): string {
        return "Because Mountain was there.";
    }

}