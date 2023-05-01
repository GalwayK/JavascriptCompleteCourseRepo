"use strict";

class BankAccount
{
    // Public fields have no decorator
    locale;


    // Private fields are denoted with #
    #arrMovements;
    #bliby;

    // Protected fields are denoted with _.
    _strName;

    constructor(strName, strCurrency, numPin)
    {
        // Protected fields declaration.
        this._strName = strName;
        this._strCurrency = strCurrency;
        this._numPin = numPin;

        // Private fields declaration. 
        this.#bliby = "Argh";
        this.#arrMovements = [];

        // Public field declaration.
        this.locale = navigator.language;

        console.log(BankAccount.#validatePin(100));

        // Use getter and setter to manipulate protected and private fields.
    }

    // Instead of directly accessing properties, we use a public interface.
    makeDeposit(numAmount)
    {
        this.#arrMovements.push(numAmount);
        return this;
    }

    makeWithdrawal(numAmount)
    {
        // Call makeDeposit (example of abstraction)
        this.makeDeposit(0 - numAmount);
        return this;
    }

    // We want to hide this so we denote with _.
    #approveLoan(numAmount)
    {
        return this.#arrMovements.reduce((numTotal, numMovements) => 
            numTotal + numMovements, 0) > numAmount;
    }

    // Use getter to return _strName.
    get strName()
    {
        return this._strName;
    }

    // We want this to be public.
    requestLoan(numAmount)
    {
        if (this.#approveLoan(numAmount))
        {
            console.log("Loan approved!");
        }
        else 
        {
            console.log("Loan not approved!");
        }
    }

    // Static method available only to constructor/class
    static checkPin(numPin)
    {
        console.log("Checking pin.")
        console.log(this.#validatePin(numPin));
    }

    static #validatePin(numPin)
    {
        console.log("Validating pin.")
        return `${numPin}`.length === 4;
    }
}

const accKyle = new BankAccount("Kyle", "CA", 1234);
// console.log(accKyle.#arrMovements);
// console.log(accKyle.#bliby);
// console.log(accKyle.#approveLoan(20));
// BankAccount.checkPin(1234);

console.log(accKyle);

accKyle.makeDeposit(100).makeWithdrawal(-10);

console.log(accKyle);


