'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Arrays objects, which means that functions attached to arrays are methods. 
const testObject = 
{
    testNumber: 123
};

let testArray = ["a", "b", "c", "d", "e", testObject];

// Arrays have a slice method, similar to Strings. 

console.log(testArray.slice(0, 2));

// Slice otherwise works identically to String.slice(). This means that we can 
// use negative number to begin counting down from the end of an array, starting 
// at -1 being the last index. Likewise, 0 is always an array's first index. 

console.log(testArray.slice(-5, -1));

// Last Index
console.log(testArray.slice(-1));

// First Index
console.log(testArray.slice(0, 1));

// Will output b - d
console.log(testArray.slice(1, -1));

// If we use .slice() without any arguments, it will create a shallow copy.
// Note: We could also use the spread operator to create a shallow copy.
// Which option we use to clone an array is up to the user.
// testArray.slice()[5].testNumber = 321;
// console.log(testObject.testNumber);
let clonedArrayOne = testArray.slice();
let clonedArrayTwo = [...testArray];
console.log(clonedArrayOne);
console.log(clonedArrayTwo);

// The .splice() method works similarly to the slice() method, expect that it 
// does actually change the original array. We specify the start index, and the 
// number of elements to delete, and it wll delete those elements to the right.
// If there are no elements to delete to the right, it will stop deleting.

let testArrayTwo = [...testArray];
console.log(testArrayTwo);
// testArrayTwo.splice(2, 2);
// testArrayTwo.splice(-1, 1);
testArrayTwo.splice(1, 4);
console.log(testArrayTwo);

// We can use the reverse() to reverse the elements of an array. The 
// reverse method does also mutate the original array.
testArray.reverse();
console.log(testArray);
testArray.reverse();
console.log(testArray);

// We can use .concat() to combine two arrays. Concat does not mutate the 
// original array, so we must assign the return value if we want to save it.
// It is personal preference whether to use the spread operator or concat().
testArray = testArray.concat(["h", "g", "f"].reverse());
console.log(testArray);

// We can use join() if we want to return all of the elements of an array as 
// a string with a separator character or sequence we define. 

let testArrayString = testArray.join("--");
console.log(testArrayString);

// We can use the .at() method as a stand-in for brackets. 
// A unique trait of the .at() method is that it allows for negative indexing.
// It also allows for method chaining, and is more clean when moving backwards. 
const dummyArray = [23, 11, 64];
console.log(dummyArray.at(0));
console.log(dummyArray.at(-1));

// The .at() method also works on Strings. 

let testString = "Kyle";
console.log(testString.at(-1));

// Don't worry if you forget some of these: no one memorizes them completely.

// The foreach loop is an example of a higher-order function. We pass it a 
// callback function as an argument, and it will call this argument for each 
// element of the array. It will pass the element as an argument we can use.

function generateMovementFunction()
{
  return function(movement, index, movementsArray)
  {  
    console.log(`You have made ${index + 1} movements.`);
    console.log(`Remaining movements: `
      + `${movementsArray.slice(index).join(", ")}`);

    if (movement > 0)
    {
      console.log(`You depositied ${movement} dollars.`);
    }
    else if (movement < 0)
    {
      console.log(`You withdrew ${movement} dollars.`);
    }
    else 
    {
      console.log("Why was this recorded?");
    }
  }
}
// The foreach method will automatically pass in the current element, the index 
// of that element, and the entirety of the array. It does this even if you 
// do not specify them, or if you ignore them completely. Note that the order
// of arguments in the foreach argument is different than the order of 
// arguments in a array.entries() method. Also, we cannot ever break out of 
// a foreach loop. If we need to break a loop, we cannot use the foreach loop. 
movements.forEach(generateMovementFunction());
console.log();

// We can also use forEach to iterate over an entire Map. When we call forEach
// on a map, it will send in as arguments to the callback function the current 
// value, key, and the entire map. 
currencies.forEach(function(value, key, currenciesMap)
{
  console.log(`${key}: ${value}`);
});

const currenciesSet = new Set([...currencies.values()]);
console.log(currenciesSet);

// We can also use forEach to iterate through a Set, though it has a strange 
// interaction. The first two arguments are meant to match either index: value 
// or key: value, but sets don't have keys or indexes. As a result, both of the 
// arguments will just match the value of the element. It is this way only 
// because otehrwise this version of forEach would need a unique implementation.
currenciesSet.forEach(function(value, otherValue, currenciesSet)
{
  console.log(`${value}: ${otherValue}`);
});