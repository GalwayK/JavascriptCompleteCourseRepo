"use strict";

/*
// Static import to import specific exports
import {arrCart as arrShoppingCart, addToCart, totalPrice as numPrice, 
    numQuantity} from "../modules/shoppingCart.js";

// Wildcard import to import entire module's exports.
import * as ShoppingCart from "../modules/shoppingCart.js";

// Import shopping cart
console.log("Importing modules.");
addToCart("Bleh", 10);

console.log(arrShoppingCart);
console.log(numPrice, numQuantity);

// Use exports from wildcard export. Wildcard export essentially exports a 
// public API, similar to the public API of a class.
ShoppingCart.addToCart("Millennium Falcon", 1);

// Default Exports: Used when we want to export one thing per module. Anything 
// we try to import from a module that doesn't exist will become the default.

import strDefault from "../modules/shoppingCart.js";
console.log(strDefault);

import strWrong from "../modules/shoppingCart.js";
console.log(strWrong);

// Both will use the default value.
console.log(strWrong === strDefault);

// We can import default and named exports at the same time - but don't.

import bech, { notDefault } from "../modules/shoppingCart.js";

// Default import.
console.log(bech);

// Named import.
console.log(notDefault);

arrShoppingCart.push("Blech", "Live connection!");

// Variables imported in JavaScript are actually live connections to the 
// same objects and variables. They point to the same place in memory.
import { printCart } from "../modules/shoppingCart.js";
printCart();
*/ 
// Top Level Await 
// const result = await fetch('https://jsonplaceholder.typicode.com/posts');

// const data = await result.json();

// console.log(data);
/*
Top level awaits allow for the use of asynchronous await without the use of a 
function. However, it will block the execution of the entire module while the 
await keyword waits for the result of the asynchronous execution. This is useful
for imported modules, but can severely slow down our applications if used 
carelessly.
*/ 

// This will only print after the await has stopped blocking.
// console.log("I am being oppressed!");

// const getLastPost = async function()
// {
//     const result = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await result.json();
//     return {title: data.at(-1).title, body: data.at(-1).body}
// };

// This function returns a promise. We can use await to get only the data. 
// However, this will block the execution of the entirety of the module. 
// const lastPost = await getLastPost();
// console.log(lastPost);

// If a module imports another module with a top level await, it will wait 
// until the imported module finishes the blocking code with the await.

// Will wait for await to end before running the module and importing.
// import {output} from "../modules/shoppingCart.js";

// Old Module Pattern

// CommonJS modules. 

// In addition to ES6 modules, there are CommonJS modules. All modules installed 
// NPM use the CommonJS module system, as while NPM was only ever intended to be 
// used with Node, it has since become the primary distribution center for 
// JavaScript modules for all purposes. An understanding of CommonJS is useful.
// In Node.js the export object is used to export modules and the require 
// keyword is used to import modules. This will be used more in Node.js.

// All module packing software is run on the command line. 
