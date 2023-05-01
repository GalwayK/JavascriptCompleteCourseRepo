"use strict";
class Vehicle
{
    #strCarName;
    #numKiloSpeed;

    constructor(strCarName, numKiloSpeed)
    {
        this.#strCarName = strCarName;
        this.#numKiloSpeed = Vehicle.#validateSpeed(numKiloSpeed);
    }

    set speedUS(numMilesSpeed)
    {
        this.numSpeed = numKiloSpeed * 1.6;
        return this;
    }

    get speedUS()
    {
        return this.#numKiloSpeed / 1.6;
    }

    set strCarName(strCarName)
    {   
        this.#strCarName = strCarName;
        return this;
    }

    get strCarName()
    {
        return this.#strCarName;
    }

    set numKiloSpeed(numKiloSpeed)
    {
        this.#numKiloSpeed = numKiloSpeed;
        return this;
    }

    get numKiloSpeed()
    {
        return this.#numKiloSpeed;
    }

    accelerate()
    {
        this.#numKiloSpeed += 10;
        return this;
    }

    brake()
    {
        this.#numKiloSpeed -= 5;
        return this;
    }

    static #validateSpeed(numSpeed)
    {
        console.log("Speed is valid.");
        return numSpeed;
    }
}

class ElectricCar extends Vehicle
{
    // Private field
   
    #numPercentCharged;

    constructor(strCarName, numKiloSpeed, numPercentCharged)
    {
        super(strCarName, numKiloSpeed);
        this.#numPercentCharged = numPercentCharged;
    }

    get numPercentCharged()
    {
        return this.#numPercentCharged;
    }

    set numPercentCharged(numPercentCharged)
    {
        this.#numPercentCharged = numPercentCharged;
        return this;
    }

    chargeCar(numChargeTo)
    {
        numChargeTo > this.#numPercentCharged 
            && (this.numPercentCharged = numChargeTo);
        return this;
    }
}

const carElectric = new ElectricCar("Tesla", 100, 50);
console.log(carElectric.numPercentCharged);
carElectric.chargeCar(25);
console.log(carElectric.numPercentCharged);
carElectric.chargeCar(75);
console.log(carElectric.numPercentCharged);

carElectric.accelerate().brake().chargeCar(100);
console.log(carElectric);
console.log(carElectric.strCarName);
carElectric.strCarName = "Ford Power";
console.log(carElectric.numKiloSpeed);
carElectric.numKiloSpeed = 9000;

console.log(carElectric);