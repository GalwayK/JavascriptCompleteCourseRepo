"use strict";

const Car = function(strMake, numSpeed)
{
    this.strMake = strMake;
    this.numSpeed = numSpeed;
};

Car.prototype.accelerate = function()
{
    console.log("Diesel Acceleration!");
    this.numSpeed += 10;
};

const brake = function()
{
    console.log("Braking!");
    this.numSpeed -= 5;
};

Car.prototype.brake = brake;

Car.prototype.toString = function()
{
    return `${this.strMake} going at ${this.numSpeed} km/h.`;
}

const ElectricCar = function(strMake, numSpeed, numPercentCharge)
{
    Car.call(this, strMake, numSpeed);
    this.numPercentCharge = numPercentCharge;
};

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.constructor = ElectricCar;

ElectricCar.prototype.chargeBattery = function(numChargeTo)
{
    console.log("Charging!");
    this.numPercentCharge = numChargeTo > this.numPercentCharge 
        ? numChargeTo
        : this.numPercentCharge;
}

ElectricCar.prototype.accelerate = function()
{
    console.log("Electric Acceleration!");
    if (this.numPercentCharge > 0)
    {
        this.numSpeed += 10;
        this.numPercentCharge -= 1;
    }
}

const carElectric = new ElectricCar("Tesla", 90, 50);

console.log(carElectric.numPercentCharge);
console.log(carElectric.numSpeed);

carElectric.accelerate();

console.log(carElectric.numPercentCharge);
console.log(carElectric.numSpeed);

carElectric.brake();

console.log(carElectric.numPercentCharge);
console.log(carElectric.numSpeed);

carElectric.chargeBattery(25);

console.log(carElectric.numPercentCharge);
console.log(carElectric.numSpeed);

carElectric.chargeBattery(75);

console.log(carElectric.numPercentCharge);
console.log(carElectric.numSpeed);