const billValue = 301;

const tipPercent = billValue >= 15 && billValue <= 300 ? billValue * .15 : billValue * .2;

console.log(`The bill was ${billValue}, the tip was ${tipPercent}, and the total price was ${billValue + tipPercent}.`);