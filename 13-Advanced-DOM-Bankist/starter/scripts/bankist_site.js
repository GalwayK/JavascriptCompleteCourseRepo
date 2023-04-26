'use strict';

///////////////////////////////////////
// Modal window

console.log("Welcome to Bankist!");

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const header = document.querySelector("header");
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const sectionOne = document.querySelector("#section--1");
const btnScrollTo = document.querySelector(".btn--scroll-to");

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

// CODE BEGINS HERE 
///////////////////////////////////////

// IMPLEMENTING COOKIE MESSAGE

const divMessage = document.createElement("div");

divMessage.classList.add("cookie-message");
console.log(divMessage.classList);

divMessage.innerHTML = "This site uses cookies for improved performance"
  + " <button class = 'btn btn--close-cookie'>"
  + " Got it! </button>";

header.prepend(divMessage);

const listBtnCookies = document.querySelectorAll(".btn--close-cookie");

listBtnCookies.forEach((btnCookies) => 
{
  btnCookies.addEventListener("click", (event) => 
  {
    event.preventDefault();
    event.target.parentNode.remove();
  })
}
);

divMessage.style["background-color"] = "#37383d";
divMessage.style["width"] = "120%"; 
divMessage.style["height"] = "10vh";

// SMOOTH SCROLLING 
const funcScrollToSectionOne = function(event)
{
    // Get rectangle boundary, which contains the bounding box of section one.
    const rectBound = sectionOne.getBoundingClientRect();

    // Top of bounding box indicates distance from top of viewport to element
    // Add current window scroll height to obtain required scroll distance.
    console.log(rectBound.top);

    // Use scrollTo method to scroll to y coordinate of section from top of view
    // Must add current view scroll height to obtain correct scroll distance.
    // window.scrollTo(rectBount.left, rectBount.top + window.scrollY);

    // Use object to customize scrolling to add smoother scroll behaviour.
    // const scrollObject = {
    //     left: rectBound.left + window.scrollX,
    //     top: rectBound.top + window.scrollY, 
    //     behavior: "smooth"
    // }

    // window.scrollTo(scrollObject);

    // Use modern scroll into view method to handle scroll distance. 
    // Only works on more modern browsers. 
    const modernScrollObject = {"behavior": "smooth"}
    sectionOne.scrollIntoView(modernScrollObject);

}

btnScrollTo.addEventListener("click", funcScrollToSectionOne);

// Page Navigation 

// Old way of implementing smooth scrolling.
// const funcScrollToSection = function(event)
// {
//   event.preventDefault();
//   const strSectionId = this.getAttribute("href");
//   const eleSection = document.querySelector(strSectionId);
//   eleSection.scrollIntoView({"behavior": "smooth"});
// };

// document.querySelectorAll(".nav__link").forEach(function(element)
// {
//   element.addEventListener("click", funcScrollToSection)
// });
// Problem with above: requires adding event handler to every single element.

// Alternative: Catch event during bubbling phase on the parent element.

function funcScrollToSection(event)
{
  event.preventDefault();
  const eleTarget = event.target;
  if (eleTarget.className === "nav__link")
  {
    const strSectionId = eleTarget.getAttribute("href");
    const eleSection = document.getElementById(strSectionId.slice(1));
    const boxSection = eleSection.getBoundingClientRect();
    const scrollOptions = 
    {
      top: boxSection.top + window.scrollY,
      left: boxSection.left + window.scrollX,
      behavior: "smooth"
    };
    window.scrollTo(scrollOptions);
  }
};

document.querySelector(".nav__links").addEventListener("click", 
  funcScrollToSection);

// OPERATIONS TABS 

const divOperations = document.querySelector(".operations");

const funcTabEvent = function(event)
{
  const targetButton = event.target.closest(".operations__tab");

  if (targetButton)
  {
    function funcDeactivateSiblings(childElement)
    {
      if (childElement !== targetButton)
      {
        childElement.classList.remove("operations__tab--active");
      }
    }

    function funcToggleOperations(divContent, numIndex)
    {
      if (numIndex != numTab)
      {
        divContent.classList.remove("operations__content--active");
      }
      else 
      {
        divContent.classList.add("operations__content--active");
      }
    }

    const arrSiblings = [...targetButton.parentElement.children];
    arrSiblings.forEach(funcDeactivateSiblings);

    targetButton.classList.add("operations__tab--active");
    const numTab = parseInt(targetButton.dataset.tab) - 1;

    const arrContent = [...divOperations
      .getElementsByClassName("operations__content")];
    arrContent.forEach(funcToggleOperations)
  }
};

divOperations.addEventListener("click", funcTabEvent);