import { Coach } from "./Coach";

export class SwimCoach implements Coach {
    getDailyWorkout(): string {
        return "Whatever you want it";
    }

}