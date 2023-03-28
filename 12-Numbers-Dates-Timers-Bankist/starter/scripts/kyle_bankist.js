"use strict";

// Data

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};


const arrayDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
    "Friday", "Saturday"];

const arrayMonths = ['January', "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];

const accounts = [account1, account2];

// Elements
const body = document.querySelector("body");
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

console.log("Welcome to Bankist, a minimalist Banking application!");

// CREATING DOM ELEMENTS

let currentAccount = null;
let beginSortEvent;

const displayMovements = function(movementsArray, sorted=false, sortString)
{
    containerMovements.innerHTML = '';
    const sortMovementsArrayFunction = sortString === "ascend" ? 
        (currentMovementNumber, nextMovementNumber) => 
            nextMovementNumber - currentMovementNumber :
        (currentMovementNumber, nextMovementNumber) => 
            currentMovementNumber - nextMovementNumber;

    const displayArray = 
    sorted ? movementsArray.slice(0).sort(sortMovementsArrayFunction) : 
        [...movementsArray];
    
    currentAccount.arrayMovementTimes = null;
    currentAccount.arrayMovementTimes = currentAccount.movementDateArray
        .map(funcGenerateAddTimestampFunction());

    displayArray.forEach((movementNumber, index) => 
    {  
        let movementTypeString = movementNumber > 0 ? "deposit" : "withdrawal";
        const htmlTemplateString = `
        <div class="movements__row">
            <div class="movements__type movements__type--${movementTypeString}"`
            + `>${index + 1} ${movementTypeString}</div>
            <div class="movements__date">${currentAccount.arrayMovementTimes[index]} days ago.</div> 
            <div class="movements__value">${movementNumber.toFixed(2)}€</div>
        </div>
        `;
        containerMovements.insertAdjacentHTML("afterbegin", htmlTemplateString);

        // .insertAdjacentHTML is something of a quick and dirty solution to
        // inserting HTML, though it is extremely easy and effective.
    });
};

const mapOwnerToUsername = function(accountObject, indexNumber)
{
    const ownerString = accountObject.owner.toLowerCase();
    const wordArray = ownerString.split(" ");

    const mapWordToFirstLetter = (word) => word[0];
    const firstLetterArray = wordArray.map(mapWordToFirstLetter);

    const usernameString = firstLetterArray.join("");
    accountObject["username"] = usernameString;
    return usernameString;
};

const usernameArray = accounts.map(mapOwnerToUsername);
console.log(usernameArray);

// CALCULATE ACCOUNT BALANCE 

const calculateAccountBalance = 
    (accountBalance, movementNumber) => accountBalance += movementNumber;

const generateAccountBalance = function(account)
{
    const totalBalanceNumber = 
        account.movements.reduce(calculateAccountBalance);
    account.balance = totalBalanceNumber;
};

// CALCULATE ACCOUNT SUMMARY 

const filterForDeposits = (movementNumber) => 
    movementNumber > 0;

const filterForWithdrawals = (movementNumber) => 
    movementNumber < 0;

const calculateInterests = function(depositNumber)
{
    return depositNumber * (currentAccount.interestRate / 100);
};

const filterInterestsByOne = (interestNumber) => 
    interestNumber > 1;

const calculateMovementSum = (movementSumNumber, movementNumber) => 
    movementSumNumber += movementNumber;

const calculateInterestsSum = (interestSumNumber, interestNumber) => 
    interestSumNumber += interestNumber;

const calculateAccountSummaries = function(account)
{
    const accountDepositTotalNumber = 
        account.movements.filter(filterForDeposits)
            .reduce(calculateMovementSum, 0);

    const accountWithdrawalTotalNumber = 
        account.movements.filter(filterForWithdrawals)
            .reduce(calculateMovementSum, 0);

    account.calculateInterests = calculateInterests.bind(account);

    const interestsTotalNumber = account.movements.filter(filterForDeposits)
        .map(calculateInterests).filter(filterInterestsByOne)
        .reduce(calculateInterestsSum, 0);

    account.interestTotal = interestsTotalNumber;
    account.depositTotal = accountDepositTotalNumber;
    account.withdrawalTotal = accountWithdrawalTotalNumber;
};

// IMPLEMENT LOGIN PAGE

const generateFields = function()
{
    displayMovements(currentAccount.movements);
    generateAccountBalance(currentAccount);
    labelBalance.textContent = `${currentAccount.balance.toFixed(2)} €`;

    calculateAccountSummaries(currentAccount);
    labelSumIn.textContent = currentAccount.depositTotal.toFixed(2);
    labelSumOut.textContent = 
        Math.abs(currentAccount.withdrawalTotal.toFixed(2));
    labelSumInterest.textContent = currentAccount.interestTotal.toFixed(2);

    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginUsername.blur();
    inputLoginPin.blur();

    let dateCurrent = new Date();
    let dayCurrent = dateCurrent.getDay();
    let monthCurrent = dateCurrent.getMonth();
    let yearCurrent = dateCurrent.getFullYear();
    let monthdateCurrent = dateCurrent.getDate();

    labelDate.textContent = `${arrayDays[dayCurrent]} `
     + `${arrayMonths[monthCurrent]} ${monthdateCurrent}, ${yearCurrent}`;

    const generateSortEventFunction = function()
    {
        let sortString = "ascend";
        return function(event)
        {
            event.preventDefault();
            displayMovements(currentAccount.movements, true, sortString);
            sortString = sortString === "ascend" ? "descend" : "ascend";
        }
    }

    beginSortEvent = generateSortEventFunction();

    btnSort.addEventListener("click", beginSortEvent);

    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(" ")[0]}!`;
    containerApp.style["opacity"] = 1;
};

const logoutCurrentUser = function()
{
    currentAccount = null;
    containerApp.style["opacity"] = 0;
    containerMovements.innerHTML = "";
    labelWelcome.textContent = "";
    labelBalance.textContent = "";
    labelSumIn.textContent = "";
    labelSumInterest.textContent = "";
    labelSumInterest.textContent = "";
};

const signinUser = function(event)
{
    event.preventDefault();
    const usernameString = inputLoginUsername.value;
    const passwordString = !isNaN(inputLoginPin.value) ? 
        + (inputLoginPin.value) : "";
    const findAccountByUsername = 
        (account) => account.username === usernameString;

    const accountChecked = accounts.find(findAccountByUsername);

    if (passwordString === accountChecked?.pin)
    {
        console.log("Logging in.");
        currentAccount = accountChecked;
        generateFields();
    }
    else 
    {
        console.log("Invalid credentials.");
    }
};

btnLogin.addEventListener("click", signinUser);
accounts.forEach((account) => console.log(account));

// IMPLEMENTING TRANSFERS

const transferFunds = function(transferAccountString, amountNumber)
{
    const findAccountByUsername = 
        (account) => account.username === transferAccountString;

    const transferAccount = accounts.find(findAccountByUsername);
    console.log(transferAccount);

    if (amountNumber > 0 && transferAccount)
    {
        this.movements.push(0 - amountNumber);
        this.movementDateArray.push(new Date());
        transferAccount.movements.push(amountNumber);
        transferAccount.movementDateArray.push(new Date());
        generateFields();
    }
    else 
    {
        console.log("Error: Invalid transfer.");
    }
};

const beginTransferEvent = function(event)
{
    event.preventDefault();
    const usernameString = inputTransferTo.value;
    const amountNumber = +(inputTransferAmount.value);
    
    inputTransferTo.value = inputTransferAmount.value = "";

    inputTransferTo.blur();
    inputTransferAmount.blur();

    if (!usernameString || usernameString === currentAccount.username || 
        !amountNumber || amountNumber > currentAccount.balance)
    {
        console.log("Error, invalid transfer.")
    }
    else 
    { 
        transferFunds.call(currentAccount, usernameString, amountNumber);
    }
};

btnTransfer.addEventListener("click", beginTransferEvent)


// CLOSING ACCOUNTS 

const closeAccountEvent = function(event)
{
    event.preventDefault();

    const inputUsernameString = inputCloseUsername.value;
    const inputPasswordString = inputClosePin.value;

    const findAccountIndex = 
        (account) => account === currentAccount 
            && account.username === inputUsernameString 
            && account.pin === + inputPasswordString;

    const accountIndex = accounts.findIndex(findAccountIndex);

    if (accountIndex > -1)
    {
        accounts.splice(accountIndex, 1);
        console.log(accounts);
        logoutCurrentUser();
    }  
    else 
    {
        console.log("Cannot delete account.");
    }

    inputCloseUsername.value = inputClosePin.value = "";
    inputClosePin.blur();
    inputCloseUsername.blur();
};

btnClose.addEventListener("click", closeAccountEvent);

// IMPLEMENTING LOAN 

function beginLoanEvent(event)
{
    event.preventDefault();
    const requestedLoanNumber = Math.floor(inputLoanAmount.value);
    if (requestedLoanNumber && requestedLoanNumber > 0)
    {
        const anyDepositGreaterThanLoan = (movementNumber) => 
            movementNumber >= requestedLoanNumber / 10;
        
        const hasHighDeposit = 
            currentAccount.movements.some(anyDepositGreaterThanLoan);
        
        if (hasHighDeposit)
        {
            currentAccount.movements.push(requestedLoanNumber);
            currentAccount.movementDateArray.push(new Date());
            generateFields();
        }
        else 
        {
            console.log("Error: Insufficient funds.");
        }
    }
    else 
    {
        console.log("Error requesting loan.");
    }
    inputLoanAmount.value = "";
    inputLoanAmount.blur();
}

btnLoan.addEventListener("click", beginLoanEvent);

// CONVERTING AND CHECKING NUMBERS 

// All numbers are represented by floating by numbers, even if we do not see 
// them as integers. Numbers are also always stored as binary digits, and this 
// makes it difficult to represent numbers as decimals. Because of floating 
// point imprecision, decimal numbers are often slightly inaccurate.

// This will output as true because all numbers are actually floats. 
// console.log(23 === 23.0);

// // This will output 3.000004 or so because of floating point imprecision. 
// console.log(0.1 + 0.2); 

// // JavaScript will do some rounding behind the scenes to hide this imprecision, 
// // but there is no way to mask these issues. Most languages have this problem. 
// // As a result, we cannot do incredibly precise float operations in JavaScript. 

// // We can convert a String to a number with the Number() contructor. 
// console.log(Number("1234"));

// // We can also just use the addition operator (one sided only)
// console.log(+ "1234");

// // In addition to converting a string into a number, we can convert a number 
// // into a string with the parseInt() function. If there are any non-number 
// // characters, JavaScript will do its best to convert the string into a number 
// // by truncating any characters that are not digits. For this to work, the 
// // string must start with a number or series of numbers. This is useful for 
// // when we receive a unit (300px, 5deg) and we need to get rid of the unit. 
// console.log(Number.parseInt("300pxdawd"));

// // Number.parseInt() receives a second argument, which determines the base 
// // digit we are using. 

// let baseTen = 10;
// let baseEight = 8;

// // The first will output decimal, the second will output octal. 
// console.log(Number.parseInt("300px", baseTen));
// console.log(Number.parseInt("300px", baseEight));

// // There is also the parseFloat method. parseInt will truncate all decimals. 
// // The parseInt and parseFloat methods will ignore all whitespaces as well. 
// console.log(Number.parseFloat("   2.5rem   ", baseTen));
// console.log(Number.parseInt(" 2.5rem   ", baseTen));

// // The parseInt and parseFloat methods are both global functions, however, 
// // calling them on the Number objects specifies their namespace and is clear. 
// console.log(parseFloat("10.78vh"));
// console.log(parseInt("10.78ch"));

// // Next is the isNaN method. This is used to check if a string is a number. 
// console.log(Number.isNaN("20"));
// console.log(Number.isNaN(23 / 0));

// // To avoid infinity errors, we can use the isFinite() method to check if a 
// // value is a finite number. The isFinite() method for the global namespace is 
// // not the same: Number.isFinite() will not convert the the value into a number, 
// // but isFinite() will. Number.isFinite() requires us to do conversion. 
// console.log(Number.isFinite("23"));
// console.log("Testing")

// // We can use the basic addition operator to convert a value into a number. 
// console.log(Number.isFinite(+"2023"));
//  // In practice, we can mostly just use Number.isFinite(+"value") to check. 

// MATH AND ROUNDING 

// There are a variety of Math operations which are supported by JavaScript. 
// Math.sqrt(number) is equal to number ** (1/2)
// Math.cbrt(number) is equal to number ** (1/3)
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(Math.cbrt(27));
console.log(27 ** (1 / 3));

// We can use the Math.max and Math.min methods to find the min and max of a 
// list of values. These methods will performing conversion, but not parsing. 
console.log(Math.min(5, 2, "3ex")); // Will result in NaN.
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.min("5", "18", "23"));
let arrayNumbers = [1, 2, 3, "4"];
console.log(Math.max(...arrayNumbers));

// The Math namespace also has a number of constants, such as Math.PI
console.log(Math.sqrt(Math.PI * Number.parseFloat("10px")));

// The Math object also has the random function. 
console.log(Math.random() * 6 + 1);
console.log("Custom random()")

const randomFloat = (minNumber, maxNumber) =>
    Math.random() * (maxNumber - minNumber) + minNumber;

const randomInt = (minNumber, maxNumber) =>
    Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

console.log("Rounding");

// ROUNDING 

// Math.trunc() is used to remove all decimals from a number. 
console.log(Math.trunc(2.111));

// The Math.round() method is used to round to the nearest integer. 
console.log(Math.round(23.4));
console.log(Math.round(23.5));

// Ceil will raise a number to its highest integer by raising the absolute 
// value, while floor will lower a number to its lowest integer by lowering 
// the absolute value. 
// For negative numbers, ceil will "lower" the absolute value, while floor will 
// "raise" the absolute value. 
console.log(Math.ceil(23.1));
console.log(Math.floor(23.9))
console.log(Math.floor(-23.1));
console.log(Math.ceil(-23.5))

// Rounding floating point numbers is a little different. It is almost never 
// a good idea to change the value of a floating point number by rounding it, 
// so the main use case of rounding them is for display purposes. In these 
// cases, we mostly just want to access a string representation of the number 
// rounded to the correct number of digits with the number.toFixed() method.

// The decimals argument lets us determine how many decimal places we want. 
// If we add more decimals than are in the number, it will pad it with zeroes. 
// If the decimals argument is 0, it will return a rounded integer string. 
// As with all strings, we can convert them back to numbers with the + operator.
let decimalsNumber = 1;
console.log(2.7.toFixed(decimalsNumber));
console.log((2.7).toFixed(decimalsNumber + 5));
console.log((2.7).toFixed(decimalsNumber - 1));
console.log(+ (2.345678).toFixed(3));

// Since all numbers are primitives, JavaScript perform boxing to run any 
// methods called on a number by converting the primitive value into a 
// Number object, running the method, and then behind the scenes, converting 
// the object back into a primitive value. 

// THE REMAINDER OPERATOR 

// The remainder operator returns the remainder after division. It is also 
// known as the modulus operator. 

// let mathOutputNum;

// mathOutputNum = 5 % 2;

// console.log(mathOutputNum);

const colorOddMovementsFunc = function(event)
{
    let movementsRowNodeList = document.querySelectorAll(".movements__row");
    let movementsRowArray = [...movementsRowNodeList];
    console.log(movementsRowArray);

    movementsRowArray.forEach((movementRow, indexNum) => 
    {
        console.log(movementRow);
        if ((indexNum + 1) % 2 === 0)
        {
            movementRow.style["backgroundColor"] = "orangered";
        }
        if ((indexNum + 1) % 3 === 0)
        {
            movementRow.style["backgroundColor"] = "lightgreen";
        }
    });
};

btnLogin.addEventListener("click", colorOddMovementsFunc);

// Overall, the remainder is a great, simple choice whenever we need to do 
// something on every nth number of iterations. In this case, for every three 
// or two rows, we want to change the background color of an element. 

// CREATING DATES FOR ACCOUNTS

const funcParseDateStringIntoDateObjectForAccounts = 
    function(accountObj, indexNum)
{
    const funcParseStringIntoDate = (strDate) =>
        new Date(strDate);

    accountObj["movementDateArray"] = 
        accountObj.movementsDates.map(funcParseStringIntoDate);
    // console.log(accountObj);  
};

accounts.forEach(funcParseDateStringIntoDateObjectForAccounts);

// IMPLEMENTING ACCURATE TIMESTAMPS 

function funcGenerateAddTimestampFunction()
{
    return function(dateValue, indexNum, arrayDates)
    {
        let timeMovement = dateValue.getTime();
        let currentTime = Date.now();
        let timeDifference = currentTime - timeMovement;
        return Math.floor(timeDifference / 1000 / 60 / 60 / 24);
    }
};

console.log(funcGenerateAddTimestampFunction());

accounts.forEach((accountObj, indexNum) => 
{
    console.log(typeof accountObj.movementDateArray);
    let arrayMovementTimeDifferences = accountObj.movementDateArray
        .map(funcGenerateAddTimestampFunction());

    accountObj.arrayMovementTimes = arrayMovementTimeDifferences;
    console.log(accountObj);
});


