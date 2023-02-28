const markDict = {
    "fullName": "Mark Miller", 
    "height": 1.95, 
    "weight": 90, 
    "calcBMI": function()
    {
        if (!this.bmi)
        {
            this.bmi = this.weight / (this.height ** 2);
        }
        return this.bmi;
    }
};

const johnDict = {
    "fullName": "John Smith", 
    "height": 1.00, 
    "weight": 1000, 
    "calcBMI": function()
    {
        if (!this.bmi)
        {
            this["bmi"] = this.weight / (this.height * this.height);
        }
        return this["bmi"];
    }
};

if (markDict.calcBMI() > johnDict.calcBMI())
{
    console.log(`Mark's BMI of ${markDict.calcBMI()} is higher than John's BMI of ${johnDict.calcBMI()}`);
}
else if (markDict.calcBMI() === johnDict.calcBMI())
{
    console.log(`Mark and John have the same BMI of ${markDict.calcBMI()}.`)
}
else 
{
    console.log(`John's BMI of ${johnDict.calcBMI()} is higher than Mark's BMI of ${markDict.calcBMI()}`);
}