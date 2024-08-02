//where a variable is recognized
//theres is no possibility to get variable declared in other function, beceuse thats how local scope works


let x = 3; //global scope 


function1();
function2();

function function1(){
    let x = 1;
    console.log(x);
} 


function function2(){
    console.log(x);
} 

