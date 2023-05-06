"use strict";

/*
Before we had ES6 modules, we had to create our own namespace for exporting. 

To do this, we commonly contained all of the exports within an ify function.
*/

const OldShoppingCart = (function()
{
const arrCart = [];
const shippingCost = 10;
const totalPrice = 237;
const addTocart = function(strProduct, numCost)
{
    arrCart.push(strProduct, numCost);
};
const orderStock = function(strProduct, numCost)
{
    console.log(`${strProduct} costs ${numCost}`);
};

return {
    arrCart,
    shippingCost, 
    totalPrice, 
    addTocart
}
})();

console.log(OldShoppingCart);

// While this way of creating makeshift modules worked, it also required work 
// to ensure modules were loaded in the correct order on the HTML page. 