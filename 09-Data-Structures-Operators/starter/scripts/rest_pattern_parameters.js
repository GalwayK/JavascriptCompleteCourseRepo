
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
    george: "Hi",
    order: function(starterIndex, mainIndex)
    {
        return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
    }, 
    orderDelivery: function({starterIndex = 0, mainIndex = 0, time = "21:00",
      address = "Bleck"})
    {
      console.log(`Order received: ${this.starterMenu[starterIndex]} and 
  ${this.starterMenu[mainIndex]} at ${time}, delivered to ${address}`);
    }, 
    testArray: [1, 2, 3],
    orderPasta: function(ingOne, ingTwo, ingThree)
    {
        console.log(`Here is your pasta with ${ingOne}, ${ingTwo}, ${ingThree}`)
    }, 
    orderPizza: function(mainTopping, ...altToppings)
    {
        let outputString = "";
        for (let i = altToppings.length - 1; i > 0; i--)
        {
            outputString = `${outputString}, ${altToppings[i]}`
        }
        if (altToppings.length)
        {
            outputString = `${outputString}, and ${altToppings[0]}`
        }
        outputString = `Thank you for ordering Pizza with ${mainTopping}${outputString}`;
        return outputString;
    }
  };


// The rest pattern uses the same syntax as the spread operator, but it actually
// has the opposite effect. The spread operator is for unpacking, the rest 
// // pattern is for packing an array. 

// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// const [a, b, ...c] = [1, 2, 3, 4, 5];
// console.log(a, b, c);

let [a, b, c, d] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(a, b, c, ...d);

// Rest also can be used for objects. If we do so, the remaining elements 
// wlll be collected into a new object. 

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays)

// When we use the rest parameter for function arguments, it is called 
// rest parameters. 

function add(...numbers)
{
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++)
    {
        sum += numbers[i];
    }
    console.log(sum);
}

add(1, 2, 3, 4, 5);
const x = [23, 5, 7];
add(...x)

const pizza = restaurant.orderPizza("Cheese", "Pepperoni", "Olives")
console.log(pizza)
