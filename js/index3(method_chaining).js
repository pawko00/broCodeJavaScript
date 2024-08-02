//method chaining - zagnieżdzanie metod


let username = window.prompt("Enter your username: ");

username = username.trim;
let letter = username.charAt(0);
letter = letter.toUpperCase();


let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();


username = letter +extraChars;

console.log(username)