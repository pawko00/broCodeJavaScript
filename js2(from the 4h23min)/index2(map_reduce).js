//map is a function that accepts a callback, apply it to every element of an array, then return a new array
//in function passed as the argument we have to place 'return' statement. In other way, a returned array will contain just "undefined" values.

const numbers =  [12,4,211,0,40,-134,-2,-11];

function rozpierdolTo(liczba){
    return liczba*33-23-69; 
}


let rozjebaneNumbers = numbers.map(rozpierdolTo);
console.log(rozjebaneNumbers);


const dates = ['05-19-2023', '02-01-1203','12-33-1242'];

function formatDate(date){
    let splittedDate = date.split("-");
    return(`${splittedDate[1]}/${splittedDate[0]}/${splittedDate[2]}`);
}


const grades = [75,50,90,80,65,95];
const maximum = grades.reduce(max)

function max(previous, actual){
    return actual > previous ? actual : previous;
}

console.log(maximum )