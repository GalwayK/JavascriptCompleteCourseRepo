"use strict";
// console.log(`Height: ${document.documentElement.clientHeight}`);
// console.log(`Width: ${document.documentElement.clientWidth}`);

// Events

/* 
An event is a signal which has been triggered by a DOM node.
We listen for this signals with eventListeners. An event always happens when it 
occurs, even if we never handle it. The most important events are the mouse 
events and the keyboard events, such as mouseover, click, and keydown.
*/ 

// const headerOne = document.querySelector("h1");

// document.body.addEventListener("keydown", (event) =>
// {
//     console.log(event);
//     console.log(`You pressed the ${event.key} key!`);
// });

// We can directly listen to an event through the property of the element.
// This way of listening for events is considered outdated. We can only add 
// one event listener with this method, and a second will override the first.
// headerOne.onmouseenter = function(event)
// {
//     console.log(event);
//     console.log("You are scrolling in the header!");
// };

// We can remove event listeners. To do this, we need to declare the function.
// const funcAlertMouseHeader = function(event)
// {
//     console.log(event);
//     console.log("You are scrolling in the header!");
//     // Remove event after it has fired once.
//     headerOne.removeEventListener("mouseenter", funcAlertMouseHeader);

    // Remove event after timeout.
    // const proTimeout = new Promise((funcResolve, funcReject) => 
    // {
    //     setTimeout(function(funcResolve)
    //     {
    //         return funcResolve("Removing event listener.");
    //     }, 5000, funcResolve);
    // });

    // proTimeout.then((promise) => 
    // {
    //     console.log(promise);
    //     headerOne.removeEventListener("mouseenter", funcAlertMouseHeader);
    // });
    
// }
// headerOne.addEventListener("mouseenter", funcAlertMouseHeader);

// We can also directly add an event listener to an HTML element in the html 
// page, but we should never use it since it violates separation of duties. 
// This method also does not allow us to access the event object itself.

/*
Mouse events will trigger a mouse event object.
Key events will trigger key event object.
*/

// Event Handling Test

// console.log("Random: " + (parseInt(Math.random() * 255 + 1)));

// const funcMakeRandomColor = function()
// {
//   const arrColors = [];
//   for (let i = 0; i < 3; i++)
//   {
//     arrColors.push(parseInt(Math.random() * 255 + 1));
//   }
//   return `rgb(${arrColors[0]}, ${arrColors[1]}, ${arrColors[2]})`;
// };

// For event functions, this refers to element triggering event
// For event functions, the event object is the function argument
// For event functions, we can see the target element with event.target

// const funcChangeElementColor = function(event)
// {
    
//     this.style["background-color"] = funcMakeRandomColor();
//     console.log(this);
//     console.log(`Link Clicked! on ${event.currentTarget}`);
// };

// // Set addEventListener option to true will call on capture phase 
// document.querySelector(".nav__link").addEventListener("click", 
//     funcChangeElementColor, true);

// // Set addEventListener option to false will call on bubbling phase (default)
// document.querySelector(".nav__links").addEventListener("click", 
//     funcChangeElementColor, false);

// document.querySelector(".nav").addEventListener("click", 
//     funcChangeElementColor);
// document.querySelector(".nav").addEventListener("click", (event) => 
// {
//     // Stops bubbling propagation at current element.
//     event.stopPropagation();
// })

// document.querySelector("header").addEventListener("click", 
//     funcChangeElementColor);

// document.body.addEventListener("click", funcChangeElementColor);

////////////
// DOM TRAVERSAL 
/*
const headerOne = document.querySelector("h1");

// Going Downwards

// .childNodes returns all direct child nodes. 
// .children returns all direct child elements.
console.log(headerOne.childNodes);
console.log(headerOne.children);

// Retrieve first element child.
console.log(headerOne.firstElementChild);

// Retrieve first node child.
console.log(headerOne.firstChild);

// Retrieve last element child. 
console.log(headerOne.lastElementChild);

// Retrieve last node child.
console.log(headerOne.lastChild);

// Using query selector to locate an element's children and descendants.
console.log(headerOne.querySelector(".highlight"));

// Going Upwards 

// Retrieve parent element.
console.log(headerOne.parentElement);

// Retrieve parent node. 
console.log(headerOne.parentNode);

// Retrieve upwardly closest matching element in the DOM (or itself)
const closestHeader = headerOne.closest(".header");
closestHeader.style.background = "var(--gradient-secondary)";
// document.body.style.backgroundColor = "pink";

// closest can be considered the opposite of querySelector 
// Closest: Searches down the DOM tree through children (exclusive).
// Query Selector: Search up through the DOM tree through parents (inclusive).

// Going Sideways

// We can only access direct siblings in JavaScript

// Retrieve previous sibling element.
console.log(headerOne.previousElementSibling);

// Retrieve next sibling element.
console.log(headerOne.nextElementSibling);

// Retrieve previous sibling node.
console.log(headerOne.previousSibling);

// Retrieve next sibling node.
console.log(headerOne.nextSibling);

// Read children from parent element.
console.log(headerOne.parentElement.children);

let funcChangeSiblingStyles = function(element)
{
    const parentElement = element.parentElement;
    const arrSiblingElements = [...parentElement.children];

    arrSiblingElements.forEach(function(childElement)
    {
        console.log(childElement);
        if (childElement !== element)
        {
            console.log(childElement);
            childElement.style.backgroundColor = "pink";
        }
    })
};

funcChangeSiblingStyles.apply(funcChangeSiblingStyles, [headerOne]);
*/