"use strict";

(function () {
    const header = document.querySelector('h1');

    function changeColorFunction()
    {
        if (header["style"]["color"] != "blue")
        {
            header["style"]["color"] = "blue";
        }
        else 
        {
            header["style"]["color"] = "white";
        }
    }

    header.addEventListener("click", changeColorFunction);
})();

// In this example, the callback function still works because of closure. Even 
// though the instantaneous execution function has stopped existing, the 
// changeColorFunction still remembers all of the variables that existed when 
// it was first declared. This means that it remembers the header variable
// which contains the location in memory of the header object. This allows 
// it to use that variable, even though the parent function has been returned.