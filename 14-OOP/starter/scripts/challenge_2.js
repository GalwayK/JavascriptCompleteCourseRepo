"use strict";

class Vehicle
{
    constructor(strCarName, numKiloSpeed)
    {
        this.strCarName = strCarName;
        this.numKiloSpeed = numKiloSpeed;
    }

    set speedUS(numMilesSpeed)
    {
        this.numSpeed = numKiloSpeed * 1.6;
    }

    get speedUS()
    {
        return this.numKiloSpeed / 1.6;
    }

    accelerate = function()
    {
        this.numKiloSpeed += 10;
    }

    brake()
    {
        this.numKiloSpeed -= 5;
    }
}

const carFerrari = new Vehicle("Ferrari", 100);

console.log(carFerrari.numKiloSpeed);

console.log(carFerrari.speedUS);

carFerrari.accelerate();

console.log(carFerrari.numKiloSpeed);

console.log(carFerrari.speedUS);

carFerrari.brake();

console.log(carFerrari.numKiloSpeed);

console.log(carFerrari.speedUS);