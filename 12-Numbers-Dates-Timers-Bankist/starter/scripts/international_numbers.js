"use strict";

// Different nationalities also format numbers in different ways. 

// Just as with date formatters, we can create an options object to ensure that 
// units and values are correct to the region they are shown to. For currency
// we do need to set the currency type, since it is possible to show a currency
// for a region in which that currency is not used. 

const mphOptionsObj = 
{
    "style": "unit", 
    "unit": "mile-per-hour"
};

const percentOptionsObj = 
{
    "style": "percent"
};

const currencyOptionsObj = 
{
    "style": "currency", 
    "currency": "EUR", 
    "useGrouping": true
};

let currentLocale = navigator.language;

// let usNumFormatter = new Intl.NumberFormat("en-CA", formatOptionsObj);
// let geNumFormatter = new Intl.NumberFormat("de-DE", formatOptionsObj);
// let syNumFormatter = new Intl.NumberFormat("ar-SY", formatOptionsObj);

// let usNumFormatter = new Intl.NumberFormat("en-CA", percentOptionsObj);
// let geNumFormatter = new Intl.NumberFormat("de-DE", percentOptionsObj);
// let syNumFormatter = new Intl.NumberFormat("ar-SY", percentOptionsObj);

let usNumFormatter = new Intl.NumberFormat("en-CA", currencyOptionsObj);
let geNumFormatter = new Intl.NumberFormat("de-DE", currencyOptionsObj);
let syNumFormatter = new Intl.NumberFormat("ar-SY", currencyOptionsObj);

let numberValue = 123456789.123;

console.log(usNumFormatter.format(numberValue));
console.log(geNumFormatter.format(numberValue));
console.log(syNumFormatter.format(numberValue));
