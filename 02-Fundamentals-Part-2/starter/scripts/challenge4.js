// const prices = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// const calcTip = (price) => 
// {
//     if (price >= 15 && price <= 300)
//     {
//         return price * .15;
//     }
//     else 
//     {
//         return price * .2;
//     }
// }

// prices.forEach((price) => 
// {
//     tips.push(calcTip(price));
// });

// for (let i = 0; i < prices.length; i++)
// {
//     totals.push(prices[i] + tips[i]);
// }

// console.log(prices);
// console.log(tips);
// console.log(totals);


const calcAverage = function(arrayNumbers) 
{
    let sum = 0;
    arrayNumbers.forEach(number => {
        sum += number;
    });
    return sum / arrayNumbers.length;
}

console.log(calcAverage([1, 2, 3, 4, 5]))

