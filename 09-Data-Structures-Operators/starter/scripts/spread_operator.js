// We use the spread operator to unpack an array. 

const arrayNumbers = [7, 8, 9];

const newArray = [1, 2, ...arrayNumbers];
console.log(newArray);

// We also want to spread arrays when we pass arguments into functions. 

console.log(...arrayNumbers);

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
    }
  };

//   const newMenu = [...restaurant.mainMenu, "Gnocci"];

//   console.log(...newMenu);

//   const completeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu]

//   console.log(completeMenu);


  // We can only use array spreading in scenarios where we have values 
  // separated by commas. 

  // The spread operator actually works on all iterables. This includes all 
  // arrays, strings, maps, and sets, but not objects. 

// const jonasName = "Jonas";
// const letters = [...jonasName];
// console.log(...letters, " ", "rocks!");

// let ingredients = ([prompt("Enter ingredient one: "), 
//     prompt("Enter ingredient two: "), prompt("Enter ingredient three: ")])
// restaurant.orderPasta(...ingredients)

// function test(...args)
// {
//     console.log(...args)
// }
// test(1, 2, 3, 4, 5)

// We can also use the spread operator to create copies of existing objects. 
// Note that a spread copy is only a shallow copy. 

const newRestaurant = {...restaurant, 
    founder: "Kyle Galway"};
console.log(...newRestaurant.testArray)
console.log(...restaurant.testArray)
newRestaurant.testArray.push(4, 5, 6)
console.log(...newRestaurant.testArray)
console.log(...restaurant.testArray)

// Because the copy made by the spread operator is shallow, any interior 
// objects will still be pointed to by the same location in memory. 
// Creating a deep copy is much more difficult. 