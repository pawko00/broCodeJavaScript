//callback is a function that is passed to another function as an argument.
//used to handle asychronous operations like reading a file,networking requests and interacting with dbs
//"hey, when youre done, call this next"


function sum(callback, x, y){ // as we see, the callback argument is a function that will be executed after calculating the result
    let result = x + y
    callback(result);
}

function display(x){
    console.log(x);
}


function displayDom(result){
    document.getElementById("MyH1").textContent = result;
}

sum(displayDom,2,3);



//foreach is a method that allows us to iterate over elements of array and aplly specified funtions to each element
//foreach gives us automatically elements: element, index, array for every array we apply this method to. we have to remember that those elements work only in this order (element, index,array) 

//if function passed as a argument to a forEach method requires only one argument then it's "element". If function requires three, they have to be in order like above.


const drunkards = ["Mietek", "Maciek", "Zbychu", "Dzony"]
function printElement(ele){
    console.log(ele);
}

function printEverything(ele,id,arr){
    console.log(ele, id, arr)
}

drunkards.forEach(printElement)//calling the function with only one argument
console.log("XDD")
drunkards.forEach(printEverything)//calling the function with three arguments 




