function openFridge(...foods){
    console.log(foods)
}

function openFridgeWithSpread(...foods){
    console.log(...foods)
}

function openFridgeAndGetAnArray(...foods){
    return foods;
}


function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result+=number
    }
    return result
}


function combineString(...datas){
    let finalString = "";
    for (data of datas){
        finalString += (data+" ");
    }
}

function combineStringButSimpleWay(...strings){
    return strings.join("");
}

const total = sum(1,3,5);

console.log(total);


const food1 = "pizza"
const food2 = "hamburger"
const food3 = "hotdog"
const food4 = "sushi"

openFridge(food1,food2,food3,food4)