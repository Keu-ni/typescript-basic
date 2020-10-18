import { Coach } from "./Coach";

export class LifeCoach implements Coach {
    getDailyWorkout(): string {
        return "that is your life.";
    }
}