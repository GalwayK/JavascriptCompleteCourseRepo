"use strict";

// The application we will be building is called Bankist. The Bankist 
// application is a minimalist banking application. On this application a user
// can make transfer, request loans, and can close the account. All banking 
// transactions are displayed in a list, and are fully fuctional, even keeping 
// into account currencies, and ensuring that all transfers are valid. \

// In a real world application we would want more data than is present, but in
// this application we are mostly just concerned with learning arrays. Because 
// we are assuming this data would be coming from an API, we are assuming that
// our data is arriving in JSON format. For this reason, we are using objects 
// instead of a key, value Map.

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: "1111",
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: "2222",
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: "3333",
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: "4444",
};

const accounts = [account1, account2, account3, account4];

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
// To log in and out of the application we just need to change the opacity 
// of the .app class in the style.css file. 

// We do not want to write our code in the global context. It is much better to
// use functions to manipulate data in a manner such as this application. We 
// also don't want to use global variables, we want to pass the data we need 
// into a variable, even if the variable itself is globally accessible. 

let currentAccount;

const displayMovements = function(movementsArray)
{
    // Before we can add elements, we must set the current element to empty.
    containerMovements.innerHTML = '';

    // We are iterating through the movementsArrat and then creating the 
    // div elements to add each of them to the DOM with data created for 
    // each movement. We create a template String which contains the movement 
    // information. Then we add them to the movements div with the 
    // .insertAdjacentElements method with the afterbegin position option 
    // to put the templates after the end of the element's original children. 
    movementsArray.forEach((movementNumber, index) => 
    {  
        let movementTypeString = movementNumber > 0 ? "deposit" : "withdrawal";
        const htmlTemplateString = `
        <div class="movements__row">
            <div class="movements__type movements__type--${movementTypeString}"`
            + `>${index + 1} ${movementTypeString}</div>
            <!-- <div class="movements__date">3 days ago</div> -->
            <div class="movements__value">${movementNumber}€</div>
        </div>
        `;
        containerMovements.insertAdjacentHTML("afterbegin", htmlTemplateString);

        // .insertAdjacentHTML is something of a quick and dirty solution to
        // inserting HTML, though it is extremely easy and effective.
    });
};

// COMPUTING USERNAMES 

const computeUsernameFunction = function(ownerNameString)
{
    ownerNameString = ownerNameString.toLowerCase();
    const wordArray = ownerNameString.split(" ");

    // Use Map method to return array of lower case initials.
    const wordLowerCaseArray = wordArray.map(word => word[0]);
    return wordLowerCaseArray.join("");
};

const addUsernameToAccount = function(account)
{
    const usernameString = computeUsernameFunction(account.owner);
    account.username = usernameString;
};

accounts.forEach(addUsernameToAccount);

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

const loginUser = function(account)
{
    currentAccount = account;
    displayMovements(currentAccount.movements);
    generateAccountBalance(currentAccount);
    labelBalance.textContent = `${currentAccount.balance} €`;

    calculateAccountSummaries(currentAccount);
    labelSumIn.textContent = currentAccount.depositTotal;
    labelSumOut.textContent = Math.abs(currentAccount.withdrawalTotal);
    labelSumInterest.textContent = currentAccount.interestTotal;

    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginUsername.blur();
    inputLoginPin.blur();

    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(" ")[0]}!`;
    containerApp.style["opacity"] = 1;
};

const signinUser = function(event)
{
    event.preventDefault();
    const usernameString = inputLoginUsername.value;
    const passwordString = inputLoginPin.value;
    // Two conditions to check. 
    // 1. Find user for username. 
    // 2. Confirm password for username matches login password. 
    const validateUsername = (account) => account.username === usernameString;

    const accountChecked = accounts.find(validateUsername);

    if (passwordString === accountChecked?.pin)
    {
        console.log("Logging in.");
        loginUser(accountChecked);
    }
    else 
    {
        console.log("Invalid credentials.");
    }
};

// In HTML, when you click a submit button, the page will refresh by default. 
// To avoid this, we can access the event in the callback function and use 
// the event.preventDefault() method. This stops the page from reloading.
btnLogin.addEventListener("click", signinUser);
accounts.forEach((account) => console.log(account));

// DATA TRANSFORMATIONS: MAP, FILTER, REDUCE 

// In JavaScript there are a number of tools used to manipulate and alter 
// data in arrays. They are called Map, Filter, and Reduce. 

// Map: A method we can use to loop over arrays. Map creates a brand new 
// array based on the original array. It takes an array, loops over an array, 
// then applies a callback function to each array element, similar to the for 
// each method. The big difference is that is actually creates a new array, 
// allowing us to create a new array with processed data from another array.

// Filter: This method is used to filter for elements in the original array. 
// We can apply a boolean filter, and it will then create a new array out of 
// elements which pass the boolean filter. It filters out all elements which do 
// not pass the boolean filter. 

// Reduce: This method reduces all of the elements in an array down to a single 
// value. We can, for example, add up all of the elements of an array until 
// we have a single value, which would be the total sum of all of the elements. 

// THE MAP METHOD 

// Map is used to create a new array out of processed data from another array. 

const movementsEurosArray = account1.movements;

const euroToUsdConversion = 1.1;

// This method is called for all elements of the original array. 
// // It returns an array with each entry being a processed element.
// const convertEuroToUsd = function(euroNumber, indexNumber, originalArray) 
// {
//     // console.log(indexNumber);
//     // console.log(originalArray);
//     euroNumber * euroToUsdConversion;
// };

// const movementsUsdArray = movementsEurosArray.map(convertEuroToUsd);
// console.log(movementsEurosArray);
// console.log(movementsUsdArray);

// The map method allows us to use a function to process information, which is 
// used often with functional programming. We can also process information with 
// basic for loops, but using callback functions is a newer and more modern way.

// let convertedMovementArray = [];
// for (const movementNumber of movementsEurosArray)
// {
//     convertedMovementArray.push(movementNumber * euroToUsdConversion);
// }
// console.log(convertedMovementArray);

// The map method also has access to the same three parametrs of the forEach 
// method: the element, its index, and the entirety of the original array. 

// movementsEurosArray.map(convertEuroToUsd);

// function outputMovementDescription(movementNumber, indexNumber)
// {
//     let typeString = "deposited";
//     if (movementNumber < 0)
//     {
//         typeString = "withdrew";
//         movementNumber = Math.abs(movementNumber);
//     }
//     return `Movement #${indexNumber + 1}: You ${typeString} ${movementNumber}`;
// }

// const movementsDescriptionsArray = 
//     movementsEurosArray.map(outputMovementDescription);

// movementsDescriptionsArray.forEach((movementString) => 
// {
//     console.log(movementString);
// });

// THE FILTER METHOD 

// The filter method is used to filte arrays for elements that satisfy certain
// conditions. Like the map and forEach methods, it uses callback functions. 

// A filter callback returns a booleon operation. If the boolean operation is 
// true, it will add the element to the array created by the filter method. 

// const filterForDeposits = (movementNumber) => movementNumber > 0;
// const filterForWithdrawals = (movementNumber) => movementNumber < 0;
// Filter methods also get access to the index and array total, though 
// unlike the map and forEach methods, they are rarely useful for filter. 

// const depositsArray = movementsEurosArray.filter(filterForDeposits);
// console.log(depositsArray);
// const withdrawalsArray = movementsEurosArray.filter(filterForWithdrawals);
// console.log(withdrawalsArray);

// As with Maps, we can use for loops to do the same task as a filter method, 
// however it is better and more functional to use the filter method. 

// const depositArrayTwo = [];
// for (const movementNumber of movementsEurosArray)
// {
//     if (movementNumber > 0)
//     {
//         depositArrayTwo.push(movementNumber);
//     }
// }
// console.log(depositArrayTwo);

// THE REDUCE METHOD 

// The reduce method boils down (reduces) an array to a single value. 

// const calculateTotalBalance = 
//     (totalBalance, movementNumber) => totalBalance + movementNumber;
    
// // The second argument for the Reduce method is the default value of the 
// // accumulator. 
// const defaultValueNumber = 0;

// // Unlike in the Map and Filter methods, the arguments for the Reduce method 
// // are first the accumuator variable and the element of the array. We return the 
// // accumulator after each callback function and pass it into the next callback 
// // function. This is easily demonstrated with summation, but the accumulator can
// // be anything and can have complicated data processing operations. 
// const accountBalanceNumber = 
//     movementsEurosArray.reduce(calculateTotalBalance, defaultValueNumber);
// console.log(accountBalanceNumber);

// If we use a for loop to accumulate, we need a separate external variable 
// to keep track of the accumulation. In the reduce method, we do not, and 
// this helps keep our code organized, refined, and easy to read. 
// let accountBalance = 0;
// for (const movementNumber of movementsEurosArray)
// {
//     accountBalance += movementNumber;
// }
// console.log(accountBalance);

// 1. Get the maximum value with reduce. 

// We can also use Reduce to get any value we want. For example, to get the 
// maximum value of an array, we can use reduce to return only highest values.
// The reduce method is the most powerful array method, but also the hardest. 
// const calculateMaximumValue = 
//     (maximumNumber, nextNumber) => 
//         maximumNumber > nextNumber ? maximumNumber : nextNumber;


// const displayMaximumValue = function(account)
// {
//     // We need to use the first element of the array when comparing for 
//     // maximum values because if we used a default value of 0, it might come 
//     // to be that none of the elements of the array are greater than 0, which 
//     // would return a maximum value of 0, which is incorrect. Instead, 
//     // we just use the first element of the array to compare as default. 
//     const initialValue = account.movements[0];
//     const maximumMovementNumber = 
//         account.movements.reduce(calculateMaximumValue, initialValue);
//     console.log(`Account ${account.username} Max: ${maximumMovementNumber}`);
// }

// accounts.forEach(displayMaximumValue);

// CHAINING METHODS 

// We can use the Map, Reduce, and Filter methods in a chain to transfer data 
// in a straight and precise method. 

// const filterForDeposits = (movementNumber, indexNumber, movementArray) => 
//     movementNumber > 0;


// const convertEuroToUsd = (movementNumber, indexNumber, movementArray) => 
//     movementNumber * euroToUsdConversion;


// console.log(movementsEurosArray
//     .filter(filterForDeposits)
//     .map(convertEuroToUsd)
//     .reduce(calculateAccountBalance)
//     );

// Because we can chain together the return values from map, reduce, and filter
// we can chain them together to perform rapid transformations of data. We can 
// chain together methods if they return an array. This means that we likely 
// will not be able to chain together reduce methods, which often end a chain.
// That said, we should not overuse chaining. Chaining methods can cause 
// performance issues, so we should try to compress their functionality into 
// as few methods as possible. We might accomplish this by combining multiple 
// map methods to filter as efficiently as possible. We also should not chain 
// methods which mutate the original array. 

// THE FIND METHOD 

// We can use the find method to retrieve an element of an array based on a 
// condition. It also accepts a callback function which is called as the 
// method loops over the array. It retrieves an element of the array. The 
// difference between the filter and find method is that the find method will 
// not return an array, only the first element which satisfied the condition. 
// Because they used similar conditions, we can reuse filter callback methods. 

// const firstWithdrawal = movementsEurosArray.find(filterForWithdrawals);
// console.log(firstWithdrawal);

// const username = "jd";

// const jdObject = accounts.find((account => 
//     {
//         return account.username === username;
//     }));

// // The find method is a great way to search through a list of objects which are 
// // all going to have similar or identical structures. 

// console.log(jdObject);

