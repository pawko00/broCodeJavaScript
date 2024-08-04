let numbers = [1,6,2,6,4,32,67];
let max = Math.max(...numbers);// in this line the 'numbers' array will be expanded to 1,6,2,6, just like normal arguments passed a function call

let strg  = "Dzony Fontane";

let letters = [...strg]; // in this line strg string will be transformed into a separate chars, then passed as a normal argument


let mixedArray = [...strg, ...numbers]; // creates an array of the mixed elements from the string and the array 
let mixedArray2 = [...strg, ...numbers, "eggs", "milk"]; // creates an array of the mixed elements from the string and the array 