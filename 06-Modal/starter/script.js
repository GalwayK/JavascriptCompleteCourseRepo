'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttonCloseModal = document.querySelector(".close-modal");
const buttonModals = document.querySelectorAll(".show-modal");

const openModal = function()
{
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    overlay.addEventListener("click", closeModal);
    document.addEventListener("keydown", keyEvent);
};

const closeModal = function()
{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    overlay.removeEventListener("click", closeModal);
    document.removeEventListener("keydown", keyEvent)
};

const keyEvent = function(event) 
{
    if (event["key"] === "Escape" && !modal.classList.contains("hidden"))
    {
        closeModal();
    }
};

for (let i = 0; i < buttonModals.length; i++)
{
    buttonModals[i].addEventListener("click", openModal);
};


buttonCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) =>
{
    console.log("Key event.");

    if (event["key"] === "Escape" && !modal.classList.contains("hidden"))
    {
        closeModal();
    }
});

// Handling keyboard events. 

// Still need to use event listener. 
// Keyboard events are global events - don't use  one element. 
// There are three keyboard events: 

// 1. Key down: Detects when any key is pressed down.
// 2. Key press: Detects when character keys are pressed.
// 3. Key up: Detects when any key is released. 

// When an event is called, an event object is created. 
// This object is automatically available as a parameter 
// to any event handler function. 

// We can also check to see if a element has a class with.
// element.classList.contains("class-name");

