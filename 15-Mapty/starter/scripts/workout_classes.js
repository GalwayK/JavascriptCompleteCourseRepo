"use strict";

// Parent Workout Class (With ES6 Class)
class Workout
{
    // Public fields.
    numId; 
    numDistance; 
    numDuration;
    coords;
    date;

    constructor(numId, numDistance, numDuration, coords, date)
    {
        this.numId = numId;
        this.numDistance = numDistance;
        this.numDuration = numDuration;
        this.coords = coords;
        this.date = date;
    }

    toString()
    {
        let strWorkout = ``;
        Object.entries(this).forEach(entry => 
        {
            strWorkout += `${entry[0]}: ${entry[1]} `
        });
        return strWorkout.trim();
    }

    getStrWorkout()
    {
        return "Exercising";
    }
}

// const workout = new Workout(0, 10, 10, 10, 10);
// console.log(workout.toString());

// WorkoutRun Child Class (With ES6 Class)
class WorkoutRun extends Workout
{
    // Public fields.

    numCadence;
    numPace;

    constructor(numId, numDistance, numDuration, coords, date, numCadence)
    {
        super(numId, numDistance, numDuration, coords, date);

        this.numCadence = numCadence;
        this.numPace = this.numDuration / this.numDistance;
    }

    getStrWorkout()
    {
        return "Running";
    }
}

// const workoutRun = new WorkoutRun(1, 10, 10, 10, 10, 10, 10);
// console.log(workoutRun.toString());

// WorkoutCycle Child Class (With Function Constructor)
const WorkoutCycle = function(numId, numDistance, numDuration, coords, date, 
    numElevation, numSpeed)
{
    // Public fields. 
    numElevation;
    numSpeed;

    const arrParentArgs = [numId, numDistance, numDuration, coords, date];

    Object.entries(new Workout(...arrParentArgs)).forEach(arrEntry => 
    {
        this[arrEntry[0]] = arrEntry[1];
    });

    this.numElevation = numElevation;
    this.numSpeed = this.numDistance / this.numDuration;
}

WorkoutCycle.prototype = Object.create(Workout.prototype);
WorkoutCycle.prototype.constructor = WorkoutCycle;
WorkoutCycle.prototype.getStrWorkout = function()
{
    return "Cycling";
};

const workoutCycle = new WorkoutCycle(2, 10, 10, 10, 10, 10, 10);
