// Boolean logic uses many logical operators. 
// The operators and AND, OR, and NOT, though there are also NAND, NOR, AND XOR. 

const hasDriversLiscence = true;
const hasGoodVision = true;
const isTired = true;
const isCarSelfDriving = true;

console.log(hasDriversLiscence && hasGoodVision)
console.log(!hasDriversLiscence || hasGoodVision)

let shouldSarahDrive = hasDriversLiscence && hasGoodVision && !isTired || isCarSelfDriving;

if (shouldSarahDrive)
{
    console.log('Sarah can drive.')
}
else 
{
    console.log("Someone else should drive.")
}

