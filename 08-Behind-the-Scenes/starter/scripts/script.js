"use strict";

// const CURRENT_YEAR = 2023;

// function calcAge(birthyear)
// {
//     let age = CURRENT_YEAR - birthyear;
//     function printAge()
//     {
//         const output = `Hi ${firstName}, you are ${age}, born in ${birthyear}.`;
//         console.log(output);
//     }
//     printAge();
//     if (birthyear > 1981 && birthyear < 1996)
//     {
//         let millenial = `Oh, I didn't realize you were an argonian!`;
//         console.log(millenial);
//     }
//     else 
//     {
//         let millenial = "Thank the Heart you aren't an argonian!";
//         console.log(millenial);
//     }
//     return age;

// }

// let firstName = "Kyle";
// calcAge(1997);
// console.log(firstName)

// __________________________________________________________________________//

// console.log(me);
// //console.log(job);
// //console.log(birthyear);

// var me = 'Kyle';
// let job = "Researcher";
// const birthyear = 1997;

// console.log(addDecl(1, 2));
// //console.log(addExpr);
// console.log(addArrow);


// function addDecl(a, b)
// {
//     return a + b;
// }

// const addExpr = function(a, b)
// {
//     return a + b;
// }

// var addArrow = (a, b) => 
// {
//     return a + b;
// }

// // Example of Hoisting Pitfalls
// if (!numberOfProducts)
// {
//     deleteCart();
// }

// var numberOfProducts = 1;

// function deleteCart()
// {
//     console.log("All products deleted.");
// }

// ___________________________________________________________________________//

// console.log(this);

// const calculateAge = function(birthyear)
// {
//     console.log(2023 - birthyear);
//     console.log(this);
// }
// calculateAge(1997);

// const calculateAge = (birthyear) =>
// {
//     console.log(2023 - birthyear);
//     console.log(this);
// }
// calculateAge(1997);

// const kyle = {
//     birthyear: 1997, 
//     calcAge: function()
//     {
//         console.log(2023 - this.birthyear);
//     }
// };
// kyle.calcAge();

// const matilda = {
//     birthyear: 2017
// };

// matilda.calcAge = kyle.calcAge;
// matilda.calcAge();

// let f = kyle.calcAge;
// f();
// var firstName = "Liam";
// const kyle = {
//     firstName: "Kyle",
//     birthyear: 1997, 
//     calcJoy: function()
//     {
//         const a = () =>
//         {
//             console.log(this.firstName);
//         }
//         a();
//     },


//     calcAge: function()
//     {
//         const self = this;
//         function getThis(self)
//         {
//             console.log(self.birthyear);
//         }
//         getThis(self);


//         console.log(2023 - this.birthyear);
//     }
// };

// kyle.calcJoy();
 
// function testFuction(a, b)
// {
//     console.log(arguments);
//     console.log(a + b + arguments[0]);
// }

// testFuction(2, 1, 3);

// This section covers how Javascript works behind the scenes. 

// HIGH LEVEL OVERVIEW OF JAVASCRIPT 

// Javascript is a "high-level", "object-oriented", "multi-paradigm" programming language. 
// We could also call Javascript a high level, prototype-based, object-oriented, multi-
// -paradigm, dynamic, single-threaded, garbage-collected programming language with first-
// -class functions and a non-blocking event loop concurrency model. 

// This is all word salad. 

// High-level: All computers have resources such as memory or compute power which must be
// managed. Lower-level languages require the programming to manage these resources, while 
// higher level languages will manage them for you. Javascript is a high-level language, 
// which means it handles these resources for us - but it isn't as fast as a lower-level 
// language. 

// Prototype-based Object-Oriented: Almost everything in Javascript is an object. We 
// create arrays and other objects from prototype templates which allows every class 
// to inherit the parent's methods. 

// Multi-paradigm: Javascript is capable of multiple programming paradigms: such as 
// object-oriented, functional, and procedural. Paradigms can be defined as imperative or 
// as declarative. As a result, Javascript is extremely flexible. 

// Interpreted: Javascript is processed line by line through interpretation, instead of all 
// at once through compilation.

// Dynamic: Javascript used dynamic typing. We do not need to specify the data type of 
// our variables. Most programming languages require us to manually type variables. 

// Single-threaded: Javascript runs on only one thread, so it can only do one thing at 
// a time. This requires us to use non-blocking behaviour through the non-blocking event 
// loop. 

// Non-blocking event loop: The event loop takes long running tasks, executes them in the 
// background, and then puts them back in the main thread once they are finished. 

// Garbage-collected: An algorithim which will automatically remove old and unused objects 
// from the computer's memory. 

// First-class functions: All functions are treated as values which can be assigned to 
// variables. This allows for functional programming. 

// THE JAVASCRIPT ENGINE

// Javascript Engine: A program that executes Javascript code. Google's V8 is the most
// powerful and most well known Javascript engine. All other browsers have their own 
// Javascript engines. 

// All Javascript engines contain a call stack and a heap. 

// Call Stack: Where the code is executed using execution contexts. 
// Heap: An unstructured heap which objects are stored in memory. 

// All computers need programs to be converted into machine code through either 
// compilation or interpretation. 

// Compilation: The entire source code is converted into machine code at once, and 
// then converted into an executable file that is run on the computer. A file may 
// be compiled long before it is run, and is generally faster than interpretation. 

// Interpreter: The source code is executed line by line. The code must be interpreted
// right before it is executed, and interpreted languages are always much slower 
// than compiled languages. 

// Javascript engines used a mix between compilation and interpretation, called 
// Just-in-time Compilation. 

// Just-in-time Compilation: The entire code is converted into machine code at once, 
// and then executed immediately. 

// Steps to Javascript JIT Compilation

// 1. When a Javascript script enters the engine, it is first parsed into a data 
// structure called the abstract syntax tree. This step also checks for syntax errors. 

// 2. The generated abstract syntax tree is compiled into machine code. 

// 3. The generated machine code is executed immediately. 

// 4. While the code is being run, the first pass of machine code is optimized while
// the code is being run, letting later lines of code run faster than the initial 
// lines, while having the fastest possible start time. 

// JAVASCRIPT RUNTIMES

// A Javascript runtime is a container which holds all of the things we need in
// order to run Javascript, including a Javascript engine, but also web APIs, 
// which includes the DOM, Timers, and other functionalities, and the Callback Queue, 
// which contains all of the callback functions which will be passed into the 
// call stack by the event loop. 

// If Javascript is run outside of the browser, it does not have access to the 
// web APIs, which are provided by the browser. Node.js has accessed to C++ 
// bindings, for example. 

// EXECUTION CONTEXT

// When code is compiled, a global execution context is created for the top
// level code, which is code that is not inside any function. Only code which
// outside of functions are called. 

// An execution context is an abstract concept defined an environment in which
// a piece of Javascript code is executed. Code is always run inside of an 
// execution context. There is only ever one global execution context. Once thre 
// top level code is finished, the functions are run. Each function has its own 
// execution context, and the same goes for methods (which are object functions).

// When all functions are done executing, the engine will keep waiting for 
// callback functions to arrive, which are provided by the event loop. 

// Things contained in the execution context. 

// 1. Variable environment. 
// This contains all let, const, and var declarations, all functions, and the 
// arguments object. 

// 2. Scope chain.
// Consists of references to variables that are located outside of the current 
// function. 

// 3. this keyword 
// References the current object. 

// All parts of the execution context are created during the creation phase 
// right before execution. It is also noteworthy that arrow functions do not 
// get their own this keyword or the arguments keyword. All execution contexts 
// are run in the call stack, with the current context location at the top 
// of the stack, and the older contexts being swapped in as older contexts
// are finished and return their values. 

// SCOPE AND SCOPE CHAIN 
// Each execution context has a variable environment, a scope chain, and a this 
// keyword. 

// Scoping: Controls how our program's variables are organized and accessed. 

// Javascript used Lexical scoping, which means that scoping is controlled by 
// placeent of functions and blocks in the code. Functions have access to their 
// parent's variables. 

// Scope: The space or environment in which a certain variable is declared 
// (variable environment in case of functions). There is global scope, function
// scope, and block scope. 

// Scope of a Variable: Region of our code where a certain variable can be accessed. 

// Global Scope: Outside of any function or block. Variables declare in global scope 
// are accessible everywhere. 

// Function Scope: Variables are accessible inside that function, not outside. Also 
// called local scope. Not accessible outside of the function. Var variables can be 
// contained within function scopes.

// Block Scope: All blocks, such as if statement or loop blocks, create their own 
// scope. This only applies to let and const variables. Functions are also block 
// scoped when using strict mode. 

// The scope chain only works upwards, not downwards, or sideways. 

// Scoping asks the question: where do variable live, and where can be access them? 
// Variables can be let, const, and var. 
// Scopes are global, function, and block.
// Var variables end up in the closest function block, or the global scope. 
// Every scope has access to the variables from of its outer scopes (scope chain).
// Looking into an upward scope for a variable is called scope lookup.
// If Javascript can find a variable in the nearest scope, it won't do scope lookup. 

// HOISTING AND THE TDZ

// Execution contexts contains three parts, the scope chain, variable environment, and 
// the this keyword. 

// Javascript has a mechanic called hoisting, in which certain variables are often pulled
// to the top of their scope. It is however more complicated. 

// Before being run, code is scanned for variable declarations during the creation phase. 
// For each variable found in the code, a new property is created in the variable 
// virtual environment. 

// Function variables ARE hoisted. Their initial value is the actual function, and they 
// are block scope. 

// Variables with var ARE hoisted. Their initial value is undefined, and they are 
// function scoped. 

// Variables with let and const ARE NOT hoisted. Their initial value is uninitialized. 
// They are block scoped. They occupy a temporaral dead zone (TDZ), and if we try to use
// one of these variables before they are initialized, they will produce an error. 

// Function expressions and arrow functions depend on the variable declarations, since 
// they are variables. Functions with var are hoisted to undefined, while functions with 
// let and const are not hoisted and occupy the temporaral dead zone (TDZ).

// The TDZ makes it easy to avoid and catch errors by disallowing the use of variables 
// before they are defined by giving us an error whenever we try to use it. Also, if 
// we let const be hoisted, it would technically not be a true constant as they would 
// need to be changed to a different value later. 

// Since we can't remove var without completely breaking older codebases, we just made 
// let and const take over for it. 

// THIS KEYWORD 

// The this keyword is a special variable that is created for every execution context, 
// and therefore every function. The this keyword will always take the value of the 
// owner the the function. The value of the this keyword is not static. It depends 
// on how the function is called, and it only has a value when the function is called. 
// We can use it to access all of the properties of the owner of the function. 

// Ways of calling functions. 

// 1. Method: This refers to the object calling the method. 

// 2. Function Call: This will be undefined for strict mode, or the window. 

// 3. Arrow Function: Do not get their own this keyword, uses the surrounding this. 

// 4. Event Listener: This will point to the DOM element the handler is attached to. 

// 5. The new, call, apply, and bind function calls will be covered later. 

// We should not use arrow functions as methods. However, we should use them as 
// functions which are contained inside of methods, as the arrow function's 
// lack of a personal this keyword allows it to use the parent method's this 
// keyword to use the object's parameters. 

// The arguments keyword gets all of the extra variables which are passed to a 
// function in an array-like structure. We can loop over this array to obtain the 
// extra variables. 

// Like with the keyword, we don't get to use the arguments keyword for arrow
// functions. 

//  let age = 30; 
//  let oldAge = age; 
//  age = 31;
//  console.log(age);
//  console.log(oldAge);

//  const me = 
//  {
//     name: "Kyle", 
//     age: 25
//  };

//  const friend = me;
//  friend.name = "Liam";
//  friend.age = 21;

//  console.log(me);
//  console.log(friend);

// The only primitive data types are number, string, boolean, undefined, null 
// symbol, and BigImt. All other data types are objects. 

// While primitives are call by value, objects are called by reference. 
// Objects are therefore considered reference types. 

// This means that the value of an object only points to its location in the heap. 
// When we assign an object to a varriable, we are assigning its memory address 
// to that variable. This can be annoying and introduce bugs, but can also 
// be used to pass around objects quite easily. 

// In other words, the address in the call stack of an object just points to the 
// location in the heap. If we try to assign an obect as a value, we'll actually just
// create two pointer variables which point to the object. We must construct a new 
// object if we want to create a new object. 

let lastName = "Williams";
let oldName = lastName; 
lastName = "Galway";

console.log(lastName);
console.log(oldName);

const unmarriedJessica = 
{
    name: "Jessica"
}

console.log(unmarriedJessica);

const marriedJessica = Object.assign({}, unmarriedJessica);

marriedJessica.name = "Bleh";

console.log(marriedJessica);
console.log(unmarriedJessica);

// The assign function only creates a shallow copy of the object. In 
// other words, it will copy the values of any inner variables in the 
// exact same way it will copy the values of any other variable. If there 
// is an inner object variable, the value of the assigned object's inner 
// variable will point to the same location in the memory as the original 
// inner object. 