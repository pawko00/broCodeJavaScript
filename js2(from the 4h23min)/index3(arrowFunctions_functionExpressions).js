//a function expression - the way to declare a function as a variable

//function declaration:

function haha(){
    console.log("haha");
}

const haha2 = function(){
    console.log("haha")
}


//Why was the function expression developed for? 
//1. Hoisting, the function declaration is hoisted to the top of code, so the function is available regrardless of where it's called
//2. Anonymous functoins - a function expression allows to create one-time-use function such as callbacks. We dont need to reference the function enywhere else in code.
//3. Conditional function creation:

/*
let greet;

if (userIsLoggedIn) {
    greet = function() {
        console.log("Welcome back!");
    };
} else {
    greet = function() {
        console.log("Hello, please log in.");
    };
}

greet(); // Output depends on the value of `userIsLoggedIn`


*/


//arrow functions


function hello(){
    console.log("hello");
}

const hello4 = () =>  console.log("Hello")


function temp(x){
    console.log(`Hello ${x}`)
}

const tempArrow = (x) => 
    {
        console.log(`Hello ${x}`)
        console.log('ejejeje    ')
    };

setTimeout((x) => console.log(`Hello, ${x}`) ,3000)  