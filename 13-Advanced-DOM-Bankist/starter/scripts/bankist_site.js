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
const boundSectionOne = sectionOne.getBoundingClientRect();
const btnScrollTo = document.querySelector(".btn--scroll-to");
const navLinks = document.querySelector(".nav__links");
const divNav = document.querySelector("nav");
const divOperations = document.querySelector(".operations");
const arrSections = document.querySelectorAll("section");
const arrLazyImages = [...document.querySelectorAll("img[data-src]")];
const arrSlides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnSlideLeft = document.querySelector(".slider__btn--left");
const btnSlideRight = document.querySelector(".slider__btn--right");
const dotsContainer = document.querySelector(".dots");


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

function funcImplementCookieMessage()
{
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
}
funcImplementCookieMessage();

// SMOOTH SCROLLING 
function funcImplementSmoothScrolling()
{
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
}
funcImplementSmoothScrolling();

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

function funcImplementSectionScrolling()
{
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

  navLinks.addEventListener("click", 
    funcScrollToSection);
}
funcImplementSectionScrolling();

// OPERATIONS TABS 

function funcImplementOperationTabs()
{
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
}
funcImplementOperationTabs();
// Menu fade Animation

// Use mouseover event (mouseenter does not bubble)

// Cannot pass additional arguments into event handler function. 
// Must use a wrapper function or bind to this keyword for args.
function funcImplementMenuFade()
{
const funcChangeFocus = function(event, strOpacity)
  {
    if (event.target?.classList.contains("nav__link"))
    {
      const navParent = event.target.closest(".nav");
      const elementHovered = event.target;

      const arrSiblings = [...navParent.querySelectorAll(".nav__link")]
        .filter((elementChild) => 
      {
        return elementChild != elementHovered ? elementChild : null;
      });

      arrSiblings.push(navParent.querySelector("img"));
      arrSiblings.forEach((sibling) => sibling.style.opacity = strOpacity);
    }
  };

  // Wrapper callback function for unfocusing siblings.
  const funcFocusEvent = function(event)
  {
    // Binding this for function to event this.
    funcChangeFocus.apply(this, [event, "0.5"]);
  };

  // Wrapper callback function for focusing siblings.
  const funcUnfocusEvent = function(event)
  {
    funcChangeFocus.call(this, event, "1.0");
  };

  // We must pass in our own argument to the event callback function.
  // We can use a wrapper callback function or functions to add arguments.
  divNav.addEventListener("mouseover", funcFocusEvent);
  divNav.addEventListener("mouseout", funcUnfocusEvent);
}
funcImplementMenuFade();

/*
Alternative: Using function binding to declare this keyword with custom args.
divNav.addEventListener("mouseover", funcChangeFocus.bind("0.5"), true);
divNav.addEventListener("mouseout", funcChangeFocus.bind("1"), true);
*/

// Attaching Navigation Bar with Scroll Event (BAD)

// function funcHandleScrollEvent(event)
// {
//   const divNav = document.querySelector(".nav");
//   const numSectionOneTop = boundSectionOne.top;
//   if (window.scrollY >= numSectionOneTop)
//   {
//     divNav.classList.add("sticky");
//   }
//   else 
//   {
//     divNav.classList.remove("sticky");
//   }
// }

// Add scroll event listener to window. Scroll event is not efficient - avoid!
// window.addEventListener("scroll", funcHandleScrollEvent);

// Attaching Navigation Bar with Intersection Observer API (GOOD)
// Intersection observer can observe changes between elements. 
// Requires a observer callback function and observer options object.

function funcImplementStickyHeader()
{
  const observerOptions = 
  {
    // Root as null compare to entire viewport
    root: null, 
    // Threshold is percent of element which must be intersecting
    threshold: 0,
    // Create margin for intersection equal to navigation bar height
    rootMargin: `-${getComputedStyle(divNav).height}`
  };

  const funcObserveCallback = function(entries, observer)
  {
    const [entry] = entries;
    
    entry.isIntersecting ? 
      divNav.classList.remove("sticky") : divNav.classList.add("sticky");
  }

  // Construct new Intersection Observer object.
  const headerObserver = new IntersectionObserver(funcObserveCallback, 
    observerOptions);

  headerObserver.observe(header);
}
funcImplementStickyHeader();

// Revealing Elements on Scroll
function funcImplementSectionReveal()
{
  function funcRevealSection(entries, observer)
  {
    const [entry] = entries;

    if (entry.isIntersecting)
    {
      entry.target.classList.remove("section--hidden");
      observer.unobserve(entry.target);
    }
  }

  const sectionOberverOptions = 
  {
    root: null, 
    threshold: 0.15
  };

  const sectionObserver = new IntersectionObserver(
    funcRevealSection, sectionOberverOptions);

  arrSections.forEach(divSection =>
  {
    divSection.classList.add("section--hidden");
    sectionObserver.observe(divSection);
  });
}
funcImplementSectionReveal();

// Lazy Loading Images 

// Images have a large impact on performance and should only load when needed
function funcImplementImageLoading()
{
  const funcLazyLoadImage = (entries, observer) =>
  {
    const [entry] = entries;

    if (!entry.isIntersecting) return null;

    const funcRemoveImageBlur = function(event)
    {
      event.target.classList.remove("lazy-img")
    };

    entry.target.addEventListener("load", funcRemoveImageBlur);

    const imgSrc = entry.target.dataset.src;
    entry.target.src = imgSrc;
    observer.unobserve(entry.target);
  };

  const imgObserverOptions = 
  {
    root: null, 
    threshold: .20,
    rootMargin: (parseInt(getComputedStyle(document.body).height) / 10) + "px" 
  };

  const imgObserver = new IntersectionObserver(funcLazyLoadImage, imgObserverOptions);

  arrLazyImages.forEach(img => imgObserver.observe(img));
}
funcImplementImageLoading();

// Implementing Slider Component

// slider.style.transform = "scale(0.5)";
// slider.style.overflow = "visible";
function funcImplementSlider()
{
  arrSlides.forEach((divSlide, numIndex) =>
  {
    console.log(divSlide);
    divSlide.style.transform = `translateX(${100 * numIndex}%)`;
  });

  let currentSlide = 0;

  function funcSlide(event)
  {
    [...dotsContainer.children].forEach(funcUpdateDots);

    arrSlides.forEach((divSlide, numIndex) =>
    {
      divSlide.style.transform = 
        `translateX(${100 * (numIndex - currentSlide)}%)`;
    });
  }

  function funcSlideLeft(event)
  {
    currentSlide = currentSlide === 0 ?
      arrSlides.length - 1 : 
      currentSlide - 1;

    funcSlide(event);
  }

  function funcSlideRight(event)
  {
    currentSlide = currentSlide === arrSlides.length - 1 ?
      currentSlide = 0:
      currentSlide + 1;

    funcSlide(event);
  }

  function funcHandleKeyEvent(event)
  {
    event.key === "ArrowRight" ? funcSlideRight(event) : 
      event.key === "ArrowLeft" && funcSlideLeft(event);
  }

  function funcDotClicked(event)
  {
    if (!event.target.classList.contains("dots__dot")) return null;

    const numSlide = parseInt(event.target.dataset.slide);
    currentSlide = numSlide;
    funcSlide();
  }

  function funcUpdateDots(dotDiv)
  {
    parseInt(dotDiv.dataset.slide) !== currentSlide ? 
      dotDiv.classList.remove("dots__dot--active") :
      dotDiv.classList.add("dots__dot--active");
  }

  btnSlideRight.addEventListener("click", funcSlideRight);
  btnSlideLeft.addEventListener("click", funcSlideLeft);
  document.addEventListener("keydown", funcHandleKeyEvent)

  console.log(dotsContainer);
  arrSlides.forEach((_, numIndex) => 
  {
    dotsContainer.insertAdjacentHTML("beforeend", `<button class = 'dots__dot' `
      + `data-slide = '${numIndex}'> </button>`);
  });

  [...dotsContainer.children].forEach(funcUpdateDots);

  dotsContainer.addEventListener("click", funcDotClicked);
}
funcImplementSlider();
