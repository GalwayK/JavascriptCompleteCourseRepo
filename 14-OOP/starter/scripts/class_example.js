"use strict";

class BankAccount
{
    constructor(strName, strCurrency, numPin)
    {
        this._strName = strName;
        this._strCurrency = strCurrency;
        this._numPin = numPin;
        this._arrMovements = [];
        this._locale = navigator.language;
    }

    // Instead of directly accessing properties, we use a public interface.
    makeDeposit(numAmount)
    {
        this._arrMovements.push(numAmount);
    }

    makeWithdrawal(numAmount)
    {
        // Call makeDeposit (example of abstraction)
        this.makeDeposit(0 - numAmount);
    }

    // We want to hide this.
    _approveLoan(numAmount)
    {
        return this._arrMovements.reduce((numTotal, numMovements) => 
            numTotal + numMovements, 0) > numAmount;
    }

    get strName()
    {
        return this._strName;
    }

    // We want this to be public.
    requestLoan(numAmount)
    {
        if (this._approveLoan(numAmount))
        {
            console.log("Loan approved!");
        }
        else 
        {
            console.log("Loan not approved!");
        }
    }
}

const accKyle = new BankAccount("Kyle", "EUROS", 3546);
accKyle.makeDeposit(100);
accKyle.makeWithdrawal(45);
accKyle.requestLoan(100);

// Should not be able to access this method. 
// We specify that it is protected with _ before the name of the property.
console.log(accKyle._approveLoan(10));
console.log(accKyle);
console.log(accKyle.strName);