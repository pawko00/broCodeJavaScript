let fruits = ['apple', 'orange', 'banana'];


fruits.push("bamber")//push adds an element at the end of a array
fruits.pop()//removes the last element of an array

fruits.shift()// removes first element of an array
fruits.unshift("Dzakson")//adds an element at the start of an array 

let numOfFruits = fruits.length;

let index = fruits.indexOf("apple");


for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}