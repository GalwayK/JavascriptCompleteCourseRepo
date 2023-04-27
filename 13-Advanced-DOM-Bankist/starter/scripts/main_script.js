'use strict';

///////////////////////////////////////
// Modal window

console.log("Welcome to Bankist!");

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const header = document.querySelector("header");
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const funcAddOpenModelEvent = (btnOpenModel) => 
{
  btnOpenModel.addEventListener("click", openModal);
}

btnsOpenModal.forEach(funcAddOpenModelEvent);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///////////////////////////////////////
// SELECTING ELEMENTS 

// The document object itself is not the actual DOM element for the entire page
// If we want to select the entire page we must use document.documentElement.
console.log(document.documentElement);

// We can select the head of the page with document.head
console.log(document.head.innerHTML);

// We can select the body of the page wit document.body
console.log(document.body.children);

// If we want to select multiple elements, we use querySelectorAll
// This returns a nodelist for all elements matching the search criteria.
const listSection = document.querySelectorAll(".section");
console.log(listSection);

// We can retrieve an element by exclusively its ID with getElementById()
console.log(document.getElementById("section--1"));

// We can retrieve an element by its tag name with getElementsByTagName()
// The getElementsByTagName returns an HTML collection, which is neither a node 
// list or an array. If the DOM changes, an HTML collection auto updates. We 
// can delete something fromt he DOm and the collection will remove that entry.
// A nodelist does not update itself, which can result is us calling elements 
// that no longer exist.
console.log(document.getElementsByTagName("button"));

// We can retrieve an element by class name with getElementByClassName()
// getElementByClassName also returns an HTML collection, not an array or list.
console.log(document.getElementsByClassName("btn"));

// CREATING HTML ELEMENTS 

// The easiest way to create an element is to use insertAdjacentHTML, which is 
// an easy an effective way to add HTML to a page. However, we can also create 
// our elements individually and then append them to the DOM ourselves.

// We can create an element with document.createElement.
const divMessage = document.createElement("div");

divMessage.classList.add("cookie-message");
console.log(divMessage.classList);

// divMessage.textContent = "This site uses cookies for improved analytics";
divMessage.innerHTML = "This site uses cookies for improved performance"
  + " <button class = 'btn btn--close-cookie'>"
  + " Got it! </button>";

// We can add an element to the start of another element with prepend.
header.prepend(divMessage);

// Or to the end of another element with append.
// header.append(divMessage);

// An element can only be present in the DOM once. If we insert an element 
// elsewhere in the application, it will move it and forget the old location.
// If we want to have multiple copies of the same element, we need to copy it. 
// If the argument is set to true, it will also copy the elements children.

// header.prepend(divMessage.cloneNode(true));

// If we want to insert an element before the start of another element, we can 
// use the before method. 
// header.before(divMessage.cloneNode(true));

// And if we want to insert an element after the end of anoter element, we can 
// use the after method. 
// header.after(divMessage.cloneNode(true));

// DELETING ELEMENTS 
// We can remove an element with remove. If we want to remove anonymous 
// elements, we may need to locate them from the DOM. The remove element is a 
// recent addition to JavaScript. Previously, we had to remove the child of a 
// parent element with removeChild. While not needed anymore, it is common.

const listBtnCookies = document.querySelectorAll(".btn--close-cookie");

listBtnCookies.forEach((btnCookies) => 
{
  btnCookies.addEventListener("click", (event) => 
  {
    event.preventDefault();
    event.target.parentNode.remove();
    // header.removeChild(divMessage);
  })
}
);

// Moving up and down the DOM tree is known as DOM traversing.

// STYLE, ATTRIBUTES, AND CLASSES 

// Styles set with the DOM are considered inline styles. Inline styles have the 
// highest priority of the CSS style types, and will always take priority.

// To set a style on an element, and then access the style field.
divMessage.style["background-color"] = "#37383d";
divMessage.style["width"] = "120%";
divMessage.style["height"] = "10vh";

// We cannot read the styles of an element unless the style has been set with 
// an inline style. We cannot read the style from a class or ID selector. The 
// style must be directly applied to the element itself. 
console.log(divMessage.style);

// We can however get the effective styles of an element with the get computed 
// style method. We can select specify styles usin the output of this method.
// The get computed style method even allows us to retrieve class and id styles.

console.log(getComputedStyle(divMessage).width)
console.log(getComputedStyle(divMessage));
console.log(`The height is: ` + getComputedStyle(divMessage).height);

divMessage.style.height = (parseFloat(getComputedStyle(divMessage).height) + 1) + "px";

console.log("The height is now: " + getComputedStyle(divMessage).height);

// We can also customize CSS custom properties. CSS custom properties are stored
// in the root document (not the global document) and changed with set property.
document.documentElement.style.setProperty("--color-primary", "orangered");

const eleLogo = document.querySelector(".nav__logo")

// We can access all of the attributes of an element by simply point to the 
// attributes name from the element. 
console.log(eleLogo);
console.log(eleLogo.src);

// However, we cannot access any non-standard HTML attributes. Only attributes 
// which the element will have inherited or obtained from the DOM. If the 
// element has an unique attribute called designer, we will not be able to 
// access this attribute with eleLogo.designer since it is not standard.

// We can retrieve the class string of an element with className
console.log(eleLogo.className);

// If we do want to see a non-standard attribute, we can use the getAttribute 
// method with the name of the non-standard attribute. 
console.log(eleLogo.getAttribute("designer"));

// We can set the value of a non-standard attribute with simple dot notation or 
// with setAttribute. Both work. 
eleLogo.alt = "This is the alt text.";
eleLogo.setAttribute("company", "Bankist");
console.log(eleLogo.getAttribute("alt"));
console.log(eleLogo.getAttribute("company"));

// The src for an image we retrieve with dot versus with getAttribute are not 
// the same. The dot notation will return the absolute filepath, while get 
// attribute will return the relative filepath.

// dot notation returns absolute filepath.
console.log(logo.src);

// get attribute returns relative filepath.
console.log(logo.getAttribute("src"));

const linkStyle = document.getElementById("style-link");

console.log(linkStyle);
// dot notation returns absolute href 
console.log(linkStyle.href);
// get attribute returns relative link 
console.log(linkStyle.getAttribute("href"));

// Lastly, there are data attributes, which are special attributes that start 
// with data-. These can be accessed in the dataset field of the element. Note 
// that the name of the dataset will be changed into camelcase and the data-
// portion of the attribute will be removed. So data-version-number will become 
// dataset.versionNumber.

// console.log(eleLogo.dataset.versionNumber);

// The four main methods for classes are add, remove, toggle, and contains 
// Add: Adds a class to an element. 
// Remove: Removes a class from an element. 
// Toggle: Adds or removes a class for an element. 
// Contains: Returns true if element contains the class. 

// eleLogo.classList.add("test-class");
// eleLogo.classList.add("toggle-class");
// console.log(eleLogo.classList);

// eleLogo.classList.remove("test-class");
// console.log(eleLogo.classList);
// eleLogo.classList.toggle("toggle-class");
// console.log(eleLogo.classList);
// console.log(eleLogo.classList.contains("toggle-class"));
// eleLogo.classList.toggle("toggle-class");
// console.log(eleLogo.classList);
// console.log(eleLogo.classList.contains("toggle-class"));

// We can also add a class with classname, but this is generally messy.
eleLogo.className += " wrong-jonas";
console.log(eleLogo.classList);

///////////////////////////////////////
// Notes 


// This section will focus on JavaScript for advanced DOM manipulation.
// When we set the location of an anchor tag to a hash, clicking it will make 
// the page jump to top. 

///////////////////////////////////////
// PART ONE: HOW THE DOM WORKS BEHIND THE SCENES

// What is the DOM? The DOM is the interface between the JavaScript code and
// the browser. Interaction with the DOM allows for the creation of dynamic 
// events. The DOM can allow us to make JavaScript interact with the browser. 
// We can write JavaScript to create, modify, and delete HTML elements, set 
// styles, classes, and attributes, and listen and respond to events. 
// The DOM tree is generated from an HTML document, which can be interacted
// with. DOM is a complex API that contains many methods and properties for 
// interacting with the DOM tree, such as querySelector, textContent, and more.

// There are many different kinds of nodes in the DOM. HTML elements are only a 
// type of node present on the DOM. For example, text itself can be a node. 
// All nodes in the DOM tree are of the type node, which is an object. This 
// object has access to special node properties and methods. The node type has 
// a number of child types, such as element, text, comment, and document type.

// Even comments go into the DOM.  

// The element node type in particular has access to the most important methods 
// for modifying the DOM. All elements also have a child type, such as a type 
// for buttons, images, links, and so on for each type of tag. This matters as 
// different tags can have different properties: images have an src, as example. 

// What makes the DOM work is inheritance. In other words, all child types have 
// access to all of the properties of their parent node type. An image element
// has access to the parent element type, which receives everything from the 
// mode type. An anchor element is also an element which is also a node. This is
// an example of object oriented programming. 

// The document itself is just another type of node with important methods for 
// selecting other nodes. Note that the querySelector method is available on 
// both the document and on the element node type. This allows for the selection
// of any tag either on the page or within a different element. 

// One of the reasons we are able to add event listeners to any element is 
// because there exists a parent node called the EventTarget which is a parent 
// of both the node type and the global window object (which is not neccessarily
// related to the DOM) which allows us to apply event listener to its children. 

// We never manually create the more abstract object types. They just provide a 
// blueprint for requiring its children nodes to have the correct properties. 


///////////////////////////////////////
// Event Propagation: Bubbling and Capturing 

/*
JavaScript events have a capturing phase and a bubbling phase. 

Capturing Phase:
When a event is trigger, the DOM generates an event. This event is not 
actually generated at the target element, but at the root of the document. 
The event then travels all the way down the document to the target element. 
It will pass through all of the parent elements until it reaches the target 
element. While by default events are not handled in the capturing phase, events 
can be set up such that they are handled during this first phase. 

Target Phase: 
Once it reaches the target, the target phase begins, where event 
listeners are handled through the callback function. 

Bubbling Phase: 
The event then bubbles back upwards until it reaches the top of the document. 
Any parents which also have the event listener will run these events as if on 
their own target phase. If we activate a click event with a funcClickEvent on a 
child node, but also attach that click event to every parent, it will fire the 
funcClickEvent function on every single one of that child's parents backwards
as it bubbles to the top of the DOM.

Note that not all events have a capturing and bubbling phase. Most events do 
have a capturing and bubble phase. The functions called by these events will 
have the this keyword point to the current element, while the event will refer
to the target element which originated the event propagation process. We can 
also see the current element with the current target event property. The 
current target will always be the same as the this keyword. 

This process is known as event propagation. We can stop event propagation.
If we set an event listener to listen to the event on the capture phase, it 
will run the function before any of the functions in the bubbling phase. 

An example use of event propagation is event delegation, where we apply event 
listeners to parent elements to catch the event listeners of their children. 
This allows us to only apply a single event listener to the parent, instead of 
applying many separate event listeners to the children, which saves processing.
It also allows us to catch events on elements that did not exist on runtime, by
catching these events in the parent of the element instead of on the
*/

/*
An HTML page goes through numerous events over the lifecycle of the page. 

As soon as the HTML and JavaScript have been loaded, the page will send a
DOMContentLoaded event, which indicates that the DOM tree has been loaded. 

When the page itself has loaded all external links and resources, such as styles 
and images, the window will emit a load event.

Finally, before the page is unloaded, it will trigger a beforeunload event. 
The default of this event can be prevented to display a confirmation prompt.
*/

/*
Loading JavaScript 

There are two additional ways of loading JavaScript into a page: defer and async

Defer: The HTML page will completely load first, and then the JavaScript will 
execute. This is usually the best and safest way to load scripts and will result 
in the DOMContentLoaded event firing quicker than usual, and guarantees that the
scripts will have access to the complete DOM. 

Async: The HTML page will load the page until it comes across the script. It 
will load the script asynchronously with the HTML page, but will still pause 
execution in order to execute the script. It usually results in faster loading
but you must ensure that your scripts do not accidently try to access content 
which has not yet loaded. Best when your have many independent scripts.

Standard: The HTML page will load until it encounters a script, then load and 
completely execute that script. It will then continue loading the HTML page. 
This results in slower page loading and can cause the scripts to not have access
to DOM elements if the script executes before they have finished loading.

Typically on standard the script tag must be put at the bottom of the page to 
ensure the DOM has loaded. With defer, the script tag can be put in the head.

Defer and async are only supported by modern browsers. On older browsers, to 
ensure that scripts executed in the head only run after the page has loadded, 
the entire script can be put in a window.onload event.

*/

// MISC 

// Document.querySelctorAll returns a Nodelist, which has some but not all of 
// the methods of an array. It does have a forEach method, but we may have to 
// convert a nodelist into an array for other methods. 
