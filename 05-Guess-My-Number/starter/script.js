'use strict';
document.querySelector(".message").textContent = "Please end my life.";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

const number = document.querySelector(".number").textContent;
console.log(number);

const button_check = document.querySelector(".check").addEventListener("click", () => 
{
    let guess = document.querySelector(".guess").value;
    console.log(`${typeof(guess)}: ${guess}`)
});

// What is the DOM? 

// DOM stands for Document Obect Model

// DOM: A structured representation of HTML documents that allows 
// javascrip to access html elements and styles to manipulate them. 
// The DOM is stored in a tree structure. Each element can contain
// other elements. These are known as child or parent elements. 

// Each element in an HTML page has a node in the DOM tree. Each 
// document tree starts with the parent object called document. The 
// document object is therefore the entry point to the DOM. Then, 
// it is followed by the HTML tag, which contains the HEAD and the
// BODY tags. 

// It is important to know that the DOM is not part of Javascript. 
// The DOM is just part of the WEB APIs, which are implemented by 
// browsers. They are libraries which are automatically available
// for use to use. All browsers use the same specifications for DOM. 
// There are other APIs for use to use. 

// An event is something that happens on the page. When we make an
// event listener, we can wait for certain events to happen, and 
// then perform data processing and computation when the event happens. 

