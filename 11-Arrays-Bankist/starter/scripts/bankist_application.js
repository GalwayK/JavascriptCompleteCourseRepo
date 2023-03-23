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

let currentAccount = null;
let beginSortEvent;

const displayMovements = function(movementsArray, sorted=false, sortString)
{
    // Before we can add elements, we must set the current element to empty.
    containerMovements.innerHTML = '';

    const sortMovementsArrayFunction = sortString === "ascend" ? 
        (currentMovementNumber, nextMovementNumber) => 
            nextMovementNumber - currentMovementNumber :
        (currentMovementNumber, nextMovementNumber) => 
            currentMovementNumber - nextMovementNumber;

    const displayArray = 
    sorted ? movementsArray.slice(0).sort(sortMovementsArrayFunction) : 
        [...movementsArray];

    displayArray.sort(sortMovementsArrayFunction);
    

    // We are iterating through the movementsArray and then creating the 
    // div elements to add each of them to the DOM with data created for 
    // each movement. We create a template String which contains the movement 
    // information. Then we add them to the movements div with the 
    // .insertAdjacentElements method with the afterbegin position option 
    // to put the templates after the end of the element's original children. 
    displayArray.forEach((movementNumber, index) => 
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

// const computeUsernameFunction = function(ownerNameString)
// {
//     ownerNameString = ownerNameString.toLowerCase();
//     const wordArray = ownerNameString.split(" ");

//     // Use Map method to return array of lower case initials.
//     const wordLowerCaseArray = wordArray.map(word => word[0]);
//     return wordLowerCaseArray.join("");
// };

// const addUsernameToAccount = function(account)
// {
//     const usernameString = computeUsernameFunction(account.owner);
//     account.username = usernameString;
// };

// accounts.forEach(addUsernameToAccount);

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
    labelBalance.textContent = `${currentAccount.balance} €`;

    calculateAccountSummaries(currentAccount);
    labelSumIn.textContent = currentAccount.depositTotal;
    labelSumOut.textContent = Math.abs(currentAccount.withdrawalTotal);
    labelSumInterest.textContent = currentAccount.interestTotal;

    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginUsername.blur();
    inputLoginPin.blur();

    const generateSortEventFunction = function()
    {
        // Closure will preserve this variable.
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
    const passwordString = inputLoginPin.value;
    // Two conditions to check. 
    // 1. Find user for username. 
    // 2. Confirm password for username matches login password. 

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

// In HTML, when you click a submit button, the page will refresh by default. 
// To avoid this, we can access the event in the callback function and use 
// the event.preventDefault() method. This stops the page from reloading.
btnLogin.addEventListener("click", signinUser);
accounts.forEach((account) => console.log(account));

// IMPLEMENTING TRANSFERS

const transferFunds = function(transferAccountString, amountNumber)
{
    const findAccountByUsername = 
        (account) => account.username === transferAccountString;

    const transferAccount = accounts.find(findAccountByUsername);
    console.log(transferAccount);

    if (amountNumber > 0)
    {
        this.movements.push(0 - amountNumber);
        transferAccount.movements.push(amountNumber);
        generateFields();
    }
};

const beginTransferEvent = function(event)
{
    event.preventDefault();
    const usernameString = inputTransferTo.value;
    const amountNumber = Number(inputTransferAmount.value);
    
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
            && account.pin === inputPasswordString;

    const accountIndex = accounts.findIndex(findAccountIndex);

    if (accountIndex > -1)
    // Use findIndex() to find the index of the account.
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

// Find the user with the username. 
// Confirm that user's Pin matches entered pin. 
// Delete from array where account index matches.
btnClose.addEventListener("click", closeAccountEvent);


// IMPLEMENTING LOAN WITH SOME 

function beginLoanEvent(event)
{
    event.preventDefault();
    const requestedLoanNumber = Number(inputLoanAmount.value);
    if (requestedLoanNumber > 0)
    {
        const anyDepositGreaterThanLoan = (movementNumber) => 
            movementNumber >= requestedLoanNumber / 10;
        
        // We use the some method to find out if the user has any movements 
        // greater or equal to 10% of the requested loan. 
        const hasHighDeposit = 
            currentAccount.movements.some(anyDepositGreaterThanLoan);
        
        if (hasHighDeposit)
        {
            currentAccount.movements.push(requestedLoanNumber);
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

// SORTING MOVEMENTS

// This is the most cursed solution.

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
//     (totalBalance, movementNumber) => totalBalance += movementNumber;
    
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

// The find method is a great way to search through a list of objects which are 
// all going to have similar or identical structures. 

// console.log(jdObject);

// THE FINDINDEX METHOD 

// The findIndex() method is a cousin of the find() method. Howver, the 
// the findIndex() method returns the index of an element, instead of the 
// element itself. Like the find() method, it looks for only one element. 

// In our application, closing an account just means to delete that account 
// from the accounts array. We can find the index of an account in the array 
// with the findIndex method, which returns the index of the first element 
// that matches. 

// The findIndex method is similar to the indexOf method, however it allows for 
// more complex behaviours and logic. The indexOf is better when we only want 
// to find the index of a specific account, while findIndex is better if we 
// have more complicated logic we want to process. 

// Just like the find method, the findIndex method also has access to the index 
// and the entirety of the array being processed. That said, these values are 
// almost never useful like they are with other methods. The find and findIndex 
// methods are also quite new, and will not work with older browsers. 

// THE SOME AND EVERY METHODS 

// The includes methods return a boolean value if it includes the argument. 
// If we want to test for a condition instead of strict equality, we can use 
// the some method. This allows us to test for a greater number of conditions. 
// If any element returns a true value, the method will return with true.
// console.log(movementsEurosArray.includes(-130));

// We can test if any of the movements in our array are positive with 
// a method such as the below: 
// const checkPositiveMovement = (movementNumber, indexNumber, movementsArray) =>
//     movementNumber > 0;

// const checkHighMovements = (movementNumber, indexNumber, movementsArray) => 
//     movementNumber > 5000;

// // The some method also gains access to the indexNumber and original array. 
// console.log(movementsEurosArray.some(anyPositiveMovement));

// console.log(`There is at least one movement greater than 5000: `
// + `${movementsEurosArray.some(anyHighMovements)}.`);

// The every method is similar to the some method, except that it will only 
// returnt true if every element matches the boolean statement in the function.

// accounts.forEach((account) => 
// {
//     console.log("All positive: ", account.movements.every(checkPositiveMovement));
//     console.log("All high: ", account.movements.every(checkHighMovements));
// });

// console.log(account4.movements.every(checkPositiveMovement));

// As I have done in all of this code, we do not want to repeat ourselves. We 
// should create our functions separately and then pass them as arguments into 
// our methods whenever possible, which allows us to avoid code repetition. 


// THE FLAT AND FLATMAP METHODS 

// In this example we have an array with a number of subarrays as well as some 
// other elements. If we want to take all of the elements from the subarrays 
// and add them to the topArray, we can use the flat method. The flat and 
// flatmap methods are relatively new, and were introduced in 2019. They will 
// not work with older browsers. 

// const topArray = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
// console.log(topArray.flat());
// // console.log(topArray.flatMap());

// // The flat method only goes one level deep when flattening arrays. It will not 
// // flatten any subArrays which are two levels deep. We can fix this with the 
// // depth argument, which is the first argument for the flat() method. 
// const deepArray = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(deepArray.flat(2));

// Problem: calculate all of the movements for all of the accounts. 
// To solve this, we first map all of the movements arrays into a single array. 
// We then flatten this array with the flat method, and then use a reduce method 
// in order to calculate the sum of all of their values. It is a common 
// operation to use a map method following immediately by a flat method. 

// const makeMovementsArray = function(account)
// {
//     return account.movements;
// };

// const calculateMovementsSum = (movementTotalNumber, movementNumber) =>
//     movementTotalNumber += movementNumber;

// let movementsTotalNumber = 
//     accounts.map(makeMovementsArray).flat(1).reduce(calculateMovementsSum, 0);
// console.log(movementsTotalNumber);

// // Because map and flat are so often used together, there was a new method 
// // created all flatmap, which does both operations at a single time. The 
// // flatMap method receives the same argument as the map method, however it 
// // only ever goes one level deep. If we want to flatten more levels deeper, 
// // we must use the flat method with the depth argument. 

// movementsTotalNumber = 
//     accounts.flatMap(makeMovementsArray).reduce(calculateMovementsSum, 0);
// console.log(movementsTotalNumber);

// SORTING ARRAYS

// Sorting is a complicated subject for computer science. 

const ownersArray = ["Jonas", "Zach", "Adam", "Martha"];
const numbersArray = [9, 8, 7, 6, 5, 4, 3, 10];
console.log(ownersArray.sort());
console.log(numbersArray.sort());

// JavaScript's sort method will sort values alphabetically, not numerically.
// This sort method also mutates the original array, we requires us be careful 
// when implementing this method. We can pass a callback method into the sort 
// method in order to customize the sort method for our own purposes. 

// console.log(movementsEurosArray);
// console.log(movementsEurosArray.sort());

// A callback function passed into the sort method will receive as arguments 
// two values: the current value, and the immediate next value. For the 
// callback function, if we return less than 0, then value a will be sorted as 
// less than value b. If we return greater than 0, value b will be sorted 
// before value a. If we want to reverse the order, we just reverse the logic.
// Returning 1 switches the order, returning -1 retains the order. 

// numbersArray.sort((currentValue, nextValue) => 
// {
//     return currentValue - nextValue;
//     // return currentValue > nextValue ? 1 : -1;
// });

// console.log(numbersArray);

// // There is little point in trying to sort an array of mixed value types. 

// // We have finished the bankist application at this point. 

// const retrieveMovementNumbersFromUI = (movementDiv) => 
//     Number(movementDiv.textContent.slice(0, -1).replace(" ", ""));

// const labelBalanceClickFunction = function(event)
// {
//     event.preventDefault();
//     const movementsNode = document.querySelectorAll(".movements__value");

//     const movementsArray = 
//         Array.from(movementsNode, retrieveMovementNumbersFromUI);

//     console.log(movementsArray);
// };

// labelBalance.addEventListener("click", labelBalanceClickFunction);

// 1. How many deposits with at least 1000 dollars? 

// const countHighDeposit = function(depositNumber, movementNumber)
// {
//     return movementNumber >= 1000 ? ++depositNumber : depositNumber;
// };

// const totalMovements = accounts.flatMap((account) => 
// {   
//     console.log(account.movements)
//     return account.movements;
// }).reduce(countHighDeposit, 0);

// console.log(totalMovements)

// 2. Create object with sum of deposits and withdrawals. 

const incrementMovementsObject = ((movementsObject, nextMovement) =>
{
    if (nextMovement > 0)
    {
        movementsObject["deposits"] += nextMovement;
    }
    else 
    {
        movementsObject["withdrawals"] += Math.abs(nextMovement);
    }
    return movementsObject;
});

const movementsObject = accounts.flatMap((account) => 
{
    return account.movements
}).reduce(incrementMovementsObject, {"deposits": 0, "withdrawals": 0});

console.log(movementsObject);

// 3. Create a Title Method 

function generateToTitleFunction()
{
    const expectations = ["a", "an", "the", "but", "or", "on", "in", "with"];
    return (wordString) => expectations.includes(wordString) ? wordString : 
            wordString[0].toUpperCase().concat(wordString.slice(1));
}

let titleString = "like a dragon isshin";

titleString = titleString.toLowerCase().split(" ").map(generateToTitleFunction()).join(" ");

console.log(titleString);