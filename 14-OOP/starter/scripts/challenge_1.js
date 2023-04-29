"use strict";

const Car = function(strMake, numSpeed)
{
    this.strMake = strMake;
    this.numSpeed = numSpeed;
};

Car.prototype.accelerate = function()
{
    this.numSpeed += 10;
};

const brake = function()
{
    this.numSpeed -= 5;
};

Car.prototype.brake = brake;

Car.prototype.toString = function()
{
    return `${this.strMake} going at ${this.numSpeed} km/h.`;
}

const carBMW = new Car("MMW", 120);

console.log(carBMW.toString());

carBMW.accelerate();

console.log(carBMW.toString());

carBMW.brake();

console.log(carBMW.toString());

const carMercedes = new Car("Mercedes", 95);

console.log(carMercedes.toString());

carMercedes.accelerate();

console.log(carMercedes.toString());

carMercedes.brake();

console.log(carMercedes.toString());