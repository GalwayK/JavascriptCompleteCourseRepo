console.log("Exporting module.");

const shippingCost = 10;

export const arrCart = [];

console.log("Waiting Five Seconds");

const timerPromise = new Promise((funcResolve) => 
{
    setTimeout(funcResolve, 5000, "Timer expired!");
});

export const output = await timerPromise;

console.log(output);

export const addToCart = function(product, quantity)
{
    arrCart.push([product, quantity]);
    console.log(`${product} ${quantity} added to cart!`);
};

export const printCart = () =>
{
    console.log(arrCart);
}

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as numQuantity };

export default "This is the default export!";
export const notDefault = "This is not the default export!";

// In modules we can use await outside of functions. Only works for modules.